import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home/Home';
import Layout from '../screens/layout/Layout';
import Boarding from '../screens/onBoarding/Boarding';
import LoadingScreen from '../screens/loading/Loading';
import SplashScreen from '../screens/loading/SplashScreen';

import JouerScreen from '../screens/jouer/Jouer';
import Categories from '../screens/categories/Categories';
import Questions from '../screens/questions/Questions';
import Attendez from '../screens/attendez/Attendez';
import Niveau from '../screens/niveau/Niveau';
import LoginScreen from '../screens/login/LoginScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Layout" component={Layout} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Attendez" component={Attendez} />
      <Stack.Screen name="Niveau" component={Niveau} />
      <Stack.Screen name="JouerScreen" component={JouerScreen} />
      <Stack.Screen name="CategorieScreen" component={Categories} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BoardingScreen" component={Boarding} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
