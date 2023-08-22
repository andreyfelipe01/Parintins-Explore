import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Pilha = createNativeStackNavigator();

//Importação de telas
import Welcome from './src/screens/Welcome';
import Cadrastro from './src/screens/Cadrastro';

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen name="home" component={Welcome} options={{headerShown: false}}/>
        <Pilha.Screen name="cadastro" component={Cadrastro} options={{headerShown: false}}/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
