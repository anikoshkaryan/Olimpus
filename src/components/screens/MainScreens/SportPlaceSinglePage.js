import * as React from 'react';
import  { useState, useRef, useEffect, useContext } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar, useColorScheme} from 'react-native';
import SportPlaceInfoIcon1 from '../../../assets/svg/sport_place_info_icon1';
import SportPlaceInfoIcon2 from '../../../assets/svg/sport_place_info_icon2';
import SportPlaceInfoIcon3 from '../../../assets/svg/sport_place_info_icon3';
import BackIcon from '../../../assets/svg/category_back_icon';
import CalendarIcon from '../../../assets/svg/calendar_icon';
import MarkerIcon from '../../../assets/svg/marker';
import {AuthContext} from "../../AuthContext/context";
import MapView, {Marker} from 'react-native-maps';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';




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
    Keyboard,
    Platform
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import CloseIcon from "../../../assets/svg/popup_close_icon2";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SportPlaceSinglePage (props) {

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
    const [show_calendar_date_popup, setShowCalendarDatePopup] = useState(false);
    const [show_select_date_popup, setShowSelectDatePopup] = useState(false);
    const [sport_place_facilities, setSportPlaceFacilities] = useState([
        {
            id: 1,
            info: 'GUARDARROPAS'
        },
        {
            id: 2,
            info: 'DE DUCHA'
        },
        {
            id: 3,
            info: 'ILUMINACIÓN'
        },
        {
            id: 4,
            info: 'APARCAMIENTO'
        },
        {
            id: 5,
            info: 'INVENTARIO'
        },
    ])
    const [select_event_time_items, setSelectEventTimeItems] = useState([
        {
            id: 1,
            time: '07:00 - 07:30',
            price: '50'
        },
        {
            id: 2,
            time: '07:30 - 08:00',
            price: '50',
        },
        {
            id: 3,
            time: '08:00 - 08:30',
            price: '50 €',
        },
        {
            id: 4,
            time: '08:30 - 09:00',
            price: '50 Sp',
        },
        {
            id: 5,
            time: '09:00 - 09:30',
            price: '50 €',
        },
        {
            id: 6,
            time: '09:30 - 10:00',
            price: '50 Sp',
        },
        {
            id: 7,
            time: '10:00 - 10:30',
            price: '50 Sp',
        },

    ])

    const redirectToMapScreen = () => {
        props.navigation.navigate('MapScreen')
    }

    const colorScheme = useColorScheme();

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [selected_data, setSelectedData] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); // For iOS, keep the modal open
        setDate(currentDate);
       let new_date = currentDate.toLocaleDateString()
        setSelectedData(new_date)
    };



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sport_place_header}>
                <StatusBar style={{position: 'absolute', top: 0}} barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>

                <View style={styles.sport_place_header_img}>
                        <Image style={styles.sport_place_header_img_child} source={require('../../../assets/images/sport_single_page_img.png')}/>
                    </View>
                    <View style={styles.sport_place_header_img2}>
                        <Image style={styles.sport_place_header_img2_child} source={require('../../../assets/images/sport_single_page_img2.png')}/>
                    </View>
            </View>
            <ScrollView style={styles.sport_place_main_part}>
                <Text style={styles.sport_place_main_part_title}>
                    “Арена” футбольное поле № 12
                    на 12 человек
                </Text>
                <View style={styles.sport_place_facilities_info_wrapper}>
                    {sport_place_facilities.map((item, index) => {
                        return (
                            <Text key={index} style={styles.sport_place_facilities_info}>{item.info}</Text>
                        )
                    })}
                </View>
                <View style={styles.sport_place_general_info_items_wrapper}>
                    <View style={styles.sport_place_general_info_item}>
                        <View style={styles.sport_place_general_info_item_icon_title_wrapper}>
                            <SportPlaceInfoIcon1/>
                            <Text style={styles.sport_place_general_info_item_title}>Número de jugadores</Text>
                        </View>
                        <Text style={styles.sport_place_general_info_item_info_text}>1</Text>
                    </View>
                    <View style={styles.sport_place_general_info_item}>
                        <View style={styles.sport_place_general_info_item_icon_title_wrapper}>
                            <SportPlaceInfoIcon2/>
                            <Text style={styles.sport_place_general_info_item_title}>Recubrimiento</Text>
                        </View>
                        <Text style={styles.sport_place_general_info_item_info_text}>Césped artificial</Text>
                    </View>
                    <View style={styles.sport_place_general_info_item}>
                        <View style={styles.sport_place_general_info_item_icon_title_wrapper}>
                            <SportPlaceInfoIcon3/>
                            <Text style={styles.sport_place_general_info_item_title}>Plaza</Text>
                        </View>
                        <Text style={styles.sport_place_general_info_item_info_text}>Сubierto, 48х29х12</Text>
                    </View>

                </View>
                <View style={styles.sport_place_main_info_items_wrapper}>
                    <View style={styles.sport_place_main_info_item}>
                        <Text style={styles.sport_place_main_info_item_title}>Acerca del sitio</Text>
                        <Text style={styles.sport_place_main_info_item_text}>
                            Número de jugadores Acerca del sitio ero de jugadores Acerca del sitio ero de jugadores Acerca del sitio Número de jugadores Acerca del sitio ero de jugadores  Acerca del sitio ero de jugadores Acerca del sitio Número de jugadores Acerca del sitio ero de jugadores  Acerca del sitio ero de jugadores Acerca del sitio
                        </Text>
                    </View>

                    <View style={styles.sport_place_main_info_item}>
                        <Text style={styles.sport_place_main_info_item_title}>Acerca del sitio</Text>
                        <Text style={styles.sport_place_main_info_item_address_info}>
                            767778, Alicante, Santiago 45
                        </Text>
                    </View>
                </View>
                <View style={styles.sport_place_map_wrapper}>
                    <MapView
                        style={{ flex: 1, height: '100%' }}
                        initialRegion={{
                            latitude: 40.4637,
                            longitude: -3.7492,
                            latitudeDelta: 10.0,
                            longitudeDelta: 10.0,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 40.4637, longitude: -3.7492}}
                            // title="My Marker"
                            // description="Some description"
                        >
                            <MarkerIcon/>
                        </Marker>
                    </MapView>
                </View>
            </ScrollView>
            <View style={styles.sport_place_footer}>
                <TouchableOpacity
                    style={styles.sport_place_select_date_btn}
                    onPress={() => {
                        setShowSelectDatePopup(true)
                    }}
                >
                    <Text style={styles.sport_place_select_date_btn_text}>Seleccionar fecha</Text>
                </TouchableOpacity>
            </View>

            {show &&
                <View style={styles.show_calendar_date_popup}>
                    <View style={styles.show_calendar_date_popup_wrapper}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'} // can be 'time', 'date', or 'datetime'
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onChange}
                            style={{width: '100%', height: 500, color: 'red', justifyContent: 'center', alignItems: 'center', alignSelf: 'center',}}
                        />
                    </View>

                </View>
            }

            {show_select_date_popup &&
                <View style={styles.show_select_date_popup}>
                    <View style={styles.show_select_date_popup_wrapper}>
                        <TouchableOpacity
                            style={styles.show_select_date_popup_close_icon}
                            onPress={() => {
                                setShowSelectDatePopup(false)
                            }}
                        >
                            <CloseIcon/>
                        </TouchableOpacity>
                        <View style={{paddingHorizontal: 21, width: '100%'}}>
                            <TouchableOpacity
                                style={styles.show_select_date_popup_calendar_open_icon}
                                onPress={() => {
                                    setShow(true)
                                }}
                            >
                                <CalendarIcon/>
                            </TouchableOpacity>
                            {selected_data.length > 0 &&
                            <Text style={styles.select_time_item_title2}>{selected_data}</Text>

                            }

                        </View>

                        <ScrollView style={{width: '100%', flex: 1, }}>
                                <Text style={styles.select_time_item_title}>Elige el tiempo</Text>
                                {select_event_time_items.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={styles.select_time_item}>
                                            <View style={styles.select_time_item_icon_info_wrapper}>
                                                <View style={styles.select_time_item_icon}></View>
                                                <Text style={styles.select_time_item_info}>
                                                    {item.time}
                                                </Text>
                                            </View>
                                            <Text style={styles.select_time_item_price_info}>{item.price}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        {selected_data.length > 0 &&
                        <View style={styles.show_select_date_popup_footer}>
                            <TouchableOpacity style={styles.show_select_date_popup_footer_reserve_btn}>
                                <Text style={styles.show_select_date_popup_footer_reserve_btn_text}>Reservar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.show_select_date_popup_footer_create_an_event_btn}>
                                <Text style={styles.show_select_date_popup_footer_create_an_event_btn_text}>Crear un comando</Text>
                            </TouchableOpacity>
                        </View>
                        }

                    </View>
                </View>
            }


        </SafeAreaView>
    );
}

