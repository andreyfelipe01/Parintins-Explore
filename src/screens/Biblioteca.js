import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    StyleSheet
} from 'react-native';
import { Data } from './Data';
import { SafeAreaView } from 'react-native-safe-area-context';
const Biblioteca = () => {
    const [search, setSearch] = useState('');
    const filteredData = Data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <SafeAreaView style={{backgroundColor: 'rgb(255, 255, 255)'}}>
            <View style={styles.pesquisa}>
                <TextInput
                    placeholder='Pesquisar no dicionário'
                    value={search}
                    onChangeText={text => setSearch(text)}
                    style={{width: '100%'}}
                />
            </View>
            <FlatList
                data={filteredData}
                extraData={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style ={styles.geral}>
                        <View style={styles.estilo}> 
                        <Text style={styles.titulo}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        </View>

                    </View>
                )
                }
            />
            
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    pesquisa:{
        backgroundColor: 'rgb(255, 255, 255)',
        margin: 5,
        padding: 7,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    titulo:{
        fontWeight: 'bold',
        marginBottom: 4,
        fontSize: 16,
        

    },
    description: {
        fontSize : 15,
    },
    geral:{
        padding: 10,
        backgroundColor: '#FFF'
    },
    estilo:{
        padding: 6,
        backgroundColor: "#fff6ff",
        borderRadius: 12,
    },
   
  
  
})


export default Biblioteca;