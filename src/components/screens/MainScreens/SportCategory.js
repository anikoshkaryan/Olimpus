import * as React from 'react';
import  { useState, useRef, useEffect, useContext } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar, useColorScheme} from 'react-native';
import LocationIcon from '../../../assets/svg/location_icon';
import FilterIcon from '../../../assets/svg/filter_btn';
import BackIcon from '../../../assets/svg/category_back_icon';
import CloseIcon from '../../../assets/svg/popup_close_icon2';
import {AuthContext} from "../../AuthContext/context";
import MapView, {Marker} from 'react-native-maps';



import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    Dimensions,
    Keyboard
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SportCategory (props) {

    useEffect(() => {
        // AsyncStorage.clear()
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const context = useContext(AuthContext);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [show_map, setShowMap] = useState(false);

    const [sport_category_items, setSportCategoryItems] = useState([
        {
            id: 1,
            name: '“Arena” campo de fútbol № 12 ',
            address: 'Alicante 34 Santiago Perez',
            players: '12 jugadores',
            price: 'desde 50 €',
            img: require('../../../assets/images/popular_img1.png'),
        },

        {
            id: 2,
            name: '“Арена” футбольное поле № 12 центральная площадка',
            address: 'Alicante 34 Santiago Perez',
            players: '12 jugadores',
            price: 'desde 50 €',
            img: require('../../../assets/images/popular_img1.png')
        },
        {
            id: 3,
            name: '“Arena” campo de fútbol № 12 ',
            address: 'Alicante 34 Santiago Perez',
            players: '12 jugadores',
            price: 'desde 50 €',
            img: require('../../../assets/images/popular_img1.png'),
        },

        {
            id: 4,
            name: '“Арена” футбольное поле № 12 центральная площадка',
            address: 'Alicante 34 Santiago Perez',
            players: '12 jugadores',
            price: 'desde 50 €',
            img: require('../../../assets/images/popular_img1.png')
        },


    ])


    const redirectToMapScreen = () => {
        props.navigation.navigate('MapScreen')
    }

    const colorScheme = useColorScheme();



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>

            <View style={styles.sport_category_header_wrapper}>
                <TouchableOpacity
                    style={styles.sport_category_header_back_btn_title}
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <BackIcon/>
                    <Text style={styles.sport_category_header_title}>Fútbol</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.sport_category_header_location_btn}
                    onPress={() => {
                        setShowMap(true)
                    }}
                >
                    <LocationIcon/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.sport_category_main_part}>
                    <View style={styles.sport_category_items_wrapper}>
                        {sport_category_items.map((item, index) => {
                            return(
                                <TouchableOpacity key={index}
                                                  style={styles.sport_category_item}
                                >
                                    <View style={styles.sport_category_item_img}>
                                        <Image source={item.img} style={styles.sport_category_item_img_child} />
                                        <View style={styles.sport_category_item_img_icons_wrapper}>
                                            <Image source={require('../../../assets/images/icon1.png')} style={styles.sport_category_item_img2} />
                                        </View>
                                    </View>
                                    <View style={styles.sport_category_item_info_box}>
                                        <Text style={styles.sport_category_item_info_box_name}>{item.name}</Text>
                                        <Text style={styles.sport_category_item_info_box_players_count}>{item.players}</Text>
                                        <View style={styles.sport_category_item_info_box_address_price_info}>
                                            <Text style={styles.sport_category_item_info_box_address}>{item.address}</Text>
                                            <Text style={styles.sport_category_item_info_box_price_info}>{item.price}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            )

                        })}
                    </View>
            </ScrollView>
            <View style={styles.sport_category_footer}>
                <View style={styles.sport_category_footer_wrapper}>
                        <FilterIcon/>
                        <View style={styles.sport_category_footer_item}>
                            <Text style={styles.sport_category_footer_item_text}>Césped artificial</Text>
                        </View>
                        <View style={styles.sport_category_footer_item}>
                            <Text style={styles.sport_category_footer_item_text}>Cubierto</Text>
                        </View>
                </View>
            </View>

            {show_map &&
                <View style={styles.show_map_popup}>
                    <View style={{width: '100%', height: '100%', flex: 1, position: 'relative'}}>
                        <TouchableOpacity
                            style={styles.show_map_popup_close_icon}
                            onPress={() => {
                                setShowMap(false)
                            }}
                        >
                            <CloseIcon/>
                        </TouchableOpacity>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: 40.4637,
                                longitude: -3.7492,
                                latitudeDelta: 10.0,
                                longitudeDelta: 10.0,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                title="My Marker"
                                description="Some description"
                            />
                        </MapView>

                    </View>


                </View>
            }

        </SafeAreaView>
    );
}

export default SportCategory;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        width: "100%",
        height: "100%",
    },

    sport_category_header_wrapper: {
        width: '100%',
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: 21,
        paddingRight: 36,
    },
    sport_category_header_back_btn_title: {
        flexDirection: 'row',
        alignItems: "center",
    },
    sport_category_header_title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000',
        marginLeft: 25,
    },
    sport_category_main_part: {
        width: '100%',
        flex: 1,
        paddingTop: 37,

    },
    sport_category_items_wrapper: {
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 80
    },
    sport_category_item: {
        width: '100%',
        marginBottom: 26,
    },
    sport_category_item_img: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 17,
    },

    sport_category_item_img_child: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    sport_category_item_img_icons_wrapper: {
        width: 45,
        height: 34,
        backgroundColor: '#474747BF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        zIndex: 999,
        bottom: 8,
        right: 7,
        overflow: 'hidden'
    },
    sport_category_item_img2: {
        width: 27,
        height: 27,
        resizeMode: 'cover',
    },
    sport_category_item_info_box: {
        width: '100%',
    },
    sport_category_item_info_box_name: {
        fontWeight: '700',
        fontSize: 18,
        color: '#000000',
    },
    sport_category_item_info_box_players_count: {
        fontWeight: '700',
        fontSize: 14,
        color: '#5F5F5F',
        marginBottom: 5
    },
    sport_category_item_info_box_address_price_info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sport_category_item_info_box_address: {
        fontWeight: '700',
        fontSize: 14,
        color: '#5F5F5F',
    },

    sport_category_item_info_box_price_info: {
        fontWeight: '700',
        fontSize: 16,
        color: '#5F5F5F',
    },
    sport_category_footer: {
        width: '100%',
        backgroundColor: '#5F5F5FDE',
        shadowColor: '#FFFFFF40',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 0,
        elevation: 999,
        paddingVertical: 9,
        paddingLeft: 19,
        paddingRight: 74,
        position: 'absolute',
        bottom: 0,

},
    sport_category_footer_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sport_category_footer_item: {
        paddingVertical: 7,
        paddingHorizontal: 13,
        backgroundColor: '#000000',
        borderRadius: 50,
    },
    sport_category_footer_item_text: {
        fontWeight: '700',
        fontSize: 14,
        color: '#ffffff',
    },
    show_map_popup: {
        backgroundColor:  'rgba(157, 148, 148, 0.49)',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 999,
        zIndex: 999999,
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    show_map_popup_close_icon: {
        backgroundColor: '#D9D9D9',
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 24,
        top: 55,
        zIndex: 999,

    }
});
