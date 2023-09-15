import { Alert, View, Text } from "react-native";
import InputGenerator from "./inputGenerator";
import CustomButton from "./customButton";

function FormGenerator({dados, setDados, info, submitAction, buttonName}) {
    
    const verification = async ()  =>{
        const blockList = []
        await info.map(async (item)=>
            await item.req == false? null : dados[item.name].length > 0? null : blockList.push(item.name)
            
        );
        blockList.length == 0? submitAction() : block(blockList);
    }
    const block = (name) =>{
        Alert.alert("Attention",`These fields are required: ${name.map((item)=>"\n- "+item)}.`)
        return true
    }
    return ( 
        <View className='flex w-screen justify-evenly items-center'>
            <InputGenerator dados={dados} setDados={setDados} info={info}/>
            <View className="p-2"></View>
            <CustomButton name={buttonName} evento={() => verification()}/>
        </View>
     );
}

export default FormGenerator;