import * as React from 'react';
import  { useState, useRef } from 'react';
import Svg, { Mask, Path, Rect, Circle, Defs, Stop, ClipPath, G, Use, Pattern, } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FooterIcon1NonActive from '../../assets/svg/footer_icon1_non_active';
import FooterIcon1Active from '../../assets/svg/footer_icon1_active';
import FooterIcon2NonActive from '../../assets/svg/footer_icon2_non_active';
import FooterIcon2Active from '../../assets/svg/footer_icon2_active';
import FooterIcon3NonActive from '../../assets/svg/footer_icon3_non_active';
import FooterIcon4NonActive from '../../assets/svg/footer_icon4_non_active';
import FooterIcon4Active from '../../assets/svg/footer_icon4_active';


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
    Dimensions
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

function Footer (props) {



    const redirectToHomeScreen = () => {
        props.navigation.navigate('HomeScreen')
    }


    return (
        <View style={styles.footer}>

            <View style={styles.footer_wrapper}>
                {props.active_page == 'home' ?
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon1Active/>
                        </View>
                        <Text style={styles.footer_item_title_active}>Inisio</Text>

                    </TouchableOpacity>

                    :
                    <TouchableOpacity style={styles.footer_item} onPress={() => redirectToHomeScreen()}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon1NonActive/>
                        </View>
                        <Text style={styles.footer_item_title_no_active}>Inisio</Text>
                    </TouchableOpacity>
                }

                {props.active_page == 'event' ?
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon2Active/>
                        </View>
                        <Text style={styles.footer_item_title_active}>Evento</Text>

                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon2NonActive/>
                        </View>
                        <Text style={styles.footer_item_title_no_active}>Evento</Text>
                    </TouchableOpacity>
                }


                {props.active_page == 'chat' ?
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon3NonActive/>
                        </View>
                        <Text style={styles.footer_item_title_active}>Chat</Text>

                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon3NonActive/>
                        </View>
                        <Text style={styles.footer_item_title_no_active}>Chat</Text>
                    </TouchableOpacity>
                }


                {props.active_page == 'profile' ?
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon4Active/>
                        </View>
                        <Text style={styles.footer_item_title_active}>Perfil</Text>

                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.footer_item}>
                        <View style={styles.footer_item_icon}>
                            <FooterIcon4NonActive/>
                        </View>
                        <Text style={styles.footer_item_title_no_active}>Perfil</Text>
                    </TouchableOpacity>
                }

            </View>

        </View>
    );
}

export default Footer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        width: "100%",
        height: "100%",
    },
    footer: {
        width: '100%',
        paddingTop: 18,
        paddingBottom: 18,
        paddingHorizontal: 40,
        backgroundColor: '#000000',
    },
    footer_wrapper: {
        width: 295,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },

    footer_item: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    footer_item_icon: {
        marginBottom: 4
    },
    footer_item_title_active: {
        fontWeight: '700',
        color: '#E50B0B',
        fontSize: 14,
    },
    footer_item_title_no_active: {
        fontWeight: '700',
        color: '#ffffff',
        fontSize: 14,
    }

});
