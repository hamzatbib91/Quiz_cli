/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import {Footer} from '../questions/Footer';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';

const Niveau = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.niveau}>
      <View style={{flex: 8.5}}>
        <ScrollView>
          <View style={{flexDirection: 'column', gap: 5, paddingVertical: 5}}>
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
            <Button title={10000} />
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  niveau: {
    flex: 4,
    paddingTop: 30,
    flexDirection: 'column',

    alignItems: 'center',
    backgroundColor: COLORS.GreenMedium,
  },
});
export default Niveau;
