import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';
import UserStack from './serStack';
import { useAuthentication as UseAuthentication } from '../hooks/useAuthentication';

export default function rootNavigation() {
  const {users} = UseAuthentication();

  return (
    <NavigationContainer>
      {users ? <UserStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}
