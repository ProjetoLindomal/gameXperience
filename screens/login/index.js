import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { styled } from "nativewind";
import { useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import CustomButton from "../../assets/components/customButton";
import PasswordCases from "../../assets/components/passwordcases";
import FormGenerator from "../../assets/components/formGenerator";


import { collection, query, where, getDocs } from "firebase/firestore";
import getDB from "../../assets/services/getDB";

const getBank = async() =>{
        const db = await getDB();
    
        const q = query(collection(db, "cities"), where("capital", "==", true));
    
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
}
// useEffect(()=>{
//     getBank()
// },[])

// useEffect(async()  => {
// })

function Login({ navigation }) {
    // const [name, setName] = useState("nome@nome.nome")
    // const [password, setPassword] = useState("senha123456")

    const [dados, setDados] = useState({
        username: "adm@senha123.adm",
        password: "senha123",
    })
    const [errors, setErrors] = useState({
    })

    const doLogin = () => {
        alert("Logado")
        return
        const auth = getAuth();
        signInWithEmailAndPassword(auth, dados.username, dados.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert(JSON.stringify(user))
                navigation.navigate('home')
            })
            .catch((error) => {
                alert('erro');
                alert(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <View className='bg-purple-bright flex-1 h-screen justify-center grid grid-rows-2 gap-8'>
            <View className="w-full flex-[0.4] items-center justify-end ">
                <Image className="w-[170px] h-[160px]" source={require("../../assets/imagens/logo.png")} />
                <Text className="text-white text-[22px]">
                    Welcome back
                </Text>

            </View>
            <View className="flex justify-evenly flex-[0.8] items-center bg-[#070820] rounded-t-2xl">
                <View className="flex h-[350px]  w-[90%]">
                    <FormGenerator
                        buttonName={"Login"}
                        // submitAction={() => navigation.navigate("mainMenu")}
                        submitAction={() => doLogin()}
                        dados={dados}
                        errors={errors}
                        setErrors={setErrors}
                        setDados={setDados} info={[
                            { name: "username", placeholder: "", req: true, specificValidator: ()=>{return "aaaaa"}},
                            { name: "password", placeholder: "", isPassword: true,  description: <PasswordCases />, req: true },
                        ]} />
                        
                    <Text className='text-white'>{dados.user}</Text>
                    {/* <CustomButton/> */}
                </View>
                <View className="items-center">
                    <TouchableOpacity onPress={() => { navigation.navigate("Cadastro") }}>
                        <Text className="text-[#EACEF6]">
                            {"Don't have an account yet?"}
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-[#FF48E2]">
                        {"Sign up"}
                    </Text>
                </View>
            </View>

        </View>
    );
}

export default Login;