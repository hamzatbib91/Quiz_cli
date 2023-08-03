/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegistrationScreen from '../screens/signup/RegistrationScreen';
import LoginScreen from '../screens/login/LoginScreen';
import ResetPassword from '../screens/reanitialiserMotPass/resetPassword';
import LoadingScreen from '../screens/loading/Loading';
import NewPassword from '../screens/nouveauMotPass/newPassword';
import Boarding from '../screens/onBoarding/Boarding';
import SplashScreen from '../screens/loading/SplashScreen';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Boarding" component={Boarding} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="resetPassword" component={ResetPassword} />
      <Stack.Screen name="newPassword" component={NewPassword} />
    </Stack.Navigator>
  );
}
