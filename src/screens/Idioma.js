import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button';

export default function Idioma({ navigation }) {

  const [lang, setLang] = useState('');

  function navigatePage() {
    if (!lang){
      Alert.alert('Por favor', 'Selecione seu idioma para prosseguir')
      return
    }
    navigation.navigate('bemvindo')
  }

  function feedbackColorButtons(buttonlang) {
    return lang == buttonlang ? '#2D2' : '#FFF'
  }

  function feedbackColorText(buttonlang) {
    return lang == buttonlang ? '#FFF' : 'gray'
  }
  
  return (
    <View style={styles.container}>

      <LinearGradient
        colors={['#ff4142', '#c03c99', '#7b38fb']}
        style={styles.linearGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }} />

      <View style={styles.containerLogoText}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/favicon.png')}
            style={{ height: 160, width: 160 }} />
        </View>
        <View>

          <Text style={styles.textWelcome}>Selecione seu idioma</Text>
        </View>

        <View style={styles.fundotransparente}>

          <TouchableOpacity
            style={[styles.iconBox, { backgroundColor: feedbackColorButtons('pt') }]}
            onPress={() => {
              setLang('pt')
            }}>
            <Text style={[styles.iconText, {color: feedbackColorText('pt')}]}> Português - Brasil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconBox, { backgroundColor: feedbackColorButtons('en') }]}
            onPress={() => {
              setLang('en')
            }}>
            <Text style={[styles.iconText, {color: feedbackColorText('en')}]}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconBox, { backgroundColor: feedbackColorButtons('es') }]}
            onPress={() => {
              setLang('es')
            }}>
            <Text style={[styles.iconText, {color: feedbackColorText('es')}]}>Espanõl</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', marginTop: 100 }} onPress={() => { navigatePage() }}>
            <Button text="Avançar" />
          </TouchableOpacity>


        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    height: '100%'
  },
  containerLogoText: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200

  },

  textWelcome: {
    color: '#FFF',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: '',
    padding: 40,
  },

  fundotransparente: {
    height: 270,
    width: 350,
    padding: 28,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

  iconBox: {
    marginTop: 5,
    width: 295,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20

  },

  icon: {
    width: 40,
    height: 40,
  },

  iconText: {
    fontSize: 20,   // Defina o tamanho da fonte
    fontWeight: 'bold', // Defina o peso da fonte, se necessário
  },
  containerImage: {
    marginTop: 15
  }

}

)