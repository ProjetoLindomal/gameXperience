import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Login from './screens/login';
import { View } from 'react-native';
import Cadastro from './screens/cadastro';

const Tab = createBottomTabNavigator();

function MainMenu() {
  return(
    <Tab.Navigator >
      <Tab.Screen options={{headerShown:false}} name='Home' component={Home}/>
    </Tab.Navigator>
  )
}

function Routers() {
    const Stack = createNativeStackNavigator();
  return(
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='Cadastro' component={Cadastro}/>
        <Stack.Screen options={{headerShown:false}} name='mainMenu' component={MainMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;