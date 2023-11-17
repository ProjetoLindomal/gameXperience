import { Link, useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function GameBox({ uid, game, action }) {
    const navigation = useNavigation();

    const gamePage = async () => {
        try {
            await AsyncStorage.setItem("gamePage", uid.toString());
            navigation.navigate('Produto', { productId: uid, game });
        } catch (error) {
            console.error("Erro ao salvar o valor no AsyncStorage: ", error);
        }

    }
    return (
        // <TouchableOpacity onPress={()=>action()}>
        <TouchableOpacity onPress={gamePage}>
            <View className="bg-[#d4c0ff86] w-[150px] h-[185px] items-center rounded-lg ">
                {game.ext != null ?
                    <Image
                        className="w-[150px] h-[100px] rounded-t-xl"

                        source={
                            // require("../baldurs.jpg")
                            { uri: "https://firebasestorage.googleapis.com/v0/b/gamexperience-lindomas.appspot.com/o/" + game.name.replace(/ /g, '%20') + "." + game.ext + "?alt=media" }
                            // {  'https://firebasestorage.googleapis.com/v0/b/gamexperience-lindomas.appspot.com/o/Sekiro%20Shadows%20Die%20Twice.jpg?alt=media'}    
                        } />
                    :
                    <Image
                        className="w-[150px] h-[100px] rounded-t-3xl"
                        source={
                            // require("../baldurs.jpg")

                            { uri: 'https://firebasestorage.googleapis.com/v0/b/gamexperience-lindomas.appspot.com/o/Sekiro%20Shadows%20Die%20Twice.jpg?alt=media' }
                        } />}
                <View className='w-[80%] h-[50%] justify-evenly'>
                        <Text className="text-white">{game.name}</Text>

                    <View className="flex  justify-between items-center">
                        {game.discount == undefined ? null : game.discount == '0' ? null : <Text className="text-white ">-{game.discount}%</Text>}
                        <View className="bg-purple-950 rounded-md w-full flex items-center ">
                            <Text className="text-white p-1">R${game.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        // </TouchableOpacity>
    );
}

export default GameBox;