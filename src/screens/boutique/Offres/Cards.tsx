import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/colors';
import Button from '../../../components/Button';
type TImg = 'cDiscount' | 'uberFood';

const Cards = ({srcImg = 'cDiscount'}: {srcImg?: TImg}) => {
  const imagePath: {[key in TImg]: any} = {
    cDiscount: require('../../../images/CDiscount-removebg-preview.png'),
    uberFood: require('../../../images/Uber-Eats-Logo-removebg-preview.png'),

    // Add more image paths here for different icons
  };

  const sizes: {[key in TImg]:any} = {
    'cDiscount': {width: "100%", height: "100%"},
    'uberFood': {width: "80%", height: "100%"},
  };
  const {width, height} = sizes[srcImg];
  return (
    <View style={styles.CardOffre}>
      <View style={styles.HeaderCard}>
        <Image
          source={imagePath[srcImg]}
          style={{
            width: width,
            height: height,
          }}
        />
      </View>
      <View style={styles.BodyCard}>
        <Text style={{textAlign: 'center', color: COLORS.white}}>
          -5$ d'économie pour les nouveaux clients
        </Text>
        <Button
          title="COPIE LE CODE"
          bgColor={COLORS.YellowText}
          color={COLORS.GreenDark}
          width="80%"
        />
        <Text style={{color: COLORS.white, fontSize: 11}}>
          Expire le 02/06/2023
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardOffre: {
    width: '100%',
    borderWidth: 3,
    borderColor: 'white',
    height: 250,
    flexDirection: 'column',
    marginVertical: 10,
    backgroundColor: 'red',
  },
  HeaderCard: {
    flex: 1.3,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BodyCard: {
    flex: 2,
    gap: 10,
    paddingHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GreenDark,
  },
});

export {Cards};
