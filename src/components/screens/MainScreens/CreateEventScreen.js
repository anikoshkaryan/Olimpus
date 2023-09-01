import * as React from 'react';
import  { useState, useRef, useEffect, useContext } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar, useColorScheme} from 'react-native';
import BackIcon from '../../../assets/svg/create_event_back_btn';
import DropdownIcon from '../../../assets/svg/dropdown_icon';
import CheckBoxIcon from '../../../assets/svg/checkbox_icon';
import PaymentIcon from '../../../assets/svg/payment_icon';
import SuccessIcon from '../../../assets/svg/popup_icon2';
import {AuthContext} from "../../AuthContext/context";
import MapView, {Marker} from 'react-native-maps';
import SelectDropdown from 'react-native-select-dropdown'




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
    const [open_event, setOpenEvent] = useState(false);
    const [show_event_success_popup, setShowEventSuccessPopup] = useState(false);
    const [number_of_players, setNumberOfPlayers] = useState('');
    const [select_number_of_players, setSelectNumberOfPlayers] = useState(['1','2', '3', '4','5','6','7','8','9','10']);

    const [game_level, setGameLevel] = useState('');
    const [select_game_level, setSelectGameLevel] = useState(['1','2', '3', '4','5','6','7','8','9','10']);

    const redirectToMapScreen = () => {
        props.navigation.navigate('MapScreen')
    }

    const colorScheme = useColorScheme();




    return (
        <SafeAreaView style={styles.container}>
                <StatusBar style={{position: 'absolute', top: 0}} barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>
                <View style={styles.create_event_header_wrapper}>
                    <TouchableOpacity style={styles.create_event_header_back_btn} onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <BackIcon/>
                    </TouchableOpacity>
                    <Text style={styles.create_event_header_title}>Crear un comando</Text>
                </View>
                <ScrollView style={styles.create_event_main_part}>
                        <Text style={styles.create_event_main_part_title}>Información</Text>
                        <View style={[styles.create_event_main_part_dropdown_wrapper, {
                            marginBottom: 22
                        }]}>
                            <SelectDropdown
                                data={select_number_of_players}
                                onSelect={(selectedItem, index) => {
                                    // console.log(selectedItem, index)
                                    setNumberOfPlayers(selectedItem)
                                }}

                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                                defaultButtonText={'Número de jugadores'}
                                buttonStyle={{width: '100%', backgroundColor: '#ffffff', borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginBottom: 9}}
                                buttonTextStyle={{ textAlign:'left', fontSize: 16, fontWeight: '400', color: '#000000'}}
                                // onPress={() => {this.getRegions()}}
                                renderDropdownIcon={() => { return (
                                    <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', position: 'absolute', left: 15, top: 20}}>
                                        <DropdownIcon/>
                                    </View>
                                ) }}
                            />
                            <Text style={styles.create_event_main_part_dropdown_title}>
                                Сумма за бронирование поля будет пропорционально разделена между участниками
                            </Text>
                        </View>
                    <View style={[styles.create_event_main_part_dropdown_wrapper, {
                        marginBottom: 40
                    }]}>
                        <SelectDropdown
                            data={select_game_level}
                            onSelect={(selectedItem, index) => {
                                // console.log(selectedItem, index)
                                setGameLevel(selectedItem)
                            }}

                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                            defaultButtonText={'Nivel de juego no menos'}
                            buttonStyle={{width: '100%', backgroundColor: '#ffffff', borderRadius: 10, borderWidth: 1, borderColor: '#000000', marginBottom: 9}}
                            buttonTextStyle={{ textAlign:'left', fontSize: 16, fontWeight: '400', color: '#000000'}}
                            // onPress={() => {this.getRegions()}}
                            renderDropdownIcon={() => { return (
                                <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', position: 'absolute', left: 15, top: 20}}>
                                    <DropdownIcon/>
                                </View>
                            ) }}
                        />

                    </View>
                    <View style={styles.open_event_checkbox_input_text_wrapper}>
                        <View style={styles.open_event_checkbox_input}>
                            <TouchableOpacity
                                style={[styles.inputRadio]}
                                onPress={()=> {
                                    setOpenEvent(!open_event)
                                }}>
                                {open_event &&
                                    <CheckBoxIcon/>
                                }
                            </TouchableOpacity>
                            <Text style={styles.open_event_checkbox_input_title}>Evento abierto</Text>

                        </View>
                        <Text style={styles.open_event_checkbox_input_text}>
                            Если вы поставите галочку, то все пользователи приложения смогут увидеть ваше событие и присоединится. После создания события, вы сможете изменить эту опцию
                        </Text>
                    </View>

                    <View style={styles.open_event_payment_info_wrapper}>
                        <Text style={styles.open_event_payment_title}>Pago</Text>
                        <Text style={styles.open_event_payment_info}>
                            Вам нужно оплатить взнос за одного игрока. После создания события вы сможете пригласить игроков или оплатить оставшуюся сумму самостоятельно
                        </Text>
                    </View>
                    <View style={styles.open_event_total_payment_info_wrapper}>
                        <Text style={styles.open_event_total_payment_title}>Total</Text>
                        <View style={styles.open_event_total_payment_info_icon_box}>
                            <Text style={styles.open_event_total_payment_info}>3,50</Text>
                            <PaymentIcon/>
                        </View>
                    </View>

                </ScrollView>

                <View style={styles.open_event_footer}>
                    <TouchableOpacity
                        style={styles.open_event_reserve_btn}
                        onPress={() => {
                            setShowEventSuccessPopup(true)
                        }}
                    >
                        <Text style={styles.open_event_reserve_btn_text}>Reservar</Text>
                    </TouchableOpacity>
                    <Text style={styles.open_event_footer_info}>
                        <Text style={{color: '#A1A1A1', fontWeight: '300',}}>Al hacer clic en" Confirmar reserva" usted acepta el</Text>
                        <View style={{paddingHorizontal: 5}}></View>
                        procesamiento de sus datos personales. <Text style={{color: '#A1A1A1', fontWeight: '300'}}>Lea La</Text> política
                        de privacidad y la información legal
                    </Text>
                </View>

            {show_event_success_popup &&
                    <ImageBackground source={require('../../../assets/images/success_popup_img.png')} style={styles.show_event_success_popup}>
                        <TouchableOpacity
                            style={styles.show_event_success_popup_close_btn}
                            onPress={() => {
                                setShowEventSuccessPopup(false)
                            }}
                        >
                            <CloseIcon/>
                        </TouchableOpacity>
                        <View style={styles.show_event_success_popup_img}>
                            <SuccessIcon/>
                        </View>
                        <Text style={styles.show_event_success_popup_info}>
                            ¡Se ha realizado con éxito!
                            Disfrute del juego
                        </Text>

                    </ImageBackground>
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
        paddingTop: 50,
    },
    create_event_header_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 21,
    },
    create_event_header_back_btn: {
        marginRight: 25,
    },
    create_event_header_title: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 20,
    },
    create_event_main_part: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 19,
        paddingTop: 43,
        // marginBottom: 33
    },
    create_event_main_part_title: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 36,
    },
    create_event_main_part_dropdown_wrapper: {
        width: '100%',
    },
    create_event_main_part_dropdown_title: {
        color: '#5F5F5F',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },
    open_event_checkbox_input_text_wrapper: {
        width: '100%',
        marginBottom: 46,
    },
    open_event_checkbox_input_text: {
        color: '#5F5F5F',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },
    open_event_checkbox_input: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
    },
    open_event_checkbox_input_title: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 14,
    },

    inputRadio: {
        width: 17,
        height: 18,
        borderRadius: 2,
        backgroundColor: '#000000',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: 19,
    },
    open_event_payment_info_wrapper: {
        width: '100%',
        marginBottom: 35,
    },
    open_event_payment_title: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 41,
    },
    open_event_payment_info: {
        color: '#5F5F5F',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },
    open_event_total_payment_info_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        marginBottom: 33
    },
    open_event_total_payment_title: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 22,
    },
    open_event_total_payment_info_icon_box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    open_event_total_payment_info: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 22,
        marginRight: 4,
    },
    open_event_footer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    open_event_reserve_btn: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#000000',
        height: 45,
        marginBottom: 23,
    },
    open_event_reserve_btn_text: {
       color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    },

    open_event_footer_info: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18
    },
    show_event_success_popup: {
        backgroundColor:  'rgba(157, 148, 148, 0.69)',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 999,
        zIndex: 999999,
        width: '100%',
        height: windowHeight,
        position: 'absolute',
        left: 0,
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        resizeMode: 'cover',
        paddingTop: 170,

    },
    show_event_success_popup_wrapper: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    show_event_success_popup_img: {
        marginBottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    show_event_success_popup_info: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 28,
        width: 202,
        textAlign: 'center'
    },
    show_event_success_popup_img2: {
        width: '100%',
        height: 180,
        position: 'absolute',
        bottom: 0
    },
    show_event_success_popup_img2_child: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    show_event_success_popup_close_btn: {
        position: 'absolute',
        right: 20,
        top: 20
    }
});
