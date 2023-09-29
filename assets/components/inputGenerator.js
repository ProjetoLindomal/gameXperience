import { View, Text, Alert } from "react-native";
import CaixaInput from "./caixaInput";

function InputGenerator({ dados, setDados, info }) {

    return (
        <View>
            {info.map((item) =>
                <View key={item.name}>
                    <CaixaInput
                        title={item.name}
                        value={dados[item.name]}
                        placeholder={item.placeholder != undefined ? item.placeholder : item.name}
                        isPassword={item.isPassword}

                        onChangeText={(e) => setDados({ ...dados, [item.name]: e })}
                    />
                    {item.description}
                </View>
            )}
        </View>
    );
}

export default InputGenerator;