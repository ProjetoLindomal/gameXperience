import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
// import CampoInput from "../../assets/components/textinput"
// import CustomButton from "../../assets/components/custombutton";
import { useState } from "react";
// import CustomButton from "../../assets/components/customButton";

function Cadastro({ navigation }) {
    const [passo, setPasso] = useState(1);
    const [user, setUser] = useState({
        name: '',
        email: '',
        dateOfbirthday: '',
        cep: '',
        road: '',
        neighborhood: '',
        complement: '',
        city: '', 
        state: '',
        password: ''
    })

    const upload = () => {
        if (!user.name) {
          Alert.alert('Preencha o campo nome')
          return
        }
        else if (!user.email) {
          Alert.alert('Preencha o campo dataNascimento')
          return
        }
        else if(!user.dateOfbirthday){
            Alert.alert('Preecha o campo data')
        }
        else {   
          setPasso(2)
        }
      }
      const upload2 = () => {
        if (!user.cep) {
          Alert.alert('Preencha o campo cep')
        }
        else if (user.cep < 8) {
          Alert.alert('CEP incompleto')
        }
        else {
          setPasso(3)
        }
      }
      const upload3 = () => {
        if (!email) {
          Alert.alert('Preencha o campo e-mail')
        }
        else if (!telefone) {
          Alert.alert('Preencha o campo celular')
        }
        else {
          setPasso(5)
        }
      }
      const upload4 = () => {
        if (!senha) {
          Alert.alert('Preencha o campo senha')
        }
        else if (senha.length < 8) {
          Alert.alert('Senha inválida, digite 8 números')
        }
        else if (confirmarSenha != senha) {
          Alert.alert('As senhas não conferem')
        }
        else {
          criarConta()  
        }
      }
    return (
        <View className='bg-purple-bright flex-1 h-screen justify-center grid grid-rows-2 gap-8'>
            <View className="w-full  items-center justify-end ">
                <Image className="w-[170px] h-[160px]" source={require("../../assets/logo.png")} />
                <Text className="text-white text-[22px]">
                    Welcome back
                </Text>
            </View>
            
            <View className="flex">
                <View className="flex h-[350px] justify-evenly items-center">
                    {/* <CampoInput texto={"Name"} textoplaceholder={"Enter your Name"} />
                    <CampoInput texto={"E-mail"} textoplaceholder={"Enter your E-mail"} />
                    <CampoInput texto={"Date of birthday"} textoplaceholder={"Enter your Date of birthday"} />
                    
                    <CustomButton name={"Next step"} evento={() => navigation.navigate("mainMenu")} /> */}
                </View>
                <View className="items-center">
                    <TouchableOpacity onPress={() => {navigation.navigate("Login") }}>
                        <Text className="text-[#EACEF6]">
                            {"Do you have an account?"}
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-[#FF48E2]">
                        {"Sign in"}
                    </Text>
                </View>
            </View>

        </View>
    );
}

export default Cadastro;