import React from "react";
import { Text, View , TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Profile(){
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#9008ff" />
          </TouchableOpacity>
          <TouchableOpacity>
          <AntDesign name="questioncircle" size={24} color="#9008ff" />
          </TouchableOpacity>
        </View>
        <View style={styles.icon2}>
          <FontAwesome  name="user-circle" size={80} color="#9000ff" />
        </View>
        <View style={styles.botao}>
          <TouchableOpacity>
            <Text style={{color:'white', fontSize:13}}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conteudoo}>
          <View style={styles.conteudo}>
            <FontAwesome name="user" size={24} color="#8a8a8a" />
            <Text style={styles.texto}>Nome</Text>
            
          </View>
          <View style={styles.conteudo}>
            <FontAwesome name="user" size={24} color="#8a8a8a" />
            <Text style={styles.texto}>Nome de usuário</Text>
          </View>
          <View style={styles.conteudo}>
            <View style={{flexDirection: 'row', alignItems:'center', gap:6}}>
              <Ionicons name="settings" size={24} color="#8a8a8a" />
              <Text style={styles.texto}>Configurações</Text>
            </View>
            <TouchableOpacity>
            <AntDesign  name="right" size={15} color="#8a8a8a" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create ({
  container:{
    width:'100%',
    height:'100%',
  },
  icon:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:12,
    
  },
  icon2:{
    alignItems:'center',
    marginTop:'40%'
  },
  botao:{
    backgroundColor: '#bfbfbf' ,
    width: '35%',
    height: '3.5%',
    justifyContent: 'center',
    borderRadius: 20,
    textAlign:'center',
    alignSelf:'center',
    marginTop:14    
  },
  conteudoo:{
    alignSelf:'center',
    marginTop:'9%',
  },
  conteudo:{
    flexDirection:'row',
    alignItems:'center',
    gap:6,
    borderBottomWidth:2,
    borderColor:'#9000ff',
    padding:10
  },
  texto:{
    width:155
  }

})