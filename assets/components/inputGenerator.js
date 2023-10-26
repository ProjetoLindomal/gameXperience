import { View, Text, Alert } from "react-native";
import CaixaInput from "./caixaInput";
import { forwardRef, useImperativeHandle } from "react";

function InputGenerator({ dados, setDados, info, errors, setErrors }, ref) {
    useImperativeHandle(ref, () =>({
        validate(){
            var error = {}
            info.map((item) =>{
                // msg =
                // console.log(`item: ${item.name}, erro: ${errors[item.name]}, msg: ${msg}`);
                error[item.name] = validators(item, dados[item.name])
            })
            setErrors(error)
            return error
        }
    }));
    const validators = (field, value) => {
        if (field?.req && value.toString() == "") {
            return field.name + " is required";
        }
        if (field?.min != null && value.toString().length < field.min || field?.max != null && value.toString().length > field.max) {
            if (field.max == field.min) {
                return field.name + " must contain " + field.max + " letters";
            }
            else if (field.max != null) {
                return field.name + " can't contain more than " + field.max + " letters";
            }
            else if (field.min != null && field.max == null) {
                return field.name + " must contain at least " + field.min + " letters";
            }
            else {
                return field.name + " must be between " + field.min + " and " + field.max;
            }
        }
        var msg = undefined
        if (field?.specificValidator != null) {
            msg = field.specificValidator()?.valueOf();
            if (msg != undefined || msg != "") {
                return msg
            }
        }
        return msg
    }

    return (
        <View className="w-[100%] ">
            {info.map((item) =>
                <View key={item.name}className='pb-3'>
                    <CaixaInput
                        title={item.name}
                        value={dados[item.name]}
                        placeholder={item.placeholder != undefined ? item.placeholder : item.name}
                        isPassword={item.isPassword}
                        onChangeText={(e) =>{ setErrors({...errors, [item.name]: validators(item, e)});setDados({ ...dados, [item.name]: e }) } }
                    />
                    <View className={errors[item.name] == undefined ? "hidden":`block`}>
                    <Text className="text-red-400">
                        *{errors[item.name]}
                    </Text>
                    </View>
                    {item.description}

                </View>
            )}
        </View>
    );
}

export default forwardRef(InputGenerator);