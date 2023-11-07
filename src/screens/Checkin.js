import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CheckIn = () => {

    const [modal, setModal] = useState(true);

    const Items = ({ local, image, description }) => {
        return (
            <View style={{ height: 180, width: 120, marginRight: 20 }}>
    
                <TouchableOpacity onPress={()=>{setModal(true)}}>
                    <View style={{ width: '100%', height: 90 }}>
                        <Image
                            source={image}
                            style={{ width: '100%', height: 90 }}
                        />
                        <View style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'rgba(100, 100, 100, 0.8)' }} />
                    </View>
                    <Text>{local}</Text>
                </TouchableOpacity>
    
                <View style={{ alignItems: 'center', height: 60, justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Registrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.section}>
                        <View style={styles.headersection}>
                            <Text>Restaurantes</Text>
                            <Text>Veja mais</Text>
                        </View>
                        <ScrollView horizontal={true}>
                            <Items local='Restaurante da Vânia' image={require('../icon/catedral.jpeg')} />
                        </ScrollView>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.headersection}>
                            <Text>Restaurantes</Text>
                            <Text>Veja mais</Text>
                        </View>
                        <ScrollView horizontal={true}>
                        </ScrollView>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.headersection}>
                            <Text>Restaurantes</Text>
                            <Text>Veja mais</Text>
                        </View>
                        <ScrollView horizontal={true}>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <Modal
                transparent={true}
                visible={modal}
                animationType='fade'
            >
                <View style={styles.centralModal}>
                    <View style={styles.modalContainer}>
                        <View style={{position: 'absolute', right: 0, zIndex: 1, marginTop: 5, marginRight: 5}}>
                            <TouchableOpacity onPress={()=>{setModal(false)}}>
                                <View style={{height: 30, width: 30, backgroundColor:'rgb(255, 255, 255)', borderRadius: 30}}/>
                            </TouchableOpacity>
                        </View>
                        <Image 
                            source={require('../icon/catedral.jpeg')}
                            style={{width: '100%', height: 200}}
                        />
                        <View style={{padding: 10}}>
                            <ScrollView>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Restaurante da Vânia</Text>
                                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ducimus fugit quam necessitatibus exercitationem quasi eum ex facere. Explicabo molestias rerum possimus repellendus adipisci dolorem architecto perspiciatis praesentium inventore voluptatem?</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    section: {
        marginBottom: 30
    },
    headersection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#9400D3',
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centralModal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer:{
        height: '70%',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 10
    }
})
export default CheckIn;
