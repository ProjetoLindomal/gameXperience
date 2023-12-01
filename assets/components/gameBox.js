import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GetGameImage from "./getGameImage";
import BaseImageURI from "../services/baseImageURI";

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
        console.log(JSON.stringify(game));
        AsyncStorage.setItem("gamePage", uid)
    }
    return (
        // <TouchableOpacity onPress={()=>action()}>r
        <Link to={"/Produto"} onPress={() => gamePage()}>
            <View className="bg-[#684A84] w-[160px] h-[200px] items-center rounded-lg">
                {game.ext != null ?
                    <View className="w-[160px] h-[100px] rounded-t-3xl">

                        <GetGameImage game={{ data: game }} />
                    </View>
                    // require("../baldurs.jpg")
                    // {  'https://firebasestorage.googleapis.com/v0/b/gamexperience-lindomas.appspot.com/o/Sekiro%20Shadows%20Die%20Twice.jpg?alt=media'}    
                    :
                    <View>
                        {/* <Text>aaaa</Text> */}
                        <Image
                            className=" rounded-t-3xl"
                            source={
                                // require("../baldurs.jpg")

                                { uri: BaseImageURI() + 'Sekiro%20Shadows%20Die%20Twice.jpg?alt=media' }
                            } />
                    </View>
                }
                <View className='w-[80%] h-[50%] flex justify-center space-y-2'>
                    <Text className="text-gray-200 text-[15px]">{game.name}</Text>

                    <View className="flex flex-row">
                        {game.discount == undefined ? null : game.discount == '0' ? null : <Text className="text-white ">-{game.discount}%</Text>}
                        <Text className="text-white text-[18px]">R${game.price}</Text>
                    </View>
                </View>
            </View>
        </Link>
        //</TouchableOpacity>
        // </TouchableOpacity>
    );
}

export default GameBox;