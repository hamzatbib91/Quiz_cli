/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-elements';
import {Text} from 'react-native';
import {View, Image} from 'react-native';
import {useAuthentication} from '../../hooks/useAuthentication';
import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

import {Svg, LinearGradient, Stop, Rect} from 'react-native-svg';

const LoadingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Svg style={{flex: 1}}>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#314f11" />
          <Stop offset="100%" stopColor="#6A9939" />
        </LinearGradient>
        <Rect width="100%" height="100%" fill="url(#gradient)" />
        <View style={styles.content}>
          <View>
            <Image
              source={require('../../images/things.png')}
              resizeMode="contain"
              style={{width: 100, height: 100}}
            />
          </View>
          <View>
            <Image
              source={require('../../images/brain.png')}
              resizeMode="contain"
              style={{width: 350, height: 260, transform: [{scale: 1.3}]}}
            />
          </View>
          <View
            style={{
              height: 180,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: COLORS.GreenTextLight,
              }}>
              LOADING .....
            </Text>
          </View>
        </View>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '100%',
    paddingVertical: 80,
    marginHorizontal: '20%',
    marginVertical: 0,
    width: '60%',
    alignItems: 'center',
  },
});

export default LoadingScreen;
