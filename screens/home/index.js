import { View, Text, Button } from "react-native";
// import { db } from "../../firebaseConfig";
import { useEffect } from "react";
import GameBox from "../../assets/components/gameBox";
// import { collection, query, where, getDocs } from "firebase/firestore";


function Home({ navigation }) {
    useEffect(()=>{

    },[])
    return (
        <View className='bg-purple-bright h-full w-full flex flex-row items-center justify-evenly'>
           <GameBox />
           <GameBox />
        </View>
    );
}

export default Home;