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
            style={{height: 100, width: 100}}
          />
        </View> 
        <View>
          <Text style={styles.textWelcome}>Bem vindo ao</Text>
          <Text style={styles.textNameApp}>Parintins Explorer</Text>
        </View>
      </View>

      <View style={styles.containerTouchables}>
        <View style={styles.form}/>

          <TouchableOpacity style={{paddingBottom: 50}} onPress={() => {navigation.navigate("cadastro")}} >
            <View style={{alignItems: 'center'}}>
              <Button text="Cadastre-se agora"  />
            </View>
          </TouchableOpacity>

          <View style={{paddingBottom: 60, flexDirection: 'row'}}>
            <Text style={styles.textLogin}>Já possui cadastro? </Text>
            <TouchableOpacity>
              <Text style={styles.textLogin}>Login </Text>
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