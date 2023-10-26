import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Produto({ navigation }) {
    const [game, setGame] = useState("hakuna matata")
    const [carrinho, setCarrinho] = useState([{ "id": "", "name": "", "price": 0, "qtd": 0 }])
    useEffect(() => {
        AsyncStorage.getItem("gamePage").then(res => setGame(res))
        AsyncStorage.getItem("carrinho").then(res => res == null ? setCarrinho([{}]) : setCarrinho(JSON.parse(res)))
    }, [])
    useEffect(()=>{
        console.log("---------");
        console.log(carrinho);
    }, [carrinho])
    const descomprar = () => {
        car(false)
    }
    const comprar = () => {
        car(true)
    }
    const car = (add) => {
        
        let newCarrinho = []
        let jogoNovo = true
        // setCarrinho([])
        carrinho.forEach((item, index) => {
            if (item.id == game) {
                if (add) {
                    item.qtd += 1
                } else {
                    item.qtd = item.qtd - 1
                }
                
                jogoNovo = false
            }
            if (item.qtd > 0){
                    newCarrinho.push(item)
                }s
        })
        if (jogoNovo && add) {
            // alert("jogo novo")
            // carrinho.push({ "id": game, "name": game, "price": 50.99, "qtd": 1 })
            newCarrinho.push({ "id": game, "name": game, "price": 50.99, "qtd": 1 })
        }
        setCarrinho(newCarrinho)
        // alert(JSON.stringify(carrinho))
        AsyncStorage.setItem("carrinho", JSON.stringify(newCarrinho))
        console.log("^^^^^^^^^^^^");
        console.log(newCarrinho);
    }
    return (
        <View className="bg-purple-bright h-full w-full flex flex-row items-center justify-evenly">
            <Text className="text-white">Produto: {game}</Text>
            <TouchableOpacity onPress={() => comprar()} className=" bg-green-500"><Text>comprar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => descomprar()} className=" bg-red-500"><Text>descomprar</Text></TouchableOpacity>
        </View>
    );
}

export default Produto;