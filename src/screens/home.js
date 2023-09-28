import React, {useEffect, useState} from "react";
import { Text , View , TouchableOpacity, TextInput, Image ,StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaH({navigation}){
    useEffect(()=>{
        navigation.getParent().setOptions({tabBarStyle:{display:'flex'}})
      },[])
      
    return(
        <View style={styles.container}>
            <View style={styles.pesquisa}>
                <View style={styles.sectionStyle}>
                    <View style={styles.input}> 
                        <TextInput 
                            style={{fontWeight:'bold'}}
                            placeholderTextColor={'#000'}
                            placeholder="Pesquisar"
                        />
                    </View>
                    <View style={{marginLeft:'90%', position:'absolute'}}>
                        <Ionicons name="search" size={24} color="#5e17eb" />
                    </View>
                </View>
                <View style={{borderRadius:2, backgroundColor:'#5e17eb', padding:6.9, }}>
                    <TouchableOpacity>
                        <Ionicons name="settings-sharp" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.logoetext}>
                <View>
                    <Image 
                        source={require('../icon/vaca.png')}
                        style={styles.img}
                    />
                </View>
                <View style={styles.caixacomlinearg}>
                <LinearGradient 
                    style={styles.linearGradient}
                    colors={['#ff4142', '#c03c99', '#7b38fb']} 
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                />
                <Text style={{color:'#fff',}}>Olá, seja bem-vindo(a) ao <Text style={{fontWeight:'bold'}}>Parintins Explorer !</Text></Text>
                </View>
            </View>
            <View style={styles.icones}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity>
                        <LinearGradient 
                            style={styles.linearGradientdosicon}
                            colors={['#ff4142', '#c03c99', '#7b38fb']} 
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        />
                            <Ionicons style={styles.iconesgradient} name="restaurant" size={24} color="white" />
                    </TouchableOpacity>
                    <Text>Restaurantes</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <TouchableOpacity>
                        <LinearGradient 
                            style={styles.linearGradientdosicon}
                            colors={['#ff4142', '#c03c99', '#7b38fb']} 
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        />
                        <MaterialIcons style={styles.iconesgradient} name="hotel" size={24} color="white" />     
                    </TouchableOpacity>
                    <Text>Hotéis</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <TouchableOpacity>
                        <LinearGradient 
                            style={styles.linearGradientdosicon}
                            colors={['#ff4142', '#c03c99', '#7b38fb']} 
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        />
                        <Ionicons style={styles.iconesgradient} name="cart" size={24} color="white" />
                    </TouchableOpacity>
                    <Text>Compras</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <TouchableOpacity>
                        <LinearGradient 
                            style={styles.linearGradientdosicon}
                            colors={['#ff4142', '#c03c99', '#7b38fb']} 
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        />
                        <Ionicons style={styles.iconesgradient} name="ellipsis-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                    <Text>Outros</Text>
                </View>
            </View>
            <View style={styles.maisvisitados}>
                <View>
                    <Text style={styles.textoemnegritoemeiog}>Mais visitados</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                        <Text>Veja mais</Text>
                        <Ionicons name="arrow-forward" size={18} color="#454545" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.icones2}>
                <View>
                    <Text style={styles.textocaixa2}>catedral</Text>
                </View>
                <View>
                    <Text style={styles.textocaixa2}>mercado</Text>
                </View>
                <View>
                    <Text style={styles.textocaixa2}>canta galo</Text>
                </View>
            </View>
        </View>
    )
}

const RatingBar = () => { 
    return ( 
      <View style={styles.ratingBarStyle}> 
        {maxRating.map((item, key) => { 
          return ( 
            <TouchableOpacity 
              activeOpacity={0.7} 
              key={item} 
              onPress={() => setDefaultRating(item)}> 
              <Image 
                style={styles.starImageStyle} 
                source={ 
                  item <= defaultRating 
                    ? require('../icon/star_filled.png') 
                    : require('../icon/star_corner.png') 
                } 
              /> 
            </TouchableOpacity> 
          ); 
        })} 
      </View> 
    ); 
  };





const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f1f1f1',
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    pesquisa:{
        flexDirection:'row',
        width:'100%',
        height:'20%',
        alignItems:'center',
        gap:20,
        
    },
    sectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#5e17eb',
        borderRadius: 4,
        alignItems: 'center',
        height:'25%', 
        width:'65%',
        marginLeft:'10%'       
    },
    input:{
        paddingLeft:7
    },
    img:{
        width:90,
        height:110
    },
    logoetext:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        marginTop:'-7%'
    },
    caixacomlinearg:{
        width:'53%',
        height:'34%',
        alignItems:'center',
        justifyContent:'center'
    },
    linearGradient:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius:5,
    },
    icones:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:40,
        marginTop:'8%'
    },
    linearGradientdosicon:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius:5, 
    },
    iconesgradient:{
        padding:9
    },
    maisvisitados:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'8%',
        gap:160
    },
    textoemnegritoemeiog:{
        fontWeight:'bold',
        fontSize:20,
        color:'#000',   
    },
    textocaixa2:{
        borderRadius:1,
        borderColor:'#9e9e9e',
        borderWidth:1,
        padding:5,
        fontSize:12,
        color:'#9e9e9e',
        textAlign:'center',
        width:80
    },
    icones2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:40,
        marginTop:'8%'
    },
    img2:{
        width:120,
        height:120
    }
});