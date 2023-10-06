// import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";


function GameBox({ uid, game, action }) {
    const gamePage = () => {
        AsyncStorage.setItem("gamePage", uid)
    }
    return (
        <Link to={"/produto"} onPress={() => gamePage()}>
            <View className="flex flex-row mr-9">
                <View className="bg-[#b279f38c] w-[150px] h-[185px] items-center rounded-xl ">
                    <Image className="w-full rounded-t-2xl" source={require("../imagens/mortalkombat.png")} />
                    <View className='w-[80%] h-[50%]  justify-evenly'>
                        <Text className="text-white">Mortal kombat</Text>
                        <View className="w-full flex flex-row justify-between">
                            <View className="bg-[#D36767] rounded-sm border border-[#9C141C] w-[35%] flex items-center justify-center">
                                <Text className="text-white ">-30%</Text>
                            </View>
                            <View className="bg-[#491C65] rounded-sm w-[60%] flex items-center justify-center">
                                <Text className="text-white ">R$ 50,00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Link>
        // </TouchableOpacity>
    );
}

export default GameBox;