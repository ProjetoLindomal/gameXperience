import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

function Carrinho({ navigation }) {

    const [carrinho, setCarrinho] = useState([{ "id": "", "name": "", "price": 0, "qtd": 0 }])
    useEffect(() => {
        // AsyncStorage.getItem("gamePage").then(res => setGame(res))
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
                }
            // if (item.qtd <= 0) {
            //     setCarrinho(carrinho.filter((item) => { return item.qtd >= 1; }))
            //     // delete carrinho[index]
            // }
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
        <View>
            <View className="bg-purple-bright h-full w-full flex flex-row items-center justify-evenly">
                <Text className="text-white">Produtos:</Text>
                {carrinho.map((item)=>{
                    
                })}
            </View>
        </View>
    );
}

export default Carrinho;