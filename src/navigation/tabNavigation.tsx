/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home';
import Parametres from '../screens/parametres/Parametres';
import Boutique from '../screens/boutique/Boutique';
import Classement from '../screens/classement/Classement';
import Profile from '../screens/profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

//Screens Name
const homeName = 'Accueil';
const boutiqueName = 'Boutique';
const classementName = 'Classement';
const profileName = 'Profile';
const parametresName = 'Paramétres';

interface IconProps {
  iconName: string;
  focused: boolean;
  color: string;
  size: number;
}

type RouteProps = {
  route: any;
  // route: RouteProp<Record<string, object | undefined>, string>;
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      //lest add typeScript to screenOptions

      screenOptions={({route}) => ({
        //remove header
        headerShown: false,
        //using typeScript to add icon to tab bar
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any = '';
          if (route.name === homeName) {
            iconName = focused ? require('./images/home.png') : require('./images/home-outline.png');
          } else if (route.name === profileName) {
            iconName = focused ? require('./images/account.png') : require('./images/account-outline.png');
          } else if (route.name === boutiqueName) {
            iconName = focused ?  require('./images/cart.png') : require('./images/cart-outline.png');
          } else if (route.name === classementName) {
            iconName = focused ? require('./images/trophy.png') : require('./images/trophy-outline.png');
          } else if (route.name === parametresName) {
            iconName = focused ? require('./images/cog.png') : require('./images/cog-outline.png');
          }
          // return <Icon name={iconName} size={32} color={color} />;
          return <Image source={iconName}  style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            marginTop: 5,
          }}/>;

        },
      })}
      // tabBar={(p) =:> }
      // tabBar={{
      //     activeTintColor: COLORS.black,
      //     inactiveTintColor: 'grey',
      //     labelStyle: { paddingBottom: 5, fontSize: 10 },
      //     style: { padding: 20, height: 90}
      // }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={profileName} component={Profile} />
      <Tab.Screen name={boutiqueName} component={Boutique} />
      <Tab.Screen name={classementName} component={Classement} />
      <Tab.Screen name={parametresName} component={Parametres} />
    </Tab.Navigator>
  );
}
