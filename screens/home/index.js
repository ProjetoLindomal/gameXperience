import { View, Text, Button, BackHandler, Alert } from "react-native";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import GameBox from "../../assets/components/gameBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, query, where, getDocs } from "firebase/firestore";
import getDB from "../../assets/services/getDB";
import OptionsProducts from "../../assets/components/optionsProducts.js";
import TesteEE from "../../assets/components/teste";
import Swiper from 'react-native-swiper'
import { HeaderPersonalizado } from "../../assets/components/tab";
import { Image } from "react-native-elements";


function Home({ navigation }) {
    const [games, setGames] = useState([{ "id": "0", "data": { "name": "default", "price": "0" } }])
  useEffect(() => {
    console.log(games);
  }, [games])
  const getBank = async () => {
    setGames([])
    console.log("inicializing...");
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
    console.log("finished");

  }
  useEffect(() => {
    getBank()
    const backAction = () => {
      AsyncStorage.getItem("carrinho").then(res => {
        Alert.alert('Hold on!', 'this is your cart: \n' + JSON.stringify(res), [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          // {text: 'YES', onPress: () => BackHandler.exitApp()},
          { text: 'YES', onPress: () => navigation.navigate('home') },
        ]);
      })
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
    return (
        <ScrollView>
            <View className='bg-purple-bright h-full w-full flex items-center '>
                <HeaderPersonalizado />
                <View className="w-[95%]">
                    <Image className=" h-[22vh]" source={require("../../assets/imagens/residentEvil2.png")} />
                </View>
                <View className="w-[96%] items-center justify-center gap-y-8">
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
                                {[
                                    "Mortal 11 kombat",
                                    "Mortal 11 kombat",
                                    "Mortal 11 kombat",
                                    "Mortal 11 kombat",
                                    "Mortal 11 kombat",
                                    "Mortal 11 kombat"
                                ].map((item) =>
                                    <View className="mx-2">
                                        <TesteEE nome={item} />
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
                                    {[
                                        "Mortal 11 kombat",
                                        "Mortal 11 kombat",
                                        "Mortal 11 kombat",
                                        "Mortal 11 kombat",
                                        "Mortal 11 kombat",
                                        "Mortal 11 kombat"
                                    ].map((item) =>
                                        <View className="mx-2">
                                            <TesteEE nome={item} />
                                        </View>
                                    )}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;