/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Podium from './Podium/Podium';
import Semaine from './Semaine/Semaine';
import Toujours from './Toujours/Toujours';
const Body = ({podiom = false, semaine = true, toujour = false}) => {
  return (
    <ScrollView style={styles.BodyBoutique}>
      {podiom ? <Podium /> : semaine ? <Semaine /> : <Toujours />}
    </ScrollView>
  );
};

const styles = {
  BodyBoutique: {
    marginTop: 200,
    backgroundColor: COLORS.GreenMediumDark,
    padding: 20,
    paddingBottom: 100,
  },
};
export {Body};
