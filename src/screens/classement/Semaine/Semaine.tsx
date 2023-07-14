import { ScrollView} from 'react-native';
import React from 'react';
import {Cards as CardsSemaine} from '../Cards';
import COLORS from '../../../constants/colors';

const Semaine = () => {
  return (
    <ScrollView>
      <CardsSemaine crown={true} />
      <CardsSemaine crown={true} bgCadre={COLORS.greyLight} />
      <CardsSemaine crown={true} bgCadre={COLORS.bgRedMedium} />
      <CardsSemaine />
      <CardsSemaine />
      <CardsSemaine />
    </ScrollView>
  );
};

export default Semaine;
