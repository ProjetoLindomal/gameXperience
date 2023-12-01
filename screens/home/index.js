import { View, Text, Button, BackHandler, Alert, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import GameBox from "../../assets/components/gameBox";
import { collection, query, where, getDocs } from "firebase/firestore";
import getDB from "../../assets/services/getDB";
import OptionsProducts from "../../assets/components/optionsProducts.js";
import { HeaderPersonalizado } from "../../assets/components/tab";
import { Image } from "react-native-elements";

import { Link } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({ navigation }) {
  const [games, setGames] = useState([{ "id": "0", "data": { "name": "default", "price": "0" } }])
  useEffect(() => {
    console.log(games);
  }, [games])
  const getBank = async () => {
    setGames([])
    console.log("home inicializing...");
    const db = await getDB();

        // const q = query(collection(db, "cities"), where("capital", "==", true));
        const q = query(collection(db, "Games"));
        const listaAuxiliar = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const item = {
                "id": doc.id,
                "data": doc.data()
            }
            setGames((anteriores) => [...anteriores, item])
        });

    console.log(games);
    console.log("home finished");

    }
    useEffect(() => {
        getBank()
        // const backAction = () => {
        //     AsyncStorage.getItem("carrinho").then(res => {
        //         Alert.alert('Hold on!', 'this is your cart: \n' + JSON.stringify(res), [
        //             {
        //                 text: 'Cancel',
        //                 onPress: () => null,
        //                 style: 'cancel',
        //             },
        //             // {text: 'YES', onPress: () => BackHandler.exitApp()},
        //             { text: 'YES', onPress: () => navigation.navigate('home') },
        //         ]);
        //     })
        //     return true;
        // }; 

        // return () => backHandler.remove();
    }, []);
    return (
        <ScrollView>
            <View className='bg-purple-950 h-full w-full flex items-center '>
                <HeaderPersonalizado />
                {/* <TouchableOpacity onPress={()=> AsyncStorage.setItem("carrinho","[]")}>
                    <Text className="text-white font-semibold text-xl bg-red-600">Limpar carrinho</Text>
                </TouchableOpacity> */}
                
                <View className="w-[95%] ">
                    <Image className=" h-[30vh]" source={require("../../assets/imagens/residentEvil2.png")} />
                </View>
                <View className="w-[96%] items-center justify-center gap-y-12">
                    <View className="w-full items-center justify-center flex gap-y-3">
                        <View className="w-full grid gap-4">
                            <Text className=" text-xl text-white">
                                What you looking for?
                            </Text>
                            <View className=" flex-row justify-between ">
                                <OptionsProducts cor="red" titulo={"online games"} />
                                <OptionsProducts cor="pink" titulo={"physical games"} />
                                <OptionsProducts cor="" titulo={"To collenction"} />
                            </View>
                        </View>
                    </View>
                    <View className="w-full items-center justify-center">
                        <View className="w-full  justify-center flex gap-y-3">
                            <Text className=" text-white text-xl">
                                special offers
                            </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {games.map((item) =>
                                    <View key={item.id} className="mx-2">
                                        <GameBox uid={item.id} game={item.data} />
                                    </View>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                    <View className="w-full bg-black">
                        <Image className=" h-[22vh]" source={require("../../assets/imagens/fundoJogo.png")} />
                    </View>
                    <View className=" items-center justify-center grid-flow-col">
                        <View className="  justify-center flex gap-y-3">
                            <Text className="text-white text-xl">
                                To collention
                            </Text>
                            <View className="w-full flex flex-row ">
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {games.map((item) =>
                                        <View key={item.id} className="mx-2">
                                            <GameBox uid={item.id} game={item.data} />
                                        </View>
                                    )}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View>
                    <Image className=" h-[22vh]" source={require("../../assets/imagens/black.png")} />

                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;