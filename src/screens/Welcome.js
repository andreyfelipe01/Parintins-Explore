import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button'
export default function Welcome({navigation}) {
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
            style={{height: 160, width: 160}}
          />
        </View> 
        <View>
          <Text style={styles.textWelcome}>Bem vindo ao</Text>
          <Text style={styles.textNameApp}>Parintins Explorer</Text>
        </View>
      </View>

      <View style={styles.containerTouchables}>

          <TouchableOpacity style={{paddingBottom: 30}} onPress={() => {navigation.navigate("login")}} >
            <View style={{alignItems: 'center'}}>
              <Button text="Fazer Login"  />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingBottom: 30}} onPress={() => {navigation.navigate("cadastro")}} >
            <View style={{alignItems: 'center'}}>
              <Button text="Cadastre-se agora"  backgroundColor={"rgba(0, 255, 0, 0.7)"}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingBottom: 50}} onPress={() => {navigation.navigate("Home")}} >
            <View style={{alignItems: 'center'}}>
              <Button text="Continuar sem conta"  />
            </View>
          </TouchableOpacity>

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
  textLogin:{
    color: 'rgb(255, 255, 255)'
  }
});