import * as React from 'react';
import  { useState, useRef, useEffect, useContext } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar, useColorScheme} from 'react-native';
import FilterEventIcon from '../../../assets/svg/filter_event_icon';
import PlusIcon from '../../../assets/svg/plus_icon';
import SearchIcon from '../../../assets/svg/search_icon';
import BackIcon from '../../../assets/svg/back_icon';
import BackIcon2 from '../../../assets/svg/back_icon2';
import SelectIcon from '../../../assets/svg/select_city';
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


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Event (props) {

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

    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Juego para los suyos',
            event_type: 'Fútbol',
            address: 'Alicante, Calle San Vicente, 49',
            date: '27 / 08 / 2022   20:00 - 21:00',
            info: 'Anotó 4 de 18',
            price: '3,50 GPt',
            backgroundColor: '#DDFFE7',
            titleColor: '#00B612',
        },
        {
            id: 2,
            title: 'Juego para los suyos',
            event_type: 'Fútbol',
            address: 'Alicante, Calle San Vicente, 49',
            date: '27 / 08 / 2022   20:00 - 21:00',
            info: 'Anotó 4 de 18',
            price: '3,50 GPt',
            backgroundColor: '#FFFCDE',
            titleColor: '#D4A600',

        },
        {
            id: 3,
            title: 'Juego para los suyos',
            event_type: 'Fútbol',
            address: 'Alicante, Calle San Vicente, 49',
            date: '27 / 08 / 2022   20:00 - 21:00',
            info: 'Anotó 4 de 18',
            price: '3,50 GPt',
            backgroundColor: '#DDFDFF',
            titleColor: '#080064',

        },

        {
            id: 4,
            title: 'Juego para los suyos',
            event_type: 'Fútbol',
            address: 'Alicante, Calle San Vicente, 49',
            date: '27 / 08 / 2022   20:00 - 21:00',
            info: 'Anotó 4 de 18',
            price: '3,50 GPt',
            backgroundColor: '#DDFFE7',
            titleColor: '#00B612',

        },
        {
            id: 5,
            title: 'Juego para los suyos',
            event_type: 'Fútbol',
            address: 'Alicante, Calle San Vicente, 49',
            date: '27 / 08 / 2022   20:00 - 21:00',
            info: 'Anotó 4 de 18',
            price: '3,50 GPt',
            backgroundColor: '#FFFCDE',
            titleColor: '#D4A600',

        },
        {
            id: 6,
            title: 'Juego para los suyos',
            event_type: 'Fútbol',
            address: 'Alicante, Calle San Vicente, 49',
            date: '27 / 08 / 2022   20:00 - 21:00',
            info: 'Anotó 4 de 18',
            price: '3,50 GPt',
            backgroundColor: '#DDFDFF',
            titleColor: '#080064',

        },



    ])
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [add_new_event_popup, setAddNewEventPopup] = useState(false);
    const [add_event_city_popup, setAddEventCityPopup] = useState(false);
    const [event_name, setEventName] = useState('');
    const [event_message, setEventMessage] = useState('');
    const [search, setSearch] = useState('');
    const [selected_city, setSelectedCity] = useState('');
    const [show_selected_city, setShowSelectedCity] = useState(false);



    const redirectToSportCategoryScreen = () => {
        props.navigation.navigate('SportCategoryScreen')
    }

    const colorScheme = useColorScheme();

    const [cities_list, setCitiesList] = useState([
        {
            id: 1,
            city: 'Аlicante'
        },

        {
            id: 2,
            city: 'Madrid'
        },
        {
            id: 3,
            city: 'Barcelona'
        },

    ])





    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>

            <View style={styles.event_page_header}>
                <View style={styles.event_page_header_first_child}>
                    <TouchableOpacity
                        style={styles.event_page_header_add_new_event_btn}
                        onPress={() => {
                            setAddNewEventPopup(true)
                        }}
                    >
                        <PlusIcon/>
                    </TouchableOpacity>
                    <Text style={styles.event_page_header_title}>Mis eventos</Text>
                    <TouchableOpacity style={styles.event_page_header_filter_btn}>
                        <FilterEventIcon/>
                    </TouchableOpacity>
                </View>
                <View style={styles.event_page_header_second_child}>
                    <Text style={styles.event_main_part_title}>Evento</Text>
                    <View style={styles.search_event_icon_input_wrapper}>
                        <SearchIcon/>
                        <TextInput
                            style={[styles.search_event_input_filed]}
                            onChangeText={(val) => setSearch(val)}
                            value={search}
                            placeholder='Buscar'
                            placeholderTextColor='#686868'
                        />
                    </View>
                </View>
            </View>
            {events.length > 0 ?
                <ScrollView style={styles.event_main_part}>
                    <View style={styles.event_items_wrapper}>
                        {events.map((item, index) => {
                            return(
                                <TouchableOpacity key={index}
                                                  style={[styles.event_item, {
                                                      backgroundColor: item.backgroundColor
                                                  }]}
                                >
                                    <Text style={[styles.event_item_title, {
                                        color: item.titleColor
                                    }]}>{item.title}</Text>
                                    <View style={styles.event_item_type_date_info_wrapper}>
                                        <Text style={styles.event_item_type_info}>{item.event_type}</Text>
                                        <Text style={styles.event_item_date_info}>{item.date}</Text>
                                    </View>
                                    <Text style={styles.event_item_address_info}>{item.address}</Text>
                                    <View style={styles.event_item_info_price_info_wrapper}>
                                        <Text style={styles.event_item_info}>{item.info}</Text>
                                        <Text style={styles.event_item_price_info}>{item.price}</Text>
                                    </View>
                                </TouchableOpacity>

                            )

                        })}

                    </View>
                </ScrollView>
                :
                <View style={styles.no_event_part}>
                    <Text style={styles.no_event_part_title}>No se ha encontrado ningun evento</Text>
                </View>
            }


            {isKeyboardVisible === false &&
            <Footer active_page={'event'} navigation={props.navigation}/>
            }

            {add_event_city_popup &&
                <View style={styles.event_city_popup}>
                    <View style={styles.event_city_popup_wrapper}>
                        <View style={styles.event_city_popup_header}>
                            <TouchableOpacity onPress={() => setAddEventCityPopup(false)}>
                                <BackIcon/>
                            </TouchableOpacity>
                            <Text style={styles.event_city_popup_header_title}>Cuidad</Text>
                        </View>
                            <ScrollView style={styles.event_city_popup_main_part}>
                                <View style={styles.event_city_popup_main_part_footer_wrapper}>
                                    <View style={styles.event_city_popup_main_part_footer_item}>
                                        {cities_list.map((item, index) => {
                                            return(
                                                <TouchableOpacity
                                                    key={index}
                                                    style={styles.event_city_popup_select_city_btn}
                                                    onPress={() => {
                                                        setShowSelectedCity(true)
                                                        setSelectedCity(item.id)
                                                    }}
                                                >
                                                    <Text style={styles.event_city_popup_select_city_btn_text}>
                                                        {item.city}
                                                    </Text>
                                                    {selected_city == item.id &&
                                                         <SelectIcon/>
                                                    }

                                                </TouchableOpacity>

                                            )

                                        })}
                                    </View>

                                    <View style={styles.event_city_popup_footer}>
                                        <TouchableOpacity style={[styles.event_city_popup_footer_btn, {
                                            backgroundColor: show_selected_city ? '#E50B0B' : '#5F5F5F'
                                        }]}>
                                            <Text style={styles.event_city_popup_footer_btn_text}>Elegir</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </ScrollView>




                    </View>
                </View>
            }

            {add_new_event_popup &&
               <View style={styles.new_event_popup}>
                    <View style={styles.new_event_popup_wrapper}>
                    <View style={styles.new_event_popup_header}>
                        <TouchableOpacity onPress={() => setAddNewEventPopup(false)}>
                            <BackIcon/>
                        </TouchableOpacity>
                        <Text style={styles.new_event_popup_header_title}>Nuevo evento</Text>
                    </View>
                    <ScrollView style={styles.new_event_main_part}>
                        <View style={styles.new_event_main_part_footer_wrapper}>

                            <TextInput
                                style={[styles.new_event_name_input_field]}
                                onChangeText={(val) => setEventName(val)}
                                value={event_name}
                                placeholder='Nombre'
                                placeholderTextColor='#8A8A8D'
                            />
                            <View style={styles.new_event_items_wrapper}>
                                <View style={styles.new_event_item}>
                                    <Text style={styles.new_event_item_title}>Ciudad</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity onPress={() => {setAddEventCityPopup(true),setAddNewEventPopup(false)}}>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.new_event_item}>
                                    <Text style={styles.new_event_item_title}>Deporte</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.new_event_item}>
                                    <Text style={styles.new_event_item_title}>Campo</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.new_event_item}>
                                    <Text style={styles.new_event_item_title}>Fecha y hora</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.new_event_item}>
                                    <Text style={styles.new_event_item_title}>Número de jugadores</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.new_event_item}>
                                    <Text style={styles.new_event_item_title}>Nivel mínimo de jugador</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[styles.new_event_item, {
                                    borderBottomColor: 'unset',
                                    borderBottomWidth: 0
                                }]}>
                                    <Text style={styles.new_event_item_title}>Tipo de evento</Text>
                                    <View style={styles.new_event_item_info_icon_wrapper}>
                                        <Text style={styles.new_event_item_info}>Indicar</Text>
                                        <TouchableOpacity>
                                            <BackIcon2/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <TextInput
                                style={[styles.new_event_message_input_field]}
                                onChangeText={(val) => setEventMessage(val)}
                                value={event_message}
                                placeholder='Mensaje'
                                placeholderTextColor='#8A8A8D'
                            />
                            <View style={styles.create_new_event_footer}>
                                <TouchableOpacity style={styles.create_new_event_btn}>
                                    <Text style={styles.create_new_event_btn_text}>Crear evento</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
               </View>
            }
        </SafeAreaView>
    );
}

