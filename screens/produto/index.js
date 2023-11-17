import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { HeaderPersonalizado } from "../../assets/components/tab";
import cart from "../../assets/imagens/cart.png"

    import { collection, query, where, getDocs } from "firebase/firestore";
    import getDB from "../../assets/services/getDB";
    import BaseImageURI from "../../assets/services/baseImageURI";
    import GetGameImage from "../../assets/components/getGameImage";
import { useRoute } from "@react-navigation/core";

function Carrinho({ navigation }) {
    //Route params pega os parâmetros enviados da outra tela para essa atual
        const router = useRoute()

        const [game, setGame] = useState({ "uid": "default", "data": { "ext": "png", "name": "Loading...", "price": 0.00 } })
        const [carrinho, setCarrinho] = useState([{ "uid": "default", "data": { "ext": "png", "name": "Loading...", "price": 0.00 } }])

        const getBank = async (uid) => {
            console.log("produto inicializing...");
            const db = await getDB();
            // console.log(uid)
            // const q = query(collection(db, "cities"), where("capital", "==", true));
            const q = query(collection(db, "Games"));
            const querySnapshot = await getDocs(q);
            let naoEncontrou = true
            // console.log(querySnapshot);

            querySnapshot.forEach((doc) => {
                // console.log(".?");
                if (doc.id == uid) {
                    console.log("xx");
                    console.log(doc.data());
                    // console.log(doc.data());
                    naoEncontrou = false
                    const item = {
                        "id": doc.id,
                        "data": doc.data()
                    }
                    setGame(item)
                }
                //   const item = {
                //     "id": doc.id,
                //     "data": doc.data()
                //   }
                //   setGame((anteriores) => [...anteriores, item])
            });
            if (naoEncontrou) {
                setGame(null)
            }

            // console.log(game);
            console.log("produto finished");

        }

        useEffect(() => {
            AsyncStorage.getItem("gamePage").then(res => { getBank(res) })
            AsyncStorage.getItem("carrinho").then(res => res == null ? setCarrinho([{}]) : setCarrinho(JSON.parse(res)))
        }, [router])
        useEffect(() => {
            console.log("GAME:");
            console.log(game);
        }, [game])

        useEffect(() => {
            console.log("\n\n      ---------carrinho---------");
            console.log(carrinho);
            console.log("---------carrinho---------\n\n");
        }, [carrinho])
        const descomprar = () => {
            car(false)
        }
        const comprar = () => {
            // setCarrinho([{}])
            // AsyncStorage.setItem("carrinho", [{}])
            car(true)
        }
        const car = (add) => {
            let newCarrinho = []
            let jogoNovo = true
            carrinho.forEach((item, index) => {
                if (item.id == game.id) {
                    if (add) {
                        item.qtd += 1
                    } else {
                        item.qtd = item.qtd - 1
                    }

                    jogoNovo = false
                }
                if (item.qtd > 0) {
                    newCarrinho.push(item)
                }

            })
            if (jogoNovo && add) {
                // alert("jogo novo")
                // carrinho.push({ "id": game, "name": game, "price": 50.99, "qtd": 1 })
                newCarrinho.push({ "id": game.id,"data": game.data, "qtd": 1 })
            }
            setCarrinho(newCarrinho)
            // alert(JSON.stringify(carrinho))
            // AsyncStorage.setItem("carrinho", '')
            AsyncStorage.setItem("carrinho", JSON.stringify(newCarrinho))
            console.log("^^^^^^^^^^^^");
            console.log(newCarrinho);
        }
        return (
            <ScrollView>
                <View className="bg-purple-bright h-full w-full">
                    <HeaderPersonalizado />
                    <View className="w-full flex ">
                        <View className="w-full h-[30vh]">
                                <GetGameImage game={game} />
                        </View>
                        {/* <Image
                        source={{ uri: `https://firebasestorage.googleapis.com/v0/b/gamexperience-lindomas.appspot.com/o/${game.name.replace(/ /g, '%20')}.${game.ext}?alt=media` }}

                    /> */}
                        <View className="w-full flex items-center gap-y-8">
                            <View className="w-[90%]  gap-4 grid">
                                <Text className=" text-white text-xl">{game.data.name}</Text>
                                <Text className="text-white text-lg">{game.data.price}</Text>
                                <Text className="text-white text-justify text-base">Sekiro: Shadows Die Twice é um jogo de ação e aventura ambientado no Japão feudal. Os jogadores assumem o papel de Wolf, um shinobi, em uma missão para resgatar uma nobre sequestrada e vingar-se de seus inimigos. O jogo se destaca pelo combate desafiador, exigindo táticas de bloqueio, desvio e contra-ataque. A exploração, escolhas morais e uma ambientação detalhada enriquecem a experiência. Com uma jogabilidade intensa e uma narrativa envolvente, "Sekiro" é um título cativante para os fãs de ação e aventura.</Text>
                            </View>
                            <View className="w-[90%] flex items-center">
                                <View className="w-full flex flex-row justify-between">
                                    <TouchableOpacity onPress={comprar} className="w-[60%] rounded-md bg-[#1AB82A] h-14 ">
                                        <View className="w-full h-full flex flex-row items-center justify-center space-x-4">
                                            <Text className="text-xl text-white">Add to cart</Text>
                                            <Image source={require("../../assets/imagens/cart.png")} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-[25%] rounded-md bg-[#D32424] h-14 flex justify-center items-center">
                                        <Image source={require("../../assets/imagens/heart.png")} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    
}
    export default Carrinho;