import {ScrollView} from 'react-native';
import React from 'react';
import {Cards as CardsOffre} from './Cards';

const Offres = () => {
  return (
    <ScrollView>
      <CardsOffre srcImg="cDiscount" />
      <CardsOffre srcImg="uberFood" />
      <CardsOffre />
      <CardsOffre />
      <CardsOffre />
    </ScrollView>
  );
};

export default Offres;
