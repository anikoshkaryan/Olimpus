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

function Login (props) {

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
    const [email_phone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password_security, setPasswordSecurity] = useState(true);
    const [email2, setEmail2] = useState('');
    const [security_code, setSecurityCode] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [repeat_password, setRepeatPassword] = useState('');
    const [new_password_security, setNewPasswordSecurity] = useState(true);
    const [repeat_password_security, setRepeatPasswordSecurity] = useState(true);
    const [show_security_code_popup, setShowSecurityCodePopup] = useState(false);
    const [show_create_new_password_popup, setShowCreateNewPasswordPopup] = useState(false);
    const [show_success_password_popup, setShowSuccessPasswordPopup] = useState(false);
    const [show_forget_password_popup, setShowForgetPasswordPopup] = useState(false);


    const redirectToRegistrationScreen = () => {
        props.navigation.navigate('RegistrationScreen')
    }

    const redirectToForgetPasswordScreen = () => {
        props.navigation.navigate('ForgetPasswordScreen')
    }

    const redirectToHomeScreen = () => {
        setShowForgetPasswordPopup(false)
        setShowSuccessPasswordPopup(false)
        setShowCreateNewPasswordPopup(false)
        setShowSecurityCodePopup(false)
        props.navigation.navigate('HomeScreen')

    }


    const colorScheme = useColorScheme();





    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>
            <View style={styles.registration_header}>
                <View style={styles.registration_header_title_back_btn_wrapper}>
                    <TouchableOpacity
                        style={styles.registration_header_back_btn}
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    >
                        <RegisterBackIcon/>
                    </TouchableOpacity>
                    <Text style={styles.registration_header_title}>Acceder a la cuenta</Text>
                </View>
                <View style={styles.registration_header_register_login_tabs_wrapper}>
                    <TouchableOpacity
                        style={styles.registration_header_register_tab}
                        onPress={() => {
                            redirectToRegistrationScreen()
                        }}
                    >
                        <Text style={styles.registration_header_register_tab_text}>Registrarse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registration_header_login_tab}>
                        <Text style={styles.registration_header_login_tab_text}>Acceso</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <ScrollView style={styles.registration_main_part}>
                <View style={styles.registration_input_wrapper}>
                    <TextInput
                        style={[styles.registration_input_filed]}
                        onChangeText={(val) => setEmailPhone(val)}
                        value={email_phone}
                        placeholder='Correo electrónico o móvil'
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

            </ScrollView>
            <View style={styles.registration_footer}>
                <TouchableOpacity
                    style={styles.registration_footer_btn}
                    onPress={() => {
                        redirectToHomeScreen()
                    }}
                >
                    <Text style={styles.registration_footer_btn_text}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.forget_password_btn}
                    onPress={() => {
                        setShowForgetPasswordPopup(true)
                    }}
                >
                    <Text style={styles.forget_password_btn_text}>¿Olvidó su contraseña?</Text>
                </TouchableOpacity>
            </View>

            {show_forget_password_popup &&
                <View style={styles.security_code_popup}>
                    <View style={styles.security_code_popup_wrapper}>
                        <View style={styles.forget_password_header}>
                            <TouchableOpacity
                                style={styles.forget_password_header_back_btn}
                                onPress={() => {
                                    props.navigation.goBack()
                                }}
                            >
                                <RegisterBackIcon/>
                            </TouchableOpacity>
                            <Text style={styles.forget_password_header_title}>¿Olvidó su contraseña?</Text>
                        </View>

                        <ScrollView style={styles.forget_password_main_part}>
                            <View style={styles.forget_password_main_part_input_wrapper}>
                                <TextInput
                                    style={[styles.forget_password_input_field]}
                                    onChangeText={(val) => setEmail2(val)}
                                    value={email2}
                                    placeholder='Correo electrónico'
                                    placeholderTextColor='#868686'
                                />
                            </View>
                        </ScrollView>

                        <View style={[styles.forget_password_footer, {
                            paddingHorizontal: 20,}]}>
                            <TouchableOpacity
                                style={styles.forget_password_footer_send_code_btn}
                                onPress={() => {
                                    setShowSecurityCodePopup(true)
                                }}
                            >
                                <Text style={styles.forget_password_footer_send_code_btn_text}>
                                    Enviar código
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
            {show_security_code_popup &&
                <View style={styles.security_code_popup}>
                <View style={styles.security_code_popup_wrapper}>
                    <View style={styles.forget_password_header}>
                        <TouchableOpacity
                            style={styles.forget_password_header_back_btn}
                            onPress={() => {
                                setShowSecurityCodePopup(false)
                            }}
                        >
                            <RegisterBackIcon/>
                        </TouchableOpacity>
                        <Text style={styles.forget_password_header_title}>¿Olvidó su contraseña?</Text>
                    </View>

                    <ScrollView style={styles.forget_password_main_part}>
                        <Text style={styles.forget_password_main_part_title}>
                            Introduzca el código de seguridad para
                            verificar su cuenta
                        </Text>
                        <View style={styles.forget_password_main_part_input_wrapper}>
                            <TextInput
                                style={[styles.forget_password_input_field]}
                                onChangeText={(val) => setSecurityCode(val)}
                                value={security_code}
                                placeholder='Código de seguridad'
                                placeholderTextColor='#868686'
                            />
                        </View>

                    </ScrollView>
                    <View style={styles.forget_password_footer}>
                        <TouchableOpacity
                            style={styles.forget_password_footer_send_code_btn}
                            onPress={() => {
                                setShowCreateNewPasswordPopup(true)
                            }}
                        >
                            <Text style={styles.forget_password_footer_send_code_btn_text}>
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            }

            {show_create_new_password_popup &&
                <View style={styles.security_code_popup}>
                <View style={styles.security_code_popup_wrapper}>
                    <View style={styles.forget_password_header}>
                        <TouchableOpacity
                            style={styles.forget_password_header_back_btn}
                            onPress={() => {
                                setShowCreateNewPasswordPopup(false)
                            }}
                        >
                            <RegisterBackIcon/>
                        </TouchableOpacity>
                        <Text style={styles.forget_password_header_title}>¿Olvidó su contraseña?</Text>
                    </View>

                    <ScrollView style={styles.forget_password_main_part}>
                        <Text style={styles.forget_password_main_part_title}>
                            Crea una nueva contraseña
                        </Text>

                        <View style={[styles.forget_password_main_part_input_wrapper, {position: 'relative', marginBottom: 10}]}>
                            <TextInput
                                style={[styles.forget_password_input_field]}
                                onChangeText={(val) => setNewPassword(val)}
                                value={new_password}
                                placeholder='Nueva contraseña'
                                placeholderTextColor='#868686'
                                secureTextEntry={new_password_security}

                            />
                            {new_password_security &&
                            <TouchableOpacity style={{position: 'absolute', zIndex: 9, right: 13, top: 20}}
                                              onPress={() =>
                                                  setNewPasswordSecurity(false)
                                              }
                            >
                                <PasswordEyeNotShowSvg/>
                            </TouchableOpacity>

                            }

                            {!new_password_security &&
                            <TouchableOpacity style={{position: 'absolute', zIndex: 9, right: 13, top: 20}}
                                              onPress={() =>
                                                  setNewPasswordSecurity(true)
                                              }
                            >
                                <PasswordEyeShowSvg/>
                            </TouchableOpacity>

                            }
                        </View>
                        <View style={[styles.forget_password_main_part_input_wrapper, {position: 'relative',}]}>
                            <TextInput
                                style={[styles.forget_password_input_field]}
                                onChangeText={(val) => setRepeatPassword(val)}
                                value={repeat_password}
                                placeholder='Repetir contraseña'
                                placeholderTextColor='#868686'
                                secureTextEntry={repeat_password_security}


                            />
                            {repeat_password_security &&
                            <TouchableOpacity style={{position: 'absolute', zIndex: 9, right: 13, top: 20}}
                                              onPress={() =>
                                                  setRepeatPasswordSecurity(false)
                                              }
                            >
                                <PasswordEyeNotShowSvg/>
                            </TouchableOpacity>

                            }

                            {!repeat_password_security &&
                            <TouchableOpacity style={{position: 'absolute', zIndex: 9, right: 13, top: 20}}
                                              onPress={() =>
                                                  setRepeatPasswordSecurity(true)
                                              }
                            >
                                <PasswordEyeShowSvg/>
                            </TouchableOpacity>

                            }
                        </View>
                    </ScrollView>
                    <View style={styles.forget_password_footer}>
                        <TouchableOpacity
                            style={styles.forget_password_footer_send_code_btn}
                            onPress={() => {
                                setShowSuccessPasswordPopup(true)
                            }}
                        >
                            <Text style={styles.forget_password_footer_send_code_btn_text}>
                                Confirmar
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
            }


            {show_success_password_popup &&
                <View style={styles.security_code_popup}>
                <View style={styles.security_code_popup_wrapper}>
                    <View style={styles.forget_password_header}>
                        <TouchableOpacity
                            style={styles.forget_password_header_back_btn}
                            onPress={() => {
                                setShowSuccessPasswordPopup(false)
                            }}
                        >
                            <RegisterBackIcon/>
                        </TouchableOpacity>
                        <Text style={styles.forget_password_header_title}>Realizado</Text>
                    </View>

                    <ScrollView style={styles.forget_password_main_part}>
                        <Text style={[styles.forget_password_main_part_title, {width: '75%'}]}>
                            Su contraseña ha sido modificada
                            con éxito
                        </Text>

                    </ScrollView>

                    <View style={styles.forget_password_footer}>
                        <TouchableOpacity
                            style={styles.forget_password_footer_send_code_btn}
                            onPress={() => {
                                redirectToHomeScreen()
                            }}
                        >
                            <Text style={styles.forget_password_footer_send_code_btn_text}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            }
        </SafeAreaView>
    );
}

