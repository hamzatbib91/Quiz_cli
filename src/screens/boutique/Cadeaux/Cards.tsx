import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/colors';

const Cards = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <Image
          source={require('../../../images/presenent.png')}
          style={{width: 25, height: 25}}
        />
        <Text style={{fontSize: 17, color: COLORS.white}}>
          Cadeau premiére place
        </Text>
      </View>
      <View style={styles.CardCadeau}>
        <Image
          source={require('../../../images/card2.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardCadeau: {
    width: '100%',
    height: 200,
    marginVertical: 15,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
});

export {Cards};
