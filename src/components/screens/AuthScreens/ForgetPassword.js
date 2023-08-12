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

function ForgetPassword (props) {

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
    const [email, setEmail] = useState('');
    const [security_code, setSecurityCode] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [repeat_password, setRepeatPassword] = useState('');
    const [new_password_security, setNewPasswordSecurity] = useState(true);
    const [repeat_password_security, setRepeatPasswordSecurity] = useState(true);
    const [show_security_code_popup, setShowSecurityCodePopup] = useState(false);
    const [show_create_new_password_popup, setShowCreateNewPasswordPopup] = useState(false);
    const [show_success_password_popup, setShowSuccessPasswordPopup] = useState(false);



    const redirectToLoginScreen = () => {
        props.navigation.navigate('LoginScreen')
    }
    const redirectToHomeScreen = () => {
        props.navigation.navigate('HomeScreen')
    }

    const colorScheme = useColorScheme();





    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}  backgroundColor='#F8F8F8' color='#000000' hidden = {false}  translucent = {true}/>

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
                        onChangeText={(val) => setEmail(val)}
                        value={email}
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

                        </ScrollView>


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

                    </ScrollView>

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

                    </ScrollView>


                </View>
            </View>
            }
        </SafeAreaView>
    );
}

export default ForgetPassword;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        width: "100%",
        height: "100%",
        paddingBottom: 20,
        paddingTop: 21,

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
        // paddingHorizontal: 20,
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
        height: windowHeight,
        position: 'absolute',
        left: 0,
        top: 0,
        // bottom: 0,
        // right: 0,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    security_code_popup_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 61,
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
