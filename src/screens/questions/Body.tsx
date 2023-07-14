import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Question from './Question';

const Body = () => {
  return (
    <View style={styles.Body}>
      <Text style={{fontSize: 28, fontWeight: '600', color: COLORS.white}}>
        Qu'est ce qui peut étre servien expresso , Cappuccino
      </Text>
      <Question />
      <Question />
      <Question />
      <Question />
    </View>
  );
};

const styles = StyleSheet.create({
  Body: {
    flex: 6,
    flexDirection: 'column',
    gap: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
});

export {Body};
