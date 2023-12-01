import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import GetGameImage from "../../assets/components/getGameImage";
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig";

function Carrinho({ navigation }) {
    const router = useRoute()
    const [precoTotal, setPrecoTotal] = useState(0)
    const [carrinho, setCarrinho] = useState([{ "uid": "default", "qtd": 1, "data": { "ext": "png", "name": "Loading...", "price": 1.00 } }])
    useFocusEffect(
        React.useCallback(() => { carregarCarrinho(); return () => { } }, [])
    )
    const carregarCarrinho = () => {
        AsyncStorage.getItem("carrinho").then(res => res == null ? setCarrinho([]) : setCarrinho(JSON.parse(res)))

        // AsyncStorage.setItem('carrinho', "[]")
    }
    const subTotal = () => {
        let soma = 0
        for (let index = 0; index < carrinho.length; index++) {
            soma += carrinho[index].data.price * carrinho[index].qtd
        }
        return soma.toFixed(2)
    }



    const sendToDatabase = async () => {
        const docRef = await addDoc(collection(db, "Compras"), {
            produtos: carrinho,
            user: await AsyncStorage.getItem("user"),
            dataHora: Date.now()
        })
            .then(() => {
                setCarrinho([])
                AsyncStorage.setItem("carrinho", "[]")
                Alert.alert("Your order has been confirmed")
            })
            .catch(()=>{
                Alert.alert("Oops an error happened :\\ contact the administrator")
            });
        console.log("Enviou");
    }


    useEffect(() => {
        carregarCarrinho()
        // AsyncStorage.getItem("gamePage").then(res => setGame(res))
    }, [])
    useEffect(() => {
        console.log("---------");
        console.log(carrinho);
    }, [carrinho])
    
    
    const descomprar = (game) => {
        car(false, game)
    }
    const comprar = (game) => {
        car(true, game)
    }
    const car = (add, game) => {
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

        <View className="bg-purple-bright h-full w-full flex flex-col justify-between">
            <View className="flex space-y-1 ">
                <Text className="text-white mt-10 text-xl">Produtos:</Text>
                {carrinho.map((item) => {
                    console.log(item);
                    { var total = (item.data.price) * item.qtd }
                    // { var total = 1 * item.qtd }
                    return (
                        <View key={item.id} className="w-full min-h-[12vh] bg-purple-100 justify-center items-center">
                            <View className="w-[95%]  flex flex-row justify-between">
                                <View className="w-[80%] flex flex-row space-x-4">
                                    <View className="w-[30%] h-16">
                                        <GetGameImage game={item} />
                                    </View>
                                    <View className="">
                                        <Text className='text-purple-bright text-[15px]'>{(item.data.name)}</Text>
                                        <Text className="font-bold">R$ {total.toFixed(2)}</Text>
                                    </View>
                                </View>
                                <View className="flex flex-row justify-between w-[15%] items-center">
                                    <TouchableOpacity onPress={() => comprar(item)} className="bg-green-500 rounded-full w-5 flex items-center justify-center"><Text className="text-white font-bold">+</Text></TouchableOpacity>
                                    <Text className="text-purple-bright">{item.qtd}</Text>
                                    <TouchableOpacity onPress={() => descomprar(item)} className="bg-red-700 rounded-full w-5 flex items-center justify-center"><Text className="text-white font-bold">-</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}

            </View>
            <View className="bg-purple-100 min-h-[8vh] flex  items-center justify-center">
                <View className="flex flex-row-reverse w-[90%] gap-4 items-center">
                    <TouchableOpacity className="bg-black h-7 w-20 flex items-center justify-center rounded-sm" onPress={async() => await sendToDatabase()}>
                        <Text className="text-white ">
                            BUY NOW
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-purple-bright text-[15px] font-bold">R$ {subTotal()}</Text>
                </View>
            </View>
        </View>
    );
}

export default Carrinho;