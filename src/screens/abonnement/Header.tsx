import {View, Text} from 'react-native';
import React from 'react';
// import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../../constants/colors';

const Header = ({onPress = () => {}}) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        <Text onPress={onPress}>
          {/* <Ionicons name="arrow-back-outline" size={28} color={COLORS.white} /> */}
          <Icon name="arrow-back-outline" size={28} color={COLORS.white} />
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Text
          style={{
            fontSize: 23,
            color: COLORS.white,
          }}>
          Abonnement
        </Text>
      </View>
    </View>
  );
};

export {Header};
