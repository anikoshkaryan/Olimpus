import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from "../components/AuthContext/context";
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from "react-native-splash-screen";
import {useDispatch, useSelector, Provider} from 'react-redux';
import {checkToken} from '../store/actions/farmMeatActions';


// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import RegistrationScreen from '../components/screens/AuthScreens/Registration'
import LoginScreen from '../components/screens/AuthScreens/Login'
import ForgetPasswordScreen from '../components/screens/AuthScreens/ForgetPassword'
import HomeScreen from '../components/screens/MainScreens/HomeScreen'
import SportCategoryScreen from "../components/screens/MainScreens/SportCategory";


const RootNavigator = () => {
    // AsyncStorage.clear()
    const dispatch = useDispatch();
    const {isLoggedIn, user} = useSelector(state => state.farmMeatReducer);

    React.useEffect(() => {
        dispatch(checkToken());
    }, [dispatch]);


    return (
            <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName='RegistrationScreen'
                        screenOptions={{
                            headerShown: false,
                            animationEnabled: true,
                            detachPreviousScreen: true,
                            presentation: 'transparentModal'
                        }}
                    >
                        <Stack.Screen
                            name="RegistrationScreen"
                            component={RegistrationScreen}
                            options={({route}) => ({
                                tabBarButton: () => null,
                                tabBarStyle: {display: 'none'},
                            })}
                        />
                        <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                            options={({route}) => ({
                                tabBarButton: () => null,
                                tabBarStyle: {display: 'none'},
                            })}
                        />
                        <Stack.Screen
                            name="ForgetPasswordScreen"
                            component={ForgetPasswordScreen}
                            options={({route}) => ({
                                tabBarButton: () => null,
                                tabBarStyle: {display: 'none'},
                            })}
                        />
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}
                            options={({route}) => ({
                                tabBarButton: () => null,
                                tabBarStyle: {display: 'none'},
                            })}
                        />

                        <Stack.Screen
                            name="SportCategoryScreen"
                            component={SportCategoryScreen}
                            options={({route}) => ({
                                tabBarButton: () => null,
                                tabBarStyle: {display: 'none'},
                            })}
                        />



                    </Stack.Navigator>

            </NavigationContainer>


    );
};

export default RootNavigator;
