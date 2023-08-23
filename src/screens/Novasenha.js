import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  Image, ScrollView} from "react-native";
import Button from '../components/Button'
import { LinearGradient } from 'expo-linear-gradient';

export default function Novas(){
    return(
        <View style={styles.container}>
            <LinearGradient 
                style={styles.linearGradient}
                colors={['#ff4142', '#c03c99', '#7b38fb']} 
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            />
            <View style={{alignItems: "center", height:'100%', justifyContent: "space-around"}}>
            <View style={styles.containerLogoText}>
                <View style={styles.containerImage}>
                    <Image
                    source={require('../../assets/favicon.png')}
                    style={{height:180, width:180, marginTop:10}}
                    />
                </View>
                <View style={styles.textdatela}>
                    <Text style={styles.textNameApp}>Nova Senha</Text>
                    <Text style={styles.textWelcome}>Recuperar Conta</Text>
                </View>
            </View>
        <View style={{flex: 1}}>
            <View style={styles.fundotransparente}>
                <Text style={styles.textsenha}>Senha</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                />

                <Text style={styles.textsenha}>Confirmar senha</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                />
                <TouchableOpacity>
                    <View style={{alignItems: 'center' , marginTop:40}}>
                    <Button text="Recuperar Conta" />
                    </View>
                </TouchableOpacity>
            </View>
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
        height:'auto',
      },
      containerLogoText:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      containerImage:{
        height: 200
      },
      containerTouchables:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
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
      },
      textdatela:{
        marginTop:-15
      }
})