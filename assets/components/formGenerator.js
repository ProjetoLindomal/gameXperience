import { Alert, View, Text } from "react-native";
import InputGenerator from "./inputGenerator";
import CustomButton from "./customButton";

function FormGenerator({ dados, setDados, info, submitAction, buttonName, secondButtonName, secondButtonFunction }) {
    // const verification = async () => {
    //     const blockList = []
    //     await info.map(async (item) =>
    //         await item.req == false ? null : dados[item.name].length > 0 ? null : blockList.push(item.name),
        
    //     );
    //     blockList.length == 0 ? submitAction() : block(blockList);
    // }
    const block = (name) => {
        Alert.alert("Attention", `These fields are required: ${name.map((item) => "\n- " + item)}.`)
        return true
    }
    return (
        <View className='flex w-[100%] justify-evenly items-center '>
            <InputGenerator dados={dados} setDados={setDados} info={info} />
            <View className="p-2"></View>
            <View className="flex flex-row w-[100%] justify-around items-center " >
                <View className={secondButtonName==undefined? "hidden" : `w-[40%]`}>
                    <CustomButton name={secondButtonName} evento={() => secondButtonFunction()} />
                </View>
                <View className={secondButtonName==undefined? "flex flex-row w-[100%] justify-around items-center" : `w-[40%]`}> 
                    {/* <CustomButton name={buttonName} evento={() => verification()} /> */}
                </View>
            </View>
        </View>
    );
}

export default FormGenerator;