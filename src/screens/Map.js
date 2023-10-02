import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import {FontAwesome, Ionicons, FontAwesome5, MaterialIcons} from 'react-native-vector-icons'
const MapScreen = () => {

    const { width, height } = Dimensions.get('screen')

    return (
        <>  
            <MapView
                style={{width: width, height: height}}
                initialRegion={{
                    latitude: -2.6300704,
                    longitude: -56.7336636,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={styles.containTop}>
                <View style={styles.containContent}>
                    <View style={styles.containSearch}>
                        <TextInput
                            placeholder='Pesquisar'
                            placeholderTextColor='rgb(40,40,40)'
                        />
                        <FontAwesome name='search' color='#8F00CC' size={15}/>
                    </View>
                </View>
                <View style={{padding: 3}}>
                    <ScrollView horizontal={true}>
                        <View style={styles.itemFilterMap}>
                            <Ionicons name='restaurant'color='#8F00CC' size={15}/>
                            <Text style={{fontSize: 10}}>Restaurantes</Text>
                        </View>
                        <View style={styles.itemFilterMap}>
                            <MaterialIcons name='local-pharmacy'color='#8F00CC' size={17}/>
                            <Text style={{fontSize: 10}}>Farmácias</Text>
                        </View>
                        <View style={styles.itemFilterMap}>
                            <FontAwesome name='hotel'color='#8F00CC' size={15}/>
                            <Text style={{fontSize: 10}}>Hotéis</Text>
                        </View>
                        <View style={styles.itemFilterMap}>
                            <FontAwesome5 name='question'color='#8F00CC' size={15}/>
                            <Text style={{fontSize: 10}}>Praças</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            {/*<View style={styles.provisionalTabNav}>
                <Text>Aqui fica o TabNavigator</Text>
            </View>*/}
            <View style={styles.containCircularIcons}>
                <View style={styles.circularIcon}>
                    <FontAwesome5 name='question' color='#FFF' size={34}/>
                </View>
                <View style={styles.circularIcon}>
                    <Ionicons name='location-sharp' color='#FFF' size={34}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containTop:{
        position: 'absolute',
        top: 0, 
        height: 100, 
        width: '100%'
    },
    containContent: {
        backgroundColor: '#FFF',
        elevation: 15, 
        paddingTop: 40, 
        height: 100
    },
    containSearch: {
        paddingHorizontal: 10,
        borderColor: '#8F00CC', 
        borderWidth: 1, 
        marginHorizontal: 20, 
        padding: 5, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems:'center'
    },
    itemFilterMap: {
        backgroundColor: '#FFF',
        height: 34,
        borderColor: '#8F00CC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        gap: 5,
        borderRadius: 4,
        marginRight: 10
    },
    provisionalTabNav: {
        position: 'absolute', 
        bottom: 0,
        height: 70,
        backgroundColor: '#FFF',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15
    },
    containCircularIcons: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        gap: 15
    },
    circularIcon: {
        height: 60,
        width: 60,
        borderRadius: 50, 
        backgroundColor: '#8F00CC',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MapScreen;
