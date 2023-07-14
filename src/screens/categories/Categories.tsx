import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header as HeaderCategories} from './Header';
import {Body as BodyCategories} from './Body';
import COLORS from '../../constants/colors';

const Categories = () => {
  return (
    <View style={styles.jouer}>
      <HeaderCategories />
      <BodyCategories />
    </View>
  );
};

const styles = StyleSheet.create({
  jouer: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GreenMedium,
  },
});
export default Categories;
