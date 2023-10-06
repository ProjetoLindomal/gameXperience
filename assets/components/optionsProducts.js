
import { View, Text, Image, TouchableOpacity } from "react-native";

function OptionsProducts({ cor, titulo }) {
    return (
        <View className={(cor == "red" ? "bg-[#E1005F]" : cor == "pink" ? "bg-[#BB0FD7]" : "bg-[#8205E4]") + " w-[110px] h-[130px] items-center rounded-xl "}>
            {/* className={secondButtonName==undefined? "hidden" : `w-[40%]`} */}
            <View className="w-full flex items-center justify-center h-full space-y-2">
                <Image className=" rounded-t-3xl" source={require("../imagens/jogovirtual.png")} />
                <Text className="text-white text-[15px]">
                    {titulo}
                </Text>
            </View>
        </View>


    );
}

export default OptionsProducts;