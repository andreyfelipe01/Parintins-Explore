import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView, Dimensions, Alert} from "react-native";
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient';
import { getQuestionRecovery } from "../api/GetQuestionRecovery";

export default function PerguntaEsqSenha({navigation, route}){

  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  
  useEffect(() => {
    const onfocusscreen = navigation.addListener('focus', () => {
        const nomeUsuario = route.params?.user;
      getQuestionRecovery(nomeUsuario, setPergunta);
    });
    onfocusscreen;
  }, [navigation]);

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
                <Text style={styles.textNameApp}>Pergunta</Text>
            </View>
          </View>

          <View style={styles.fundotransparente}>

            <Text style={styles.textsenha}>{pergunta}</Text>
            <TextInput
              placeholder="Ex: usuario123"
              style={styles.input}
              value={resposta}
              onChangeText={setResposta}
            />

            <TouchableOpacity onPress={()=>{}}>
              <Text style={styles.follow}>Esqueci a resposta</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
              <View style={{alignItems: 'center' , marginTop:30}}>
                <Button text="Recuperar" />
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

