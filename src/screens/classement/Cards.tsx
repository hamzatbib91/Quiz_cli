import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Hexagonal from '../profile/Hexagonal';

const Cards = ({bgCadre = COLORS.bgOrange, crown = false}) => {
  return (
    <View style={styles.CardClassement}>
      <View style={{width: '10%'}}>
        <View style={styles.Text}>
          <Text style={{color: COLORS.grey}}>1</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          width: '74%',
        }}>
        <Image
          source={require('../.././images/luffy.jpeg')}
          style={{width: 50, height: 50, borderRadius: 50}}
        />
        <View style={{flexDirection: 'column', gap: 3}}>
          <Text>Robert Davis</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../images/diamong.png')}
                style={{width: 10, height: 10, marginHorizontal: 5}}
              />
              <Text style={{fontSize: 10, fontWeight: '600'}}>22 </Text>
              <Text style={{fontSize: 13, fontWeight: '300'}}>points |</Text>
            </Text>
            <Text style={{fontSize: 13}}> 00:07:20</Text>
          </View>
        </View>
      </View>
      {crown && (
        <Hexagonal
          top={-58}
          left={11}
          wImg={17}
          hImg={25}
          w={40}
          h={90}
          bgColor={bgCadre}
        />
      )}
      {crown && (
        <View
          style={[
            styles.Cadres,
            {
              backgroundColor: bgCadre,
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  CardClassement: {
    flex: 1,
    borderRadius: 2,
    gap: 3,
    height: 90,
    marginVertical: 5,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 0,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Cadres: {
    position: 'absolute',
    right: -130,
    top: 0,
    width: 220,
    transform: [{rotate: '-45deg'}],
    height: '100%',

    zIndex: -1,
  },
});

export {Cards};
