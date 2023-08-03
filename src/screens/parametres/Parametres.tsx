/* eslint-disable @typescript-eslint/no-unused-vars */
import {View} from 'react-native';
import {Header as HeaderParametre} from './Header';
import * as React from 'react';
import CardParametre from './CardParametre';

const Parametres = ({navigation}: {navigation: any}) => {
  
  return (
    <View style={{flex: 1, flexDirection: 'column', position: 'relative'}}>
      <HeaderParametre />
      <CardParametre />
    </View>
  );
};

export default Parametres;
