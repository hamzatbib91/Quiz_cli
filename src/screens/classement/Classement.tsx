/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'react-native';
import React from 'react';
import {Header as HeaderClassement} from './Header';

const Classement = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderClassement />
    </View>
  );
};

export default Classement;
