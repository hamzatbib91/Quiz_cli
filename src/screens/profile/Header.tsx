import {View, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import { Image } from 'react-native';
import Arrow from '../../svg/Arrow-left';

const Header = () => {
  return (
    <View style={styles.header}>
      <Arrow
        name="arrow-left"
        style={{color: COLORS.white, fontSize: 30, marginRight: 10}}
      />
      <Image
        source={require('./images/setting.png')}
        style={{ marginRight: 10, width:36,height:36}}
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