export default Login;


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

    registration_header_login_tab: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        paddingBottom: 6
    },
    registration_header_login_tab_text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center'
    },
    registration_header_register_tab: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
        borderBottomWidth: 2,
        borderBottomColor: '#F6F6F6',
        paddingBottom: 6
    },
    registration_header_register_tab_text: {
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


    forget_password_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    forget_password_btn_text: {
        fontWeight: '600',
        fontSize: 16,
        color: '#868686'
    },
    forget_password_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        position: 'relative',

    },
    forget_password_header_back_btn: {
        position: 'absolute',
        left: 15,
    },
    forget_password_header_title: {
        textAlign: 'center',
        color: '#333333',
        fontSize: 18,
        fontWeight: '600',
    },
    forget_password_main_part: {
        width: '100%',
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    forget_password_main_part_input_wrapper: {
        width: '100%',
        marginBottom: 20,
    },

    forget_password_input_field: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        padding: 15,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: '400',
        color: '#868686',
    },
    forget_password_footer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 21,
        paddingTop: 20,

    },

    forget_password_footer_send_code_btn: {
        backgroundColor: '#E50B0B',
        height: 50,
        width: '100%',
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forget_password_footer_send_code_btn_text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
    security_code_popup: {
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
        // top: 0,
        bottom: 0,
        // right: 0,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    security_code_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 21,
        paddingBottom: 21,
        // flex: 1
    },
    forget_password_main_part_title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#868686',
        marginBottom: 20,
        textAlign: 'center',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
