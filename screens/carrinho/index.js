import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Carrinho({ navigation }) {
    const router = useRoute()
    const [carrinho, setCarrinho] = useState([{ "uid": "default", "data": { "ext": "png", "name": "Loading...", "price": 0.00 } }])

    useEffect(() => {
        // AsyncStorage.getItem("gamePage").then(res => setGame(res))
        AsyncStorage.getItem("carrinho").then(res => res == null ? setCarrinho([{}]) : setCarrinho(JSON.parse(res)))
    }, [router])
    useEffect(() => {
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
        <View>
            <View className="bg-purple-bright h-full w-full flex flex-row items-center justify-evenly">
                <Text className="text-white">Produtos:</Text>
                {carrinho.map((item) =>
                    <View key={item.uid}>
                        <Text className='text-white'>{JSON.stringify(item)}, {item.qtd}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

export default Carrinho;