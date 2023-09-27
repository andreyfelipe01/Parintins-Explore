import React, {useEffect} from "react";
import { Text , View , TouchableOpacity, TextInput, Image ,StyleSheet } from "react-native";

import { Ionicons } from '@expo/vector-icons';

export default function TelaH({navigation}){
    useEffect(()=>{
        navigation.getParent().setOptions({tabBarStyle:{display:'flex'}})
      },[])
    return(
        <View style={styles.container}>
            <View style={styles.pesquisa}>
                <View style={styles.sectionStyle}>
                    <View>
                        <TextInput 
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
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f1f1f1',
        width:'100%',
        height:'100%',
    },
    pesquisa:{
        flexDirection:'row',
        width:'100%',
        height:'20%',
        alignItems:'center',
        gap:20
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
});