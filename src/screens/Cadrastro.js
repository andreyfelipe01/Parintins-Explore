import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cad(){
    return (
      <View style={styles.container}>
        
      <LinearGradient
        colors={['#ff4142', '#c03c99', '#7b38fb']}
        style={styles.linearGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />

      <View style={styles.containerLogoText}>
      <View style={styles.containerImage}>
          <Image
            source={require('../../assets/favicon.png')}
            style={{height: 170, width: 170}}
          />
      </View> 
      <View>
      <Text style={styles.textNameApp}>Inscreva-se</Text>
          <Text style={styles.textWelcome}>Criar nova conta</Text>
          
      </View>
      </View>
      <View style={styles.containerTouchables}>

      <View>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
        />

        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />

        <Text>Confirmar Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Inscrever-se</Text>
        </TouchableOpacity>
      </View>
      </View>
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
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTouchables:{
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  containerImage:{
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
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
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
  },
  form:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '100%',
    transform: [{scaleX:1.5}],
    overflow: 'hidden',
  },
});