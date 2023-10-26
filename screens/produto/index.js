import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { HeaderPersonalizado } from "../../assets/components/tab";
import cart from "../../assets/imagens/cart.png"

function Produto({ route }) {
    //Route params pega os parâmetros enviados da outra tela para essa atual
    const { productId, game } = route.params;

    return (
        <ScrollView>
            <View className="bg-purple-bright h-full w-full">
                <HeaderPersonalizado />
                <View className="w-full flex ">
                    <Image className="w-full h-[25vh]"
                        source={{ uri: `https://firebasestorage.googleapis.com/v0/b/gamexperience-lindomas.appspot.com/o/${game.name.replace(/ /g, '%20')}.${game.ext}?alt=media` }}

                    />
                    <View className="w-full flex items-center gap-y-8">
                        <View className="w-[90%]  gap-4 grid">
                            <Text className=" text-white text-xl">{game.name}</Text>
                            <Text className="text-white text-lg">{game.price}</Text>
                            <Text className="text-white text-justify text-base">Sekiro: Shadows Die Twice é um jogo de ação e aventura ambientado no Japão feudal. Os jogadores assumem o papel de Wolf, um shinobi, em uma missão para resgatar uma nobre sequestrada e vingar-se de seus inimigos. O jogo se destaca pelo combate desafiador, exigindo táticas de bloqueio, desvio e contra-ataque. A exploração, escolhas morais e uma ambientação detalhada enriquecem a experiência. Com uma jogabilidade intensa e uma narrativa envolvente, "Sekiro" é um título cativante para os fãs de ação e aventura.</Text>
                        </View>
                        <View className="w-[90%] flex items-center">
                            <View className="w-full flex flex-row justify-between">
                                <TouchableOpacity className="w-[60%] rounded-md bg-[#1AB82A] h-14 ">
                                    <View className="w-full h-full flex flex-row items-center justify-center space-x-4">
                                        <Text className="text-xl text-white">Add to cart</Text>
                                        <Image source={require("../../assets/imagens/cart.png")} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity className="w-[25%] rounded-md bg-[#D32424] h-14 flex justify-center items-center">
                                    <Image source={require("../../assets/imagens/heart.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Produto;