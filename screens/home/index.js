import { View, Text, Button, ScrollView } from "react-native";
// import { db } from "../../firebaseConfig";
import { useEffect } from "react";
import { HeaderPersonalizado } from "../../assets/components/tab";
import { Image } from "react-native-elements";
// import mortal from "../../assets/imagens/mortalkombat.png";
import OptionsProducts from "../../assets/components/optionsProducts.js";
import TesteEE from "../../assets/components/teste";
import Swiper from 'react-native-swiper'
// import { collection, query, where, getDocs } from "firebase/firestore";


function Home({ navigation }) {
    useEffect(() => {

    }, [])
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