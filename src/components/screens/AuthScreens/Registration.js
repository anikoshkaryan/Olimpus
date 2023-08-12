import * as React from 'react';
import  { useState, useRef, useEffect, useContext } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StatusBar, useColorScheme} from 'react-native';
import {AuthContext} from "../../AuthContext/context";
import RegisterBackIcon from "../../../assets/svg/register_back_icon"
import PasswordEyeNotShowSvg from "../../../assets/svg/password_eye_not_show_icon"
import PasswordEyeShowSvg from "../../../assets/svg/password_eye_show_icon"




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

function Registration (props) {

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
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [send_code_again, setSendCodeAgain] = useState('');
    const [password_security, setPasswordSecurity] = useState(true);
    const [show_confirmation_code_popup, setShowConfirmationCodePopup] = useState(false);
    const [show_success_confirmation_popup, setShowSuccessConfirmationPopup] = useState(false);



    const redirectToLoginScreen = () => {
        props.navigation.navigate('LoginScreen')
    }
    const redirectToHomeScreen = () => {
        setShowSuccessConfirmationPopup(false)
        setShowConfirmationCodePopup(false)
        props.navigation.navigate('HomeScreen')
    }

    const colorScheme = useColorScheme();





    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>
            <View style={styles.registration_header}>
                <View style={styles.registration_header_title_back_btn_wrapper}>
                    <TouchableOpacity
                        style={styles.registration_header_back_btn}>
                        <RegisterBackIcon />
                    </TouchableOpacity>
                    <Text style={styles.registration_header_title}>Acceder a la cuenta</Text>
                </View>
                <View style={styles.registration_header_register_login_tabs_wrapper}>
                        <TouchableOpacity style={styles.registration_header_register_tab}>
                            <Text style={styles.registration_header_register_tab_text}>Registrarse</Text>
                        </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.registration_header_login_tab}
                        onPress={() => {
                            redirectToLoginScreen()
                        }}
                    >
                        <Text style={styles.registration_header_login_tab_text}>Acceso</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <ScrollView style={styles.registration_main_part}>
                <View style={styles.registration_input_wrapper}>
                    <TextInput
                        style={[styles.registration_input_filed]}
                        onChangeText={(val) => setName(val)}
                        value={name}
                        placeholder='Nombre'
                        placeholderTextColor='#868686'
                    />
                </View>
                <View style={styles.registration_input_wrapper}>
                    <TextInput
                        style={[styles.registration_input_filed]}
                        onChangeText={(val) => setLastName(val)}
                        value={last_name}
                        placeholder='Apellido'
                        placeholderTextColor='#868686'
                    />
                </View>
                <View style={styles.registration_input_wrapper}>
                    <TextInput
                        style={[styles.registration_input_filed]}
                        onChangeText={(val) => setEmail(val)}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor='#868686'
                    />
                </View>
                <View style={[styles.registration_input_wrapper, {position: 'relative'}]}>
                    <TextInput
                        style={[styles.registration_input_filed]}
                        onChangeText={(val) => setPassword(val)}
                        value={password}
                        placeholder='Contraseña'
                        placeholderTextColor='#868686'
                        secureTextEntry={password_security}

                    />
                    {password_security &&
                    <TouchableOpacity style={{position: 'absolute', zIndex: 9, right: 13, top: 20}}
                                      onPress={() =>
                                          setPasswordSecurity(false)
                                      }
                    >
                        <PasswordEyeNotShowSvg/>
                    </TouchableOpacity>

                    }

                    {!password_security &&
                    <TouchableOpacity style={{position: 'absolute', zIndex: 9, right: 13, top: 20}}
                                      onPress={() =>
                                          setPasswordSecurity(true)
                                      }
                    >
                        <PasswordEyeShowSvg/>
                    </TouchableOpacity>

                    }
                </View>
                <View style={styles.registration_input_wrapper}>
                    <TextInput
                        style={[styles.registration_input_filed]}
                        onChangeText={(val) => setPhone(val)}
                        value={phone}
                        placeholder='+34 000 00 00 00'
                        placeholderTextColor='#868686'
                        keyboardType={'phone-pad'}
                    />
                </View>

            </ScrollView>
            <View style={styles.registration_footer}>
                <TouchableOpacity
                    style={styles.registration_footer_btn}
                    onPress={() => {
                        setShowConfirmationCodePopup(true)
                    }}
                >
                        <Text style={styles.registration_footer_btn_text}>Registrar</Text>
                </TouchableOpacity>
            </View>

            {show_confirmation_code_popup &&
                <View style={styles.confirmation_code_popup}>
                    <View style={styles.confirmation_code_popup_wrapper}>
                        <View
                            style={styles.confirmation_code_popup_header_back_btn_title_wrapper}>
                            <TouchableOpacity
                                style={styles.confirmation_code_popup_header_back_btn_icon}
                                onPress={() => {
                                    setShowConfirmationCodePopup(false)
                                }}
                            >
                                <RegisterBackIcon/>
                            </TouchableOpacity>
                            <Text style={styles.confirmation_code_popup_header_back_btn_title}>Confirmación</Text>
                        </View>
                        <ScrollView style={styles.confirmation_code_popup_main_part}>
                            <Text style={styles.confirmation_code_popup_main_part_title}>
                                Se ha enviado un código de verificación a su correo electrónico, introdúzcalo a continuación para confirmar el acceso
                            </Text>

                            <View style={styles.confirmation_code_popup_input_wrapper}>
                                <TextInput
                                    style={[styles.confirmation_code_popup_input_field]}
                                    onChangeText={(val) => setSendCodeAgain(val)}
                                    value={send_code_again}
                                    placeholder='Enviar código de nuevo'
                                    placeholderTextColor='#868686'
                                />
                            </View>
                        </ScrollView>
                        <View style={styles.confirmation_code_popup_footer}>
                            <TouchableOpacity
                                style={styles.confirmation_code_popup_footer_confirm_btn}
                                onPress={() => {
                                    setShowSuccessConfirmationPopup(true)
                                }}
                            >
                                <Text style={styles.confirmation_code_popup_footer_confirm_btn_text}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }

            {show_success_confirmation_popup &&
                <View style={styles.confirmation_code_popup}>
                <View style={styles.confirmation_code_popup_wrapper}>
                    <View
                        style={styles.confirmation_code_popup_header_back_btn_title_wrapper}>
                        <TouchableOpacity
                            style={styles.confirmation_code_popup_header_back_btn_icon}
                            onPress={() => {
                                setShowSuccessConfirmationPopup(false)
                            }}
                        >
                            <RegisterBackIcon/>
                        </TouchableOpacity>
                        <Text style={styles.confirmation_code_popup_header_back_btn_title}>Verificación aceptada</Text>
                    </View>
                    <ScrollView style={styles.confirmation_code_popup_main_part}>
                        <Text style={styles.confirmation_code_popup_main_part_title2}>
                            Su cuenta ha sido verificada con éxito
                        </Text>

                    </ScrollView>
                    <View style={styles.confirmation_code_popup_footer}>
                        <TouchableOpacity
                            style={styles.confirmation_code_popup_footer_confirm_btn}
                            onPress={() => {
                                redirectToHomeScreen()
                            }}
                        >
                            <Text style={styles.confirmation_code_popup_footer_confirm_btn_text}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            }

        </SafeAreaView>
    );
}

