import { View, Text, Button, BackHandler, Alert } from "react-native";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import GameBox from "../../assets/components/gameBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, query, where, getDocs } from "firebase/firestore";
import getDB from "../../assets/services/getDB";

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
    <View className='bg-purple-bright h-full w-full flex flex-row justify-center items-center'>
      <View className = 'w-11/12 flex justify-between flex-row flex-wrap'>

        {games.map((game) =>
          <GameBox key={game.id} uid={game.id} game={game.data} />
        )}
      </View>
    </View>
  );
}

export default Home;