/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import COLORS from '../constants/colors';
type T={
  title: any;
  onPress?: (() => void) | undefined;
  color?: string | undefined;
  border?: number | undefined;
  bottom?: number | undefined;
  width?: any;
  iconStatus?: boolean | undefined;
  iconName?: string | undefined;
  position?:  'absolute' | 'relative' | undefined;
  borderColor?: string | undefined;
  bgColor?: string | undefined;
}
const Button = ({
  title,
  onPress = () => {},
  color = COLORS.white,
  border = 0,
  bottom = 0,
  width = '100%',
  iconStatus = false,
  iconName = 'diamond.png',
  position = 'absolute',
  borderColor = COLORS.GreenButton,

  bgColor = COLORS.GreenButton,
}:T) => {
  const imagePath: {[key in string]: any} = {
    'diamond.png': require('../images/diamong.png'),
    'video.png': require('../images/diamong.png'),
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 40,
        width: width,
        backgroundColor: bgColor,
        marginVertical: 0,
        borderRadius: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        position: position,
        zIndex: 100,
        bottom: bottom,
        alignItems: 'center',
        borderWidth: border,
        borderColor: borderColor,
      }}>
      {iconStatus && (
        <Image
          source={imagePath[iconName]}
          style={{width: 16, height: 17}}
        />
      )}
      <Text style={{color: color, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
