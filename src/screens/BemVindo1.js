import {Text, View, StyleSheet,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Função setTimeout execulta uma operação depois de um
//dado tempo (em milisegundo)

export default function SplashBemvindo ({navigation}){
  
    setTimeout(()=>{navigation.navigate('home')},2000)
    return(

      <View style={styles.container}>
      <LinearGradient 
        style={styles.linearGradient}
        colors={['#ff4142', '#c03c99', '#7b38fb']} 
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
    <View style={styles.containerLogoText}>
      <View style={styles.containerImage}>
        <Image 
        source={require('../../assets/favicon.png')}
        style={{height:170, width:170}}
        />
      </View>
      <View>
      <Text style={styles.textWelcome}>Bem Vindo ao</Text>
      <Text style={styles.textNameApp}>Parintins Explore</Text>
      </View>
    </View>
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
      justifyContent:'center',
    },
    containerImage:{
      height: 200,
      
    },
    containerLogoText:{
      alignItems:'center',
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

  })