/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Offres from './Offres/Offres';
import Cadeau from './Cadeaux/Cadeau';

const Body = ({
  cadeau = true,
  offres = false,
}: {
  cadeau: boolean;
  offres?: boolean;
}) => {
  return (
    <ScrollView style={styles.BodyBoutique}>
      {cadeau ? <Cadeau /> : <Offres />}
    </ScrollView>
  );
};

const styles = {
  BodyBoutique: {
    marginTop: 200,
    backgroundColor: COLORS.GreenMediumDark,
    padding: 20,
  },
};
export {Body};
