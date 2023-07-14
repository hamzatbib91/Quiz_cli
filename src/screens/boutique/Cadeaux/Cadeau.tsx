import {View} from 'react-native';
import React from 'react';
import {Cards as CardCadeau} from './Cards';
import {Card as CardHome} from '../../home/Card';
import COLORS from '../../../constants/colors';

const Cadeau = () => {
  return (
    <View>
      <CardCadeau />
      <CardCadeau />
      <CardCadeau />
      <CardCadeau />
      <CardCadeau />
      <CardHome
        jouer={false}
        choisir={false}
        icon="ace.png"
        parrainer={true}
        ButtonText="JEN PROFITE"
        title="Convertissez vos points en Joker et maximisez vos chances de gagner"
      />
      <CardHome
        bgColor={COLORS.YellowText}
        color={COLORS.black}
        jouer={false}
        icon="cadeaux.png"
        choisir={false}
        ButtonText="RECUPERER"
        parrainer={true}
        title="Cadeaux gratuits a récupérer tous les jours"
      />
    </View>
  );
};

export default Cadeau;
