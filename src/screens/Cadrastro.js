import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button';
import {AntDesign} from 'react-native-vector-icons'

export default function Cad({navigation}){
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#ff4142', '#c03c99', '#7b38fb']}
          style={styles.linearGradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />

      <ScrollView>
        <View style={{height: Dimensions.get("window").height}}>
        <View style={styles.containerLogoText}>
        
          <View style={styles.containerImage}>
              <Image
                source={require('../../assets/favicon.png')}
                style={{height: 150, width: 150}}
              />
          </View> 
          
          <View style={{marginBottom:'-15%'}}>
          <Text style={styles.textNameApp}>Inscreva-se</Text>
          <Text style={styles.textWelcome}>Criar nova conta</Text>
              
          </View>
        </View>
        
        <View style={styles.containerTouchables}>
          <View style={styles.form}>
            <Text style={styles.texto}>Nome:</Text>
            <TextInput
              style={styles.input}
            />
            <Text style={styles.texto}>Nome de Usuário:</Text>
            <TextInput
              style={styles.input}
             
            />
            <Text style={styles.texto}>Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
            />
            <Text style={styles.texto}>Confirmar Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
            />
             <Text style={styles.texto}>Pergunta de recuperação:</Text>
             <TouchableOpacity onPress={()=>{navigation.navigate('ModalScreen')}}>
              <View style={styles.openModal}>
                <Text style={{color: '#777'}}>Selecione aqui</Text>
               <AntDesign name='caretdown' color='#000' size={20} ></AntDesign>
              </View>
              </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            >
              <Button text="Inscrever-se" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.follow}>Continuar sem conta </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </ScrollView>
      </View>
     
      
    );
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

    height: '100%'
  },
  containerLogoText:{
    height: '35%',
    marginTop:'-9%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTouchables:{
    height: '5%',
    alignItems: 'center'
  },
  form:{
    height: 500,
    width:350,
    padding:20,
    borderRadius:8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  containerImage:{
    height: '50%',
    alignItems: 'center', 
    justifyContent: 'center',

  },
  textWelcome:{
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  textNameApp:{
    color: '#FFF',
    fontSize: 30,
    textAlign:'center',
    fontWeight: 'bold'
  },

  texto:{
    color:'white',
    padding:9
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingLeft:14
  },
  button:{
    alignItems: 'center',
    paddingTop: 4,
    marginTop:'6%'
  },
  follow:{
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 5,
    color: '#fff',
    fontWeight: 'bold',
    
  },
  openModal:{
    backgroundColor:'white',
    borderRadius:50,
    padding:4,
    paddingLeft:14,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

});