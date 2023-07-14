import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/colors';

const Header = ({onPress = () => {}}) => {
  return (
    <View
      style={{
        flex: 2.6,
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text onPress={onPress}>
          <Icon name="arrow-left" style={{color: COLORS.white, fontSize: 35}} />
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 28,
            color: COLORS.white,
          }}>
          PAUSE
        </Text>
      </View>
      <View>
        <Text onPress={onPress}>
          <Icon name="close" style={{color: COLORS.white, fontSize: 35}} />
        </Text>
      </View>
    </View>
  );
};

export {Header};
