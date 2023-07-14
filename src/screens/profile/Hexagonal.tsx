import {View,Image, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Svg, {Path} from 'react-native-svg';

const Hexagonal = ({
  bgColor = COLORS.white,
  w = 65,
  h = 90,
  wImg = 45,
  hImg = 45,
  top = -68,
  left = 10,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '33.33%',
        height: 90,
        alignItems: 'center',
      }}>
      <View style={[styles.Hexagonal]}>
        <View style={styles.container}>
          <Svg width={w} height={h} viewBox="0 0 100 100">
            <Path
              d="M50 0L100 25V75L50 100L0 75V25L50 0Z"
              fill={bgColor}
              stroke={'#000'}
              strokeWidth={1}
            />
          </Svg>
        </View>
        <Image
          source={require('../../images/crown.png')}
          style={{
            width: wImg,
            height: hImg,
            left: left,
            top: top,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Hexagonal: {
    height: '100%',
    marginVertical: 30,
    position: 'relative',
  },
  container: {
    marginRight: 10,
  },
});

export default Hexagonal;
