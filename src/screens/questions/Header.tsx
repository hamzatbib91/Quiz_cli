import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const Header = () => {
  const navigation = useNavigation<any>();
  const handleNavigation = () => {
    navigation.navigate('Attendez');
  };
  return (
    <View style={styles.HeaderQuestion}>
      <TouchableOpacity
        onPress={() => {
          handleNavigation();
        }}
        style={{flexDirection: 'column', alignItems: 'center', gap: 8}}>
        <Image
          source={require('../.././images/./restart.png')}
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Changer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleNavigation();
        }}
        style={{flexDirection: 'column', alignItems: 'center', gap: 8}}>
        <Image
          source={require('../.././images/./calc.png')}
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Changer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleNavigation();
        }}
        style={{flexDirection: 'column', alignItems: 'center', gap: 8}}>
        <Image
          source={require('../.././images/./delete.png')}
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Changer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleNavigation();
        }}
        style={{flexDirection: 'column', alignItems: 'center', gap: 8}}>
        <Image
          source={require('../.././images/./check.png')}
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Changer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderQuestion: {
    flex: 2,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.GreenDark,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
});

export {Header};
