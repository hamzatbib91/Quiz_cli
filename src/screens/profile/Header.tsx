import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/colors';
const Header = () => {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-left"
        style={{color: COLORS.white, fontSize: 30, marginRight: 10}}
      />
      <Icon
        name="cog-outline"
        style={{color: COLORS.white, fontSize: 30, marginRight: 10}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 40,
    paddingHorizontal: 10,
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GreenDark,
  },
});
export {Header};
