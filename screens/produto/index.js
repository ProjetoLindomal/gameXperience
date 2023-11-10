import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import getDB from "../../assets/services/getDB";
import BaseImageURI from "../../assets/services/baseImageURI";
import GetGameImage from "../../assets/components/getGameImage";

function Produto({ navigation }) {
    const [game, setGame] = useState({ "uid": "default", "data": { "ext": "png", "name": "Loading...", "price": 0.00 } })
    const [carrinho, setCarrinho] = useState([{ "id": "", "name": "", "price": 0, "qtd": 0 }])

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
    }, [])
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
            newCarrinho.push({ "id": game.id, "data": game.data, "qtd": 1 })
        }
        setCarrinho(newCarrinho)
        // alert(JSON.stringify(carrinho))
        // AsyncStorage.setItem("carrinho", '')
        AsyncStorage.setItem("carrinho", JSON.stringify(newCarrinho))
        console.log("^^^^^^^^^^^^");
        console.log(newCarrinho);
    }
    return (
        <View className="bg-purple-bright h-full w-full flex flex-col items-center justify-evenly">
            <Text className="text-white">Produto: {game.data.name}</Text>

            <View className="w-[160px] h-[100px] overflow-hidden">
                <GetGameImage game={game}/>
            </View>
            <TouchableOpacity onPress={() => comprar()} className=" bg-green-500"><Text>comprar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => descomprar()} className=" bg-red-500"><Text>descomprar</Text></TouchableOpacity>
        </View>
    );
}

export default Produto;