export default Event;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        width: "100%",
        height: "100%",
        paddingTop: 20,
    },

    event_page_header: {
        width: '100%',
        paddingHorizontal: 18,
    },
    event_page_header_first_child: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22,
    },
    event_page_header_title: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000000',
    },
    event_main_part_title: {
        fontWeight: '700',
        fontSize: 25,
        color: '#000000',
        marginBottom: 21,
    },
    event_page_header_second_child: {
        width: '100%',
    },
    search_event_icon_input_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        backgroundColor: '#ECECEC',
        paddingHorizontal: 10,
    },
    search_event_input_filed: {
        width: '100%',
        fontWeight: '500',
        fontSize: 18,
        color: '#686868',
        paddingLeft: 10,
    },
    event_main_part: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: 21,
        paddingBottom: 25,
        marginBottom: 10
    },
    event_items_wrapper: {
        width: '100%',
    },
    event_item: {
        width: '100%',
        marginBottom: 15,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 12,
        paddingHorizontal: 17,
    },

    event_item_title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 16,
    },
    event_item_type_date_info_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    event_item_type_info: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000000',
    },
    event_item_date_info: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000000',
    },
    event_item_address_info: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000000',
        marginBottom: 3,
    },
    event_item_info_price_info_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    event_item_info: {
        fontWeight: '500',
        fontSize: 12,
        color: '#000000',
    },
    event_item_price_info: {
        fontWeight: '700',
        fontSize: 14,
        color: '#000000',
    },
    no_event_part: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    no_event_part_title: {
        fontWeight: '500',
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
    },
    new_event_popup: {
        backgroundColor:  '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 999,
        zIndex: 9999999999999999,
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    new_event_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
        paddingTop: 25,
    },
    new_event_popup_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    new_event_popup_header_title: {
        fontWeight: '400',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 20,
    },
    new_event_main_part: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 32,
    },
    new_event_name_input_field: {
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#ffffff',
        borderRadius: 9,
        paddingHorizontal: 16,
        paddingVertical: 12,
        color: '#8A8A8D',
        fontWeight: '400',
        fontSize: 16,
    },
    new_event_message_input_field: {
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#ffffff',
        borderRadius: 9,
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 70,
        color: '#8A8A8D',
        fontWeight: '400',
        fontSize: 16,
    },
    new_event_items_wrapper: {
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#ffffff',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    new_event_item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#DEDEDE',
        paddingBottom: 13,
        marginBottom: 12
    },
    new_event_item_title: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 16,
    },
    new_event_item_info_icon_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    new_event_item_info: {
        color: '#8A8A8D',
        fontWeight: '400',
        fontSize: 16,
        paddingRight: 24,
    },
    create_new_event_footer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 40,
        position: 'absolute',
        bottom: 75
    },
    create_new_event_btn: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#5F5F5F',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,

    },
    create_new_event_btn_text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    new_event_main_part_footer_wrapper: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'space-between',
        height: windowHeight,
        position: 'relative'
    },
    event_city_popup: {
        backgroundColor:  '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 999,
        zIndex: 9999999999999999,
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    event_city_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
        paddingTop: 25,
    },
    event_city_popup_header: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    event_city_popup_header_title: {
        fontWeight: '400',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 25,
    },
    event_city_popup_main_part: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 27,
    },
    event_city_popup_main_part_footer_wrapper: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'space-between',
        height: windowHeight,
        position: 'relative'

    },
    event_city_popup_main_part_footer_item: {
        width: '100%',
        marginBottom: 13,
        backgroundColor: '#ffffff',
        borderRadius: 9,
        paddingHorizontal: 15,
        paddingTop: 15,
        height: 584,
    },
    event_city_popup_select_city_btn: {
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#DEDEDE',
        paddingBottom: 12,
        marginBottom: 12,
    },
    event_city_popup_select_city_btn_text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#000000',
    },
    event_city_popup_footer: {
        width: '100%',
        paddingHorizontal: 20,
        // paddingBottom: 40,
    },
    event_city_popup_footer_btn: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#5F5F5F',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
    },
    event_city_popup_footer_btn_text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    }
});
