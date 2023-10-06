import React, {useState} from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Idioma from '../screens/Idioma';
import Bemvindo from '../screens/WelcomeTransition';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Cadastro from '../screens/Cadrastro';
import ModalScreen from '../components/ModalScreen';

import TelaHome from '../screens/Home';
import Map from '../screens/Map'
import QrCode from '../screens/QRCode';
import Dicionario from '../screens/Biblioteca';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RouteCadastro() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen 
            name="Home1" 
            component={Idioma}
            
        />
        <Stack.Screen 
            name='bemvindo'
            component={Bemvindo}
        />
        <Stack.Screen 
            name='home'
            component={Welcome}
        />
        <Stack.Screen 
            name='cadastro'
            component={Cadastro}
        />
        <Stack.Screen
            name='ModalScreen'
            component={ModalScreen}
            options={{ presentation: 'transparentModal' }}
        />
        <Stack.Screen 
            name='login'
            component={Login}
        />
      </Stack.Navigator>
    );
  }

export function Routes () {

    const [ isFirstAccess, setIsFirstAccess ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    return(
        <Tab.Navigator
            initialRouteName={isFirstAccess ? 'RouteCadastro' : 'Home'}
            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle:{
                    backgroundColor: 'white',
                    paddingLeft:10,
                    paddingRight:10,
                    height:'7%'
                }    
            }}         
        >
            <Tab.Screen
                name="Home"
                component={TelaHome}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={'#5a4ea0'}/>
                        }
                            return <Ionicons name="home-outline" size={size} color={'#8b8b8b'} />
                    },
                }}
            />
            <Tab.Screen
                name="Home2"
                component={Map}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="map" size={size} color={'#5a4ea0'}/>
                        }
                            return <Ionicons name="map-outline" size={size} color={'#8b8b8b'} />
                    },
                }}
            />
            <Tab.Screen
                name="Home4"
                component={QrCode}
                options={{
                    
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="qr-code" size={size} color={'#5a4ea0'}/>
                        }
                            return <Ionicons name="qr-code-outline" size={22} color={'#8b8b8b'} />
                    }

                }}
            />
            <Tab.Screen
                name="Home5"
                component={TelaHome}
                options={{
                    
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <FontAwesome5 name="map-marker-alt" size={size} color={'#5a4ea0'}/>
                        }
                            return <FontAwesome5 name="map-marker-alt" size={22} color={'#8b8b8b'} />
                    }

                }}
            />
            <Tab.Screen
                name="dicionario"
                component={Dicionario}
                options={{
                    
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="book" size={size} color={'#5a4ea0'}/>
                        }
                            return <Ionicons name="book-outline" size={22} color={'#8b8b8b'} />
                    }

                }}
            />
            <Tab.Screen
                name="Home3"
                component={TelaHome}
                options={{
                    
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <FontAwesome name="user" size={size} color={'#5a4ea0'}/>
                        }
                            return <FontAwesome name="user-o" size={22} color={'#8b8b8b'} />
                    }

                }}
            />
            <Tab.Screen
                name="RouteCadastro"
                component={RouteCadastro}
                options={{
                    tabBarStyle: {display: 'none'},
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <FontAwesome name="user" size={size} color={'#5a4ea0'}/>
                        }
                            return <FontAwesome name="user-o" size={22} color={'#8b8b8b'} />
                    },
                    tabBarItemStyle: { display: 'none' },
                    tabBarStyle: { display: 'none' },

                }}
            />
        </Tab.Navigator>
    )
}