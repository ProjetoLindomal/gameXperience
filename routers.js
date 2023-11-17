
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './screens/home';
import Produto from './screens/produto';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carrinho from './screens/carrinho';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Carrinho from './screens/carrinho';
import UserProfile from './screens/userprofile';

const Nav = createBottomTabNavigator();
const Pilha = createNativeStackNavigator()

function NavBar() {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#4D166F',
          borderTopColor: 'transparent',
          paddingVertical: 1,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white'
      }}
    >
      <Pilha.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Pilha.Screen
        name="Notifications"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          )
        }}
      />
      <Pilha.Screen
        name="Cart"
        component={Carrinho}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cart" size={size} color={color} />
          )
        }}
      />
      <Pilha.Screen
        name="User"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          )
        }}
      />

      <Pilha.Screen
        options={{ 
          headerShown: false, 
          tabBarShowLabel: null,
          tabBarIconStyle: { display: "none" }, }} name= "asas" component={Produto} />
    </Nav.Navigator>

  )
}

function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Nav.Screen options={{ headerShown: false }} name="Nav" component={NavBar} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Carrinho' component={Carrinho} />
        <Nav.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Nav.Screen options={{ headerShown: false }} name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;