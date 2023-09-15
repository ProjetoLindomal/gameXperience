import { TouchableOpacity, View, Text} from "react-native";

const CustomButton = ({name, evento}) => {
    return ( 
        <View className="w-[90%]">
            <TouchableOpacity className="h-[55px] flex items-center justify-center rounded-lg bg-[#BB0FD7] border border-[#C032E2]" onPress={evento}>
                <Text className="text-[20px] text-white">{name}</Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default CustomButton;