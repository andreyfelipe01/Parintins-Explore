import React, {
    useEffect,
    useState,
    useRef
} from "react";

import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    ScrollView,
    FlatList,

} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { locations } from "../data/Locations.js";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaH({ navigation }) {

    const maxRating = [1, 2, 3, 4, 5];
    const [itemRatings, setItemRatings] = useState({});

    const refscroll = useRef(null);
    
    const [array, setArray] = useState([]);

    const onViewableItemsChanged = (info) => {
        let itens = info.viewableItems
        setArray(itens)
      };

      const viewabilityConfigCallbackPairs = useRef([
        { onViewableItemsChanged },
      ]);

    function goScroll() {
        let ultimoelemento = array.length
        let nextindex = array[ultimoelemento-1].index;
        refscroll.current.scrollToIndex({ index: nextindex, animated: true, viewPosition: 0.5 });
        
      }
      
      function backScroll() {
        let primeiroelemento = array[0].index;
        refscroll.current.scrollToIndex({ index: primeiroelemento, animated: true, viewPosition: 0.5 });
      }
      
    
    function ItemLocal({ item }) {

        const itemRating = itemRatings[item.id] || 0;

        return (
            <View style={styles.containerRenderItem}>

                <View style={styles.flexlocal}>
                    <View style={{}}>
                        <Image
                            source={require("../icon/catedral.jpeg")}
                            style={styles.imagerenderitem}
                        />
                        <Text style={styles.textrenderitem}>
                            {item.name}
                        </Text>
                        <RatingBar item={item} rating={itemRating} setRating={setRating} />
                    </View>

                    <View style={styles.partgradbutton}>
                        <LinearGradient
                            style={styles.lineargradientri}
                            colors={['#ff4142', '#c03c99', '#7b38fb']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        />
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Veja mais</Text>
                            <Ionicons name="arrow-forward" size={18} color="white" />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }

    const RatingBar = ({ item, rating, setRating }) => {
        return (
            <View style={styles.ratingBarStyle}>
                {maxRating.map((value, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={value}
                            onPress={() => setRating(item.id, value)}
                        >
                            <Image
                                style={{ height: 16, width: 16, }}
                                source={
                                    value <= rating
                                        ? require("../icon/star_filled.png")
                                        : require("../icon/star_corner.png")
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const setRating = (itemId, value) => {
        setItemRatings((prevRatings) => ({
            ...prevRatings,
            [itemId]: value,
        }));
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.pesquisa}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", width: 350}}>
                            <View style={styles.sectionStyle}>
                                <View style={styles.input}>
                                    <TextInput
                                        style={{ fontWeight: 'bold' }}
                                        placeholderTextColor={'#000'}
                                        placeholder="Pesquisar"
                                    />
                                </View>
                                <View style={{ marginLeft: '90%', position: 'absolute' }}>
                                    <Ionicons name="search" size={24} color="#5e17eb" />
                                </View>
                            </View>
                        
                        <View style={{ borderRadius: 2, backgroundColor: '#5e17eb', padding: 6.9, }}>
                            <TouchableOpacity>
                                <Ionicons name="settings-sharp" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
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
                            <Text style={{ color: '#fff', }}>Olá, seja bem-vindo(a) ao <Text style={{ fontWeight: 'bold' }}>Parintins Explorer !</Text></Text>
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.icones}>
                        <View style={{ alignItems: 'center'}}>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={styles.linearGradientdosicon}
                                    colors={['#ff4142', '#c03c99', '#7b38fb']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                />
                                <Ionicons style={styles.iconesgradient} name="restaurant" size={30} color="white" />
                            </TouchableOpacity>
                            <Text>Restaurantes</Text>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={styles.linearGradientdosicon}
                                    colors={['#ff4142', '#c03c99', '#7b38fb']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                />
                                <MaterialIcons style={styles.iconesgradient} name="hotel" size={30} color="white" />
                            </TouchableOpacity>
                            <Text>Hotéis</Text>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={styles.linearGradientdosicon}
                                    colors={['#ff4142', '#c03c99', '#7b38fb']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                />
                                <Ionicons style={styles.iconesgradient} name="cart" size={30} color="white" />
                            </TouchableOpacity>
                            <Text>Compras</Text>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={styles.linearGradientdosicon}
                                    colors={['#ff4142', '#c03c99', '#7b38fb']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                />
                                <Ionicons style={styles.iconesgradient} name="ellipsis-horizontal" size={30} color="white" />
                            </TouchableOpacity>
                            <Text>Outros</Text>
                        </View>
                    </View>
                    </ScrollView>
                    <View style={styles.maisvisitados}>
                        <View>
                            <Text style={styles.textoemnegritoemeiog}>Mais visitados</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>Veja mais</Text>
                                <Ionicons name="arrow-forward" size={18} color="#454545" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/*<View style={styles.icones2}>
                        <View>
                            <Text style={styles.textocaixa2}>catedral</Text>
                        </View>
                        <View>
                            <Text style={styles.textocaixa2}>mercado</Text>
                        </View>
                        <View>
                            <Text style={styles.textocaixa2}>canta galo</Text>
                        </View>
                        </View>*/}
                    <View style={{ height: 270, justifyContent: "center" }}>
                        <LinearGradient
                            style={styles.lineargradientcards}
                            colors={['rgba(240, 240, 240, 0.5)', 
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0)',
                            'rgba(255, 255, 255, 0)',
                            'rgba(240, 240, 240, 0.5)']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, position: "absolute", width: '100%', zIndex: 2 }}>
                            <TouchableOpacity
                                onPress={() => { backScroll(); }}
                                
                            >
                                <Entypo name="chevron-left" size={60} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { goScroll();  }}
                                
                            >
                                <Entypo name="chevron-right" size={60} color="black" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={locations}
                            keyExtractor={item => item.id}
                            renderItem={ItemLocal}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            viewabilityConfig={{viewAreaCoveragePercentThreshold: 40}}
                            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                            //onScroll={(event) => console.log(event.nativeEvent.contentOffset, event.nativeEvent.contentSize.width - event.nativeEvent.layoutMeasurement.width )}
                            contentContainerStyle={{ alignItems: "center", paddingHorizontal: 5 }}
                            ref={refscroll}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
    },
    pesquisa: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: "center"
    },
    sectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#5e17eb',
        borderRadius: 4,
        alignItems: 'center',
        height: 40,
        width: 300
    },
    input: {
        paddingLeft: 5
    },
    img: {
        width: 90,
        height: 110
    },
    logoetext: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 150
    },
    caixacomlinearg: {
        width: 255,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 5,
    },
    icones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        height: 150,
        padding: 20
    },
    linearGradientdosicon: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 5,
    },
    iconesgradient: {
        padding: 9
    },
    maisvisitados: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    textoemnegritoemeiog: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
    },
    textocaixa2: {
        borderRadius: 1,
        borderColor: '#9e9e9e',
        borderWidth: 1,
        padding: 5,
        fontSize: 12,
        color: '#9e9e9e',
        textAlign: 'center',
        width: 80
    },
    icones2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
    },
    img2: {
        width: 120,
        height: 120
    },
    ratingBarStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 25
    },
    containerRenderItem: {
        height: 225,
        width: 170,
        borderRadius: 15,
        elevation: 10,
        marginHorizontal: 20
    },
    flexlocal: {
        backgroundColor: '#FFF',
        height: '100%',
        borderRadius: 15,
        justifyContent: "space-between"
    },
    imagerenderitem: {
        height: 120,
        width: 170,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textrenderitem: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    },
    partgradbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        height: 30
    },
    lineargradientri: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    lineargradientcards:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        pointerEvents: 'none'
    }
});