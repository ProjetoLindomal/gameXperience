
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons , Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './screens/home';
import Produto from './screens/produto';
import Login from './screens/login';
import Cadastro from './screens/cadastro';

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
        name="Search"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          )
        }}
      />
    </Nav.Navigator>

  )
}

function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Nav.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Nav.Screen options={{ headerShown: false }} name="Cadastro" component={Cadastro} />
        <Nav.Screen options={{ headerShown: false }} name="Nav" component={NavBar} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Produto' component={Produto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;