import { View, Text, Image } from "react-native";

function GameBox() {
    return (
        <View className="bg-purple-900 w-[160px] h-[200] items-center rounded-3xl">
            <Image className="w-[160px] h-[100px] rounded-t-3xl" source={require("../baldurs.jpg")} />
            <View className='w-[80%] h-[50%] justify-evenly'>
                    <Text className="text-white">Baldur's Gate III</Text>
                    <View className="flex flex-row justify-between">
                        <Text className="text-white ">-80%</Text>
                        <Text className="text-white ">R$200,00</Text>
                    </View>
            </View>
        </View>
    );
}

export default GameBox;