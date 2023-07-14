/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Header as HeaderBoutique} from './Header';

const Boutique = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1 ,flexDirection: 'column', position: 'relative'}}>
      <HeaderBoutique />
    </View>
  );
};

export default Boutique;
