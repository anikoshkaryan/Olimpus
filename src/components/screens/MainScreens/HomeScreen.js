import * as React from 'react';
import  { useState, useRef, useEffect, useContext } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar, useColorScheme} from 'react-native';
import LocationIcon from '../../../assets/svg/location_icon';
import FilterIcon from '../../../assets/svg/filter_btn';
import CloseIcon from '../../../assets/svg/popup_close_icon';
import Footer from '../../includes/Footer'
import {AuthContext} from "../../AuthContext/context";




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
import BackIcon from "../../../assets/svg/category_back_icon";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home (props) {

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

    const [sport_categories, setSportCategories] = useState([
        {
            id: 1,
            title: 'Fútbol',
            court: 'Cancha - 77',
            img: require('../../../assets/images/categories_img1.png')
        },

        {
            id: 2,
            title: 'Tenis',
            court: 'Cancha - 77',
            img: require('../../../assets/images/categories_img2.png')
        },
        {
            id: 3,
            title: 'Padel',
            court: 'Cancha - 77',
            img: require('../../../assets/images/categories_img2.png')
        },

    ])
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [show_cities_popup, setShowCitiesPopup] = useState(false);
    const [selected_city, setSelectedCity] = useState('');
    const [show_selected_city, setShowSelectedCity] = useState(false);

    const [popular_items, setPopularItems] = useState([
        {
            id: 1,
            name: '“Арена” футбольное поле № 1 на 12 человек',
            address: 'Alicante 34 Santiago Perez',
            img: require('../../../assets/images/popular_img1.png'),
        },

        {
            id: 2,
            name: '“Арена” футбольное поле № 1 на 12 человек',
            address: 'Alicante 34 Santiago Perez',
            img: require('../../../assets/images/popular_img2.png')
        },
        {
            id: 3,
            name: '“Арена” футбольное поле № 1 на 12 человек',
            address: 'Alicante 34 Santiago Perez',
            img: require('../../../assets/images/popular_img1.png'),
        },

        {
            id: 4,
            name: '“Арена” футбольное поле № 1 на 12 человек',
            address: 'Alicante 34 Santiago Perez',
            img: require('../../../assets/images/popular_img2.png')
        },


    ])
    const [cities_list, setCitiesList] = useState([
        {
            id: 1,
            city: 'Аlicante'
        },

        {
            id: 2,
            city: 'Аlicante'
        },
        {
            id: 3,
            city: 'Аlicante'
        },
        {
            id: 4,
            city: 'Аlicante'
        },
        {
            id: 5,
            city: 'Аlicante'
        },
        {
            id: 6,
            city: 'Аlicante'
        },
    ])


    const redirectToSportCategoryScreen = () => {
        props.navigation.navigate('SportCategoryScreen')
    }

    const colorScheme = useColorScheme();





    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>

            <View style={styles.home_header_wrapper}>
                <View
                    style={styles.home_header_back_icon_title_btn}>
                    <TouchableOpacity
                        onPress={() => {
                             props.navigation.goBack()
                    }}>
                        <BackIcon/>
                    </TouchableOpacity>
                    <Text style={styles.home_header_logo}>
                        Olimpus
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.home_header_location_btn}
                    onPress={() => {
                        setShowCitiesPopup(true)
                    }}
                >
                    <LocationIcon/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.home_main_wrapper}>
                <ScrollView horizontal={true} nestedScrollEnabled={true} style={styles.home_sport_categories_items_wrapper}>
                    {sport_categories.map((item, index) => {
                        return(
                            <TouchableOpacity key={index}
                                              style={styles.home_sport_categories_item}
                                              onPress={() => {
                                                  redirectToSportCategoryScreen()
                                              }}
                            >
                               <View style={styles.home_sport_categories_item_info_box}>
                                   <Text style={styles.home_sport_categories_item_info_box_title}>{item.title}</Text>
                                   <Text style={styles.home_sport_categories_item_info1}>{item.court}</Text>
                               </View>
                                <View style={styles.home_sport_categories_item_images_wrapper}>
                                    <View style={styles.home_sport_categories_item_img1}></View>
                                    <View style={styles.home_sport_categories_item_img2}>
                                        <Image  source={item.img} style={styles.home_sport_categories_item_img2_child}/>

                                    </View>
                                </View>

                            </TouchableOpacity>
                        )

                    })}
                </ScrollView>
                <View style={styles.home_popular_items_main_wrapper}>
                    <View style={styles.home_popular_items_title_icon_wrapper}>
                        <Text style={styles.home_popular_items_title}>Популярные</Text>
                        <TouchableOpacity style={styles.home_filter_btn}>
                                <FilterIcon/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.home_popular_items_wrapper}>
                        {popular_items.map((item, index) => {
                            return(
                                <TouchableOpacity key={index}
                                                  style={styles.home_popular_item}
                                >
                                    <View style={styles.home_popular_item_img}>
                                        <Image source={item.img} style={styles.home_popular_item_img_child} />
                                        <View style={styles.home_popular_item_img_icons_wrapper}>
                                            <Image source={require('../../../assets/images/icon1.png')} style={[styles.home_popular_item_img2, {marginRight: 6}]} />
                                            <Image source={require('../../../assets/images/icon2.png')} style={styles.home_popular_item_img2} />
                                        </View>
                                    </View>
                                    <View style={styles.home_popular_item_info_box}>
                                            <Text style={styles.home_popular_item_info_box_name}>{item.name}</Text>
                                            <Text style={styles.home_popular_item_info_box_address}>{item.address}</Text>
                                    </View>
                                </TouchableOpacity>

                            )

                        })}
                    </View>
                </View>
            </ScrollView>
            {isKeyboardVisible === false &&
                 <Footer active_page={'home'} navigation={props.navigation}/>
            }

            {show_cities_popup &&
                <View style={styles.show_cities_popup}>
                    <View style={styles.show_cities_popup_wrapper}>

                        <View style={styles.show_cities_popup_header}>
                            <TouchableOpacity
                                style={styles.show_cities_popup_header_btn}
                                onPress={() => {
                                    setShowCitiesPopup(false)
                                    setSelectedCity('')
                                    setShowSelectedCity(false)


                                }}
                            >
                                <CloseIcon/>
                                <Text style={styles.show_cities_popup_header_btn_title}>Tu ciudad</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={[styles.show_cities_popup_main_part]}>
                            {cities_list.map((item, index) => {
                                return(
                                    <TouchableOpacity key={index}
                                                      style={[styles.show_cities_popup_main_item, {
                                                          paddingHorizontal: selected_city == item.id ? 28 : 59

                                                      }]}
                                                      onPress={() => {
                                                          setShowSelectedCity(true)
                                                          setSelectedCity(item.id)
                                                      }}
                                    >
                                        {selected_city == item.id &&
                                            <View style={{
                                                height: 18,
                                                backgroundColor: '#E50B0B',
                                                width: 4,
                                                borderRadius: 4,
                                                position: 'absolute',
                                                left: 30,
                                                zIndex: 9999,
                                                // flex: 1

                                            }}>

                                            </View>

                                        }

                                     <Text style={[styles.show_cities_popup_main_item_text, {color: selected_city == item.id ? '#E50B0B' : '#5F5F5F', paddingLeft: selected_city == item.id ? 30: 0}]}>{item.city}</Text>
                                    </TouchableOpacity>
                                )

                            })}
                        </ScrollView>

                        <View style={styles.show_cities_popup_footer}>
                            <TouchableOpacity
                                style={[styles.show_cities_popup_select_btn, {
                                    backgroundColor: show_selected_city ? '#E50B0B' : '#5F5F5F'
                                }]}
                                onPress={() => {
                                    setShowCitiesPopup(false)
                                    setShowSelectedCity(false)
                                    setSelectedCity('')
                                }}
                            >
                                <Text style={styles.show_cities_popup_select_btn_text}>Elegir</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            }
        </SafeAreaView>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        width: "100%",
        height: "100%",
    },

    home_header_wrapper: {
        width: '100%',
        paddingTop: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 36,
    },
    home_header_logo: {
      fontWeight: '400',
      fontSize: 39,
      color: '#2D2942',
      marginLeft: 20,
    },
    home_main_wrapper: {
        flex: 1,
        width: '100%',
        paddingTop: 50,
        marginBottom: 5,
    },
    home_sport_categories_item: {
        shadowOffset: {width: 2, height: 4},
        shadowColor: '#0000000D',
        shadowOpacity: 30,
        shadowRadius: 30,
        elevation: 10,
        width: 112,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        position: 'relative',
        marginRight: 31,
        height: 151,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        overflow: null

    },
    home_sport_categories_item_images_wrapper: {
        position: 'relative',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        width: '100%',
        zIndex: 99,
    },
    home_sport_categories_item_img1: {
        backgroundColor: '#E50B0B',
        width: 77,
        height: 85,
        borderTopLeftRadius: 41,
    },
    home_sport_categories_item_img2: {
        width: 93,
        height: 93,
        // flex: 1,
        position: 'absolute',
        bottom: -20,
        zIndex: 9999,
        right: -20,
    },
    home_sport_categories_item_img2_child: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    home_sport_categories_items_wrapper: {
        width: '100%',
        paddingLeft: 17,
        marginBottom: 15,

    },
    home_sport_categories_item_info_box: {
        paddingTop: 14,
        paddingLeft: 13,
        marginBottom: 17,
    },

    home_sport_categories_item_info_box_title: {
        color: '#5F5F5F',
        fontSize: 16,
        fontWeight: '700',
    },

    home_sport_categories_item_info1: {
        color: '#5F5F5F',
        fontSize: 12,
        fontWeight: '400',
    },

    home_popular_items_main_wrapper: {
        width: '100%',
    },
    home_popular_items_title_icon_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13,
        paddingHorizontal: 19,
    },

    home_popular_items_title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
    },
    home_popular_items_wrapper: {
        width: '100%',
        paddingHorizontal: 17,
    },
    home_popular_item: {
        width: '100%',
        marginBottom: 28,
    },
    home_popular_item_img: {
        marginBottom: 12,
        position: 'relative',
        width: '100%',
        height: 150,
        borderRadius: 17,
        overflow: 'hidden',
    },
    home_popular_item_img_child: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    home_popular_item_info_box_name: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '700',
        // marginBottom: 6,
    },
    home_popular_item_info_box_address: {
        color: '#5F5F5F',
        fontSize: 14,
        fontWeight: '700',
    },
    home_popular_item_img_icons_wrapper: {
        width: 80,
        height: 34,
        backgroundColor: '#474747BF',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        position: 'absolute',
        zIndex: 999,
        bottom: 8,
        right: 7,
        overflow: 'hidden'
    },
    home_popular_item_img2: {
        width: 27,
        height: 27,
        resizeMode: 'cover',
    },
    show_cities_popup: {
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
    show_cities_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 48,
    },
    show_cities_popup_header: {
        marginBottom: 63,
        paddingHorizontal: 30,
    },
    show_cities_popup_header_btn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    show_cities_popup_header_btn_title: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000',
        marginLeft: 25,
    },
    show_cities_popup_main_part: {
        flex: 1,
        width: '100%',
        // paddingHorizontal: 59,
        position: 'relative',

    },
    show_cities_popup_main_item: {
        // width: '100%',
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        // width: 106,


    },
    show_cities_popup_main_item_text: {
        color: '#5F5F5F',
        fontWeight: '700',
        fontSize: 18,
    },
    show_cities_popup_select_btn: {
        width: '100%',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#5F5F5F',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 22

    },

    show_cities_popup_select_btn_text: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    },
    show_cities_popup_footer: {
        paddingHorizontal: 16,
    },
    home_header_back_icon_title_btn: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    }
});
