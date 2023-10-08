import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView, Dimensions, Alert} from "react-native";
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({navigation}){

  //Mostrar a altura atual da tela
  //console.log(Dimensions.get("window").height)
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.51.166:8080/parintinsexplore/signin.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomeUsuario,
          senha,
        }),
      });

      const result = await response.text();
      console.log(result)
      if (result == 'Sucessfull') {
        navigation.navigate('Home')
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretas');
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      Alert.alert('Erro', 'Verifique sua conexão');
    }
  };
  

  return(
    <View style={styles.container}>     
      <LinearGradient 
        style={styles.linearGradient}
        colors={['#ff4142', '#c03c99', '#7b38fb']} 
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      
      <ScrollView>
        <View style={styles.contentContainer}>

          <View style={styles.containerLogoText}>
            <View style={styles.containerImage}>
              <Image
                source={require('../../assets/favicon.png')}
                style={{height:180, width:180}}
              />
            </View>
            <View>
                <Text style={styles.textNameApp}>Login</Text>
            </View>
          </View>

          <View style={styles.fundotransparente}>
            <Text style={styles.textsenha}>Nome de Usuario</Text>
            <TextInput
              placeholder="Ex: usuario123"
              style={styles.input}
              value={nomeUsuario}
              onChangeText={setNomeUsuario}
            />
            <Text style={styles.textsenha}>Senha</Text>
            <TextInput
              placeholder="*************"
              style={styles.input}
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity onPress={()=>{handleLogin()}}>
              <View style={{alignItems: 'center' , marginTop:40}}>
                <Button text="Entrar" />
              </View>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    linearGradient:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      container:{
        flex: 1,
      },
      contentContainer:{
        alignItems: "center", 
        justifyContent: "space-evenly", 
        height: Dimensions.get("window").height
      },
      containerImage:{
        height: 200
      },
      containerTouchables:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      textNameApp:{
        color: '#FFF',
        fontSize: 30,
        textAlign:'center',
        fontWeight: 'bold'
      },
      fundotransparente:{
        height: 300,
        width:350,
        padding:20,
        borderRadius:8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
      textsenha:{
        color:'white',
        padding:9

      },
      input:{
        backgroundColor:'white',
        borderRadius:50,
        padding:4,
        paddingLeft:14
      }
})

