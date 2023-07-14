import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header as HeaderQuestions} from './Header';
import {Body as BodyQuestions} from './Body';
import {Footer as FooterQuestions} from './Footer';
import COLORS from '../../constants/colors';

const Questions = () => {
  return (
    <View style={styles.questions}>
      <HeaderQuestions />
      <BodyQuestions />
      <FooterQuestions />
    </View>
  );
};

const styles = StyleSheet.create({
  questions: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: COLORS.GreenMedium,
  },
});

export default Questions;
