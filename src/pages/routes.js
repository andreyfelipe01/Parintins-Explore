import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Idioma from '../screens/Idioma';
import Bemvindo from '../screens/BemVindo1';
import Login from '../screens/login';
import Welcome from '../screens/Welcome';
import Cadastro from '../screens/Cadrastro';
import TelaH from '../screens/home';


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
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
            name='portugues'
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
            name='login'
            component={Login}
        />
        <Stack.Screen 
            name='tela1app'
            component={TelaH}
        />

  
      </Stack.Navigator>
    );
  }

export function Routes () {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle:{
                    backgroundColor: 'white',
                    paddingLeft:20,
                    paddingRight:20,
                    height:'7%'
                }    
            }}
                    
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
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
                component={HomeStack}
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
                component={HomeStack}
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
                component={HomeStack}
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
                name="Home6"
                component={HomeStack}
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
                component={HomeStack}
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
        </Tab.Navigator>
    )
}