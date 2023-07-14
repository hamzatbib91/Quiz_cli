import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AuthStack from './authStack';
import auth from '@react-native-firebase/auth';
import UserStack from './serStack';
// import UserStack from './serStack';

export default function rootNavigation() {
  const {currentUser} = auth();
  // React.useEffect(() => {
  //   if (currentUser) {
  //   }
  // }, [currentUser]);

  return (
    <NavigationContainer>
      {auth().currentUser ? <UserStack /> : <UserStack /> }
    </NavigationContainer>
  );
}
