import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome } from 'react-native-vector-icons'
import Button from '../components/Button';


import { checkUsernameAvailability } from '../api/CheckUserAva';
import { signUp } from '../api/SignUp';

export default function Cad({ navigation, route }) {

  const [nome, setNome] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConf, setSenhaConf] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  const [isAvailable, setIsAvailable] = useState(null);
  const [loading, setLoading] = useState(false);

  const [loadingRequest, setLoadingRequest] = useState(false);
  

  React.useEffect(() => {
    const debounceTimeout = setTimeout(() => {
        if (nomeUsuario !== '') {
            if (nomeUsuario.length <= 3){
              setIsAvailable(false)
              return
            }
            checkUsernameAvailability(nomeUsuario, setIsAvailable, setLoading);
        } else {
            setIsAvailable(null);
        }
    }, 500); // Aqui fica 0.5 segundos depois última letra digitada

    return () => {
        // Limpe o timeout se o usuário ainda está digitando
        clearTimeout(debounceTimeout);
    };
}, [nomeUsuario]);



  React.useEffect(() => {
    if (route.params?.pergunta) {
      console.log(route.params?.pergunta, route.params.resposta);
      setPergunta(route.params?.pergunta)
      setResposta(route.params?.resposta)
    }
  }, [route.params?.pergunta]);

  const handleCadastro = () => {
    if (!nome){
      Alert.alert('Atenção!', 'Preencha o nome')
      return
    }
    if (!nomeUsuario || !isAvailable || loading){
      Alert.alert('Atenção!', 'Verifique o nome de usuário')
      return
    }
    if (!senha){
      Alert.alert('Atenção!', 'Verifique sua senha')
      return
    }
    if (!senhaConf){
      Alert.alert('Atenção!', 'Verifique sua senha')
      return
    }
    if (senha != senhaConf){
      Alert.alert('Atenção!', 'As senhas não estão iguais')
      return
    }
    if (!pergunta){
      Alert.alert('Atenção!', 'Preencha o formulário de pergunta de recuperação')
      return
    }
    signUp(
      nome, nomeUsuario, senha, pergunta, resposta,
      setLoadingRequest, navigation,
      setNome, setNomeUsuario, setSenha, setSenhaConf, setPergunta, setResposta
    )
  };
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff4142', '#c03c99', '#7b38fb']}
        style={styles.linearGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />

      <ScrollView>
        <View style={{ height: Dimensions.get("window").height }}>
          <View style={styles.containerLogoText}>

            <View style={styles.containerImage}>
              <Image
                source={require('../../assets/favicon.png')}
                style={{ height: 150, width: 150 }}
              />
            </View>

            <View style={{ marginBottom: '-15%' }}>
              <Text style={styles.textNameApp}>Inscreva-se</Text>
              <Text style={styles.textWelcome}>Criar nova conta</Text>

            </View>
          </View>

          <View style={styles.containerTouchables}>
            <View style={styles.form}>
              <Text style={styles.texto}>Nome:</Text>
              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
              />
              <Text style={styles.texto}>Nome de Usuário:</Text>
              <View style={[styles.input, {flexDirection: 'row', alignItems: 'center'}]}>
                <TextInput
                  value={nomeUsuario}
                  onChangeText={setNomeUsuario}
                  style={{width: '90%'}}
                />
              {loading && <ActivityIndicator />}
              {!loading && (
                isAvailable !== null && (
                <FontAwesome 
                  name={!isAvailable ? 'close' : 'check'} 
                  size={20} color={!isAvailable ? '#F00' : '#0F0'}
                />
                ))}
              </View>
              <Text style={styles.texto}>Senha:</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
              />
              <Text style={styles.texto}>Confirmar Senha:</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={senhaConf}
                onChangeText={setSenhaConf}
              />
              <Text style={styles.texto}>Pergunta de recuperação:</Text>
              <TouchableOpacity onPress={() => { navigation.navigate('ModalScreen') }}>
                <View style={styles.openModal}>
                  <Text style={{ color: '#777' }}>{!route.params?.pergunta ? 'Selecione aqui' : route.params?.pergunta}</Text>
                  <AntDesign name='caretdown' color='#000' size={20} ></AntDesign>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.button}
                disabled={loadingRequest}
                onPress={() => { handleCadastro(); }}
              >
                <Button text="Inscrever-se" loadingfeedback={loadingRequest}/>
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
    height: '35%',
    marginTop: '-9%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTouchables: {
    height: '5%',
    alignItems: 'center'
  },
  form: {
    height: 600,
    width: 350,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  containerImage: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textWelcome: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  textNameApp: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  texto: {
    color: 'white',
    padding: 9
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingLeft: 14
  },
  button: {
    alignItems: 'center',
    paddingTop: 4,
    marginTop: '6%'
  },
  follow: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 5,
    color: '#fff',
    fontWeight: 'bold',

  },
  openModal: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 4,
    paddingLeft: 14,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

});