import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Login from './screens/login';
import { Alert, BackHandler, View } from 'react-native';
import Cadastro from './screens/cadastro';
import Produto from './screens/produto';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function MainMenu() {
  return(
    <Tab.Navigator >
      <Tab.Screen options={{headerShown:false}} name='Home' component={Home}/>
    </Tab.Navigator>
  )
}

function Routers() {
  // BackHandler.addEventListener('hardwareBackPress', function(){
  //   if(!this.onMainScreen())
  //   alert("aaaaaaaaaa")
  //   // AsyncStorage.getItem("gamePage").then(res => alert(res))
  // })
  // useEffect(() => {
  //   const backAction = () => {
  //     AsyncStorage.getItem("carrinho").then(res=>{
  //     Alert.alert('Hold on!', 'this is your cart: \n'+JSON.stringify(res), [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);})
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
    const Stack = createNativeStackNavigator();
  return(
    
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/> */}
        {/* <Stack.Screen options={{headerShown:false}} name='Cadastro' component={Cadastro}/> */}
        <Stack.Screen options={{headerShown:false}} name='home' component={MainMenu}/>
        <Stack.Screen options={{headerShown:false}} name='produto' component={Produto}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;