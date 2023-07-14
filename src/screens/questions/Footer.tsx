import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import COLORS from '../../constants/colors';

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text
        style={{flexDirection: 'row', alignItems: 'center', flex: 1, gap: 10}}>
        <View>
          <Image
            source={require('../../images/diamong.png')}
            style={{width: 16, height: 17, marginHorizontal: 5}}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: COLORS.white,
            paddingHorizontal: 5,
          }}>
          22{' '}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '300',
            color: COLORS.white,
            paddingHorizontal: 5,
          }}>
          points
        </Text>
      </Text>
      <Text
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{width: '33%'}}>
          <Image
            source={require('../../images/./joker.png')}
            style={{width: 14, height: 19, marginHorizontal: 5}}
          />
        </View>
        <Text
          style={{
            width: '66%',
            fontSize: 12,
            color: COLORS.white,
            flexDirection: 'row',
          }}>
          Jockers:2
        </Text>
      </Text>
      <Text
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View>
          <Image
            source={require('../../images/./crono.png')}
            style={{width: 17, height: 19, marginHorizontal: 5}}
          />
        </View>
        <Text style={{flex: 1, fontSize: 12, color: COLORS.white}}>
          00:00:00
        </Text>
      </Text>
      <Text
        style={{flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Icon
          name="logout"
          style={{
            width: 25,
            height: 30,
            backgroundColor: COLORS.YellowText,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Footer: {
    flex: 0.8,
    backgroundColor: COLORS.GreenDark,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});

export {Footer};
