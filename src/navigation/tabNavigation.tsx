/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home';
import Parametres from '../screens/parametres/Parametres';
import Boutique from '../screens/boutique/Boutique';
import Classement from '../screens/classement/Classement';
import Profile from '../screens/profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          let iconName: string = '';
          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === profileName) {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === boutiqueName) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === classementName) {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === parametresName) {
            iconName = focused ? 'cog' : 'cog-outline';
          }
          return <Icon name={iconName} size={32} color={color} />;
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
