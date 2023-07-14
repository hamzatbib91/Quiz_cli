import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';


const Header = ({onPress = () => {}}) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{flex: 0.3}}>
        <Text onPress={onPress}>
          <Icon name="arrow-back-outline" size={28} color={COLORS.white} />
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Text
          style={{
            fontSize: 28,
            color: COLORS.white,
          }}>
          Code de parrainage
        </Text>
      </View>
    </View>
  );
};

export {Header};
