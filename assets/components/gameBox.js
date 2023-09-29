import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";

function GameBox({ uid, game, action }) {
    const gamePage = () => {
        // AsyncStorage.clear()
        // AsyncStorage.removeItem("gamePage")


        // AsyncStorage.getItem("gamePage").then(res => {
        //     if (res == null) {
        //         const lista = [uid]
        //         alert(uid)
        //         AsyncStorage.setItem("gamePage", lista.toString())
        //     } else {
                
        //         res = res.push(uid)
        //         AsyncStorage.setItem("gamePage",res.toString())
        //     }
            // AsyncStorage.clearItem("gamePage")
        // }

        
        // )
        // .then(res=>
        //     res==null
        //     )
        AsyncStorage.setItem("gamePage",uid)
    }
    return (
        // <TouchableOpacity onPress={()=>action()}>
        <Link to={"/produto"} onPress={() => gamePage()}>
            <View className="bg-purple-900 w-[160px] h-[200] items-center rounded-3xl">
                <Image className="w-[160px] h-[100px] rounded-t-3xl" source={require("../baldurs.jpg")} />
                <View className='w-[80%] h-[50%] justify-evenly'>
                    <Text className="text-white">{game.name}</Text>
                    <View className="flex flex-row justify-between">
                        {game.discount == undefined ? null : game.discount == '0'? null : <Text className="text-white ">-{game.discount}%</Text>}
                        <Text className="text-white ">R${game.price}</Text>
                    </View>
                </View>
            </View>
        </Link>
        // </TouchableOpacity>
    );
}

export default GameBox;