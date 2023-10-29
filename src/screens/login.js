import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView, Dimensions, Alert} from "react-native";
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from 'react-native-vector-icons';
import { signIn } from "../api/SignIn";

export default function Login({navigation}){

  //Mostrar a altura atual da tela
  //console.log(Dimensions.get("window").height)
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loadingRequest, setLoadingRequest] = useState(false);

  function handleLogin(){
    signIn(nomeUsuario, senha, navigation, setLoadingRequest);
  }

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
            <View style={[styles.input, {flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
              <TextInput
                placeholder="*************"
                secureTextEntry={secureTextEntry}
                value={senha}
                onChangeText={setSenha}
                style={{width: '83%'}}
              />
              <TouchableOpacity onPress={()=>{setSecureTextEntry(!secureTextEntry)}} style={{width: 35}}>
                <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={25} color='#555'/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>{navigation.navigate('usuarioesqsenha')}}>
              <Text style={styles.follow}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleLogin()}}>
              <View style={{alignItems: 'center' , marginTop:30}}>
                <Button text="Entrar" loadingfeedback={loadingRequest}/>
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
        padding:7,
        paddingLeft:14
      },
      follow: {
        textAlign: 'right',
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 5
      },
})