export default Registration;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        width: "100%",
        height: "100%",
        paddingBottom: 20

    },
    registration_header: {
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 21,

    },

    registration_header_title_back_btn_wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 20,
    },
    registration_header_back_btn: {
        position: 'absolute',
        left: 0,
    },

    registration_header_title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
    },
    registration_header_register_login_tabs_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5
    },

    registration_header_register_tab: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        paddingBottom: 6
    },
    registration_header_register_tab_text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center'
    },
    registration_header_login_tab: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
        borderBottomWidth: 2,
        borderBottomColor: '#F6F6F6',
        paddingBottom: 6
    },
    registration_header_login_tab_text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#868686',
        textAlign: 'center'
    },
    registration_main_part: {
        width: '100%',
        flex: 1,
        paddingTop: 22,
        paddingHorizontal: 20,
    },
    registration_footer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    registration_footer_btn: {
        backgroundColor: '#E50B0B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 50,
        borderRadius: 6,
    },
    registration_footer_btn_text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    registration_input_wrapper: {
        width: '100%',
        marginBottom: 10,
    },

    registration_input_filed: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        padding: 15,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: '400',
        color: '#868686',
    },

    confirmation_code_popup: {
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
    confirmation_code_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 21,
        paddingBottom: 21,
    },
    confirmation_code_popup_header_back_btn_title_wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        position: 'relative',
    },
    confirmation_code_popup_header_back_btn_icon: {
        position: 'absolute',
        left: 15,
        top: -1,
    },
    confirmation_code_popup_header_back_btn_title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
    },

    confirmation_code_popup_footer: {
        paddingHorizontal: 20,
        width: '100%',
    },
    confirmation_code_popup_footer_confirm_btn: {
        backgroundColor: '#E50B0B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 50,
        borderRadius: 6,
    },
    confirmation_code_popup_footer_confirm_btn_text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    confirmation_code_popup_main_part: {
        width: '100%',
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    confirmation_code_popup_main_part_title: {
        color: '#868686',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 26,
        textAlign: 'center',
        lineHeight: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    confirmation_code_popup_main_part_title2: {
        color: '#868686',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 26,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    confirmation_code_popup_input_wrapper: {
        width: '100%',
        marginBottom: 20,
    },
    confirmation_code_popup_input_field: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        padding: 15,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: '400',
        color: '#868686',
    }

});