export default SportPlaceSinglePage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        width: "100%",
        height: "100%",
    },
    sport_place_header: {
        width: '100%',
        position: 'relative',
    },
    sport_place_header_img: {
        width: '100%',
        height: 232,
    },
    sport_place_header_img_child: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    sport_place_header_img2: {
        width: 63,
        height: 63,
        position: 'absolute',
        zIndex: 999,
        bottom: -30,
        left: '43%',

    },
    sport_place_header_img2_child: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    sport_place_map_wrapper: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
    },



    sport_place_main_part: {
        width: '100%',
        flex: 1,
        paddingTop: 50,
        paddingBottom: 34,
        paddingHorizontal: 16,
    },

    sport_place_main_part_title: {
        textAlign: 'center',
        marginBottom: 25,
        color: '#000000',
        fontWeight: '700',
        fontSize: 18,
        width: 278,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    sport_place_facilities_info_wrapper: {
        width: '100%',
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },

    sport_place_facilities_info: {
        fontWeight: '700',
        fontSize: 12,
        color: '#5F5F5F',
        width: '31.5%',
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        // backgroundColor: 'red',
        marginRight: 6,
    },
    sport_place_general_info_items_wrapper: {
        width: '100%',
        marginBottom: 22,
    },
    sport_place_general_info_item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    sport_place_general_info_item_icon_title_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sport_place_general_info_item_title: {
        color: '#5F5F5F',
        fontWeight: '700',
        fontSize: 12,
        marginLeft: 10,
    },
    sport_place_general_info_item_info_text: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 12,
    },
    sport_place_main_info_item: {
        width: '100%',
        marginBottom: 22
    },
    sport_place_main_info_item_title: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10,
    },
    sport_place_main_info_item_text: {
        color: '#5F5F5F',
        fontWeight: '500',
        fontSize: 14,
    },
    sport_place_main_info_item_address_info: {
        color: '#5F5F5F',
        fontWeight: '700',
        fontSize: 14,
    },
    sport_place_footer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 34,
    },
    sport_place_main_info_items_wrapper: {
        width: '100%',
    },
    sport_place_select_date_btn: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#E50B0B',
        height: 45,
        borderRadius: 8,

    },
    sport_place_select_date_btn_text: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    },
    show_select_date_popup: {
        backgroundColor:  'rgba(157, 148, 148, 0.69)',
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
    show_select_date_popup_wrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 90,
        paddingBottom: 21,
        // paddingHorizontal: 21,
        backgroundColor: '#F8F8F8',
        position: 'relative',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    show_select_date_popup_close_icon: {
        backgroundColor: '#D9D9D9',
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 24,
        top: 50,
        zIndex: 999,

    },
    show_select_date_popup_calendar_open_icon: {
        paddingTop: 20,
        marginBottom: 30,
    },
    select_time_items_wrapper: {
        width: '100%',
    },
    select_time_item_title: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 50,
        paddingHorizontal: 21
    },
    select_time_item_title2: {
        color: '#E50B0B',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 50,
    },
    select_time_item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 59,
        paddingHorizontal: 35,
    },
    select_time_item_icon_info_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    select_time_item_icon: {
        width: 12,
        height: 12,
        backgroundColor: '#3B3B3B',
        borderRadius: 100,
        marginRight: 14,
    },
    select_time_item_info: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 15,
    },

    select_time_item_price_info: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 15,
    },
    show_calendar_date_popup: {
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
    show_calendar_date_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    show_select_date_popup_footer: {
        width: '100%',
        paddingHorizontal: 16,
        // paddingTop: 50,
    },
    show_select_date_popup_footer_reserve_btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#000000',
        width: '100%',
        marginBottom: 10,
    },
    show_select_date_popup_footer_reserve_btn_text: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    },
    show_select_date_popup_footer_create_an_event_btn: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 8,
        backgroundColor: '#E50B0B',
        width: '100%',
        marginBottom: 10,
    },
    show_select_date_popup_footer_create_an_event_btn_text: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    }
});
