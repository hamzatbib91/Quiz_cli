import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header as HeaderPause} from './Header';
import {Body as BodyPause} from './Body';
import COLORS from '../../constants/colors';

const Pause = () => {
  return (
    <View style={styles.pause}>
      <HeaderPause />
      <BodyPause />
    </View>
  );
};
const styles = StyleSheet.create({
  pause: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    paddingVertical: 40,
    paddingHorizontal: 20,

    backgroundColor: COLORS.GreenMedium,
  },
});
export default Pause;
