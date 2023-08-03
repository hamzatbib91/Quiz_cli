import {View, Text} from 'react-native';
import React from 'react';
//useNavigation
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../constants/colors';
import Arrow from '../../svg/Arrow-left';
import Close from '../../svg/Close';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        {/* <Ionicons name="arrow-back-outline" size={28} color={COLORS.white} /> */}
        {/* <Icon name="arrow-back-outline" size={28} color={COLORS.white} /> */}
        <Arrow onPress={ () => {  navigation.goBack();} } />

      </View>
      <View>
        <Text
          style={{
            fontSize: 23,
            color: COLORS.white,
          }}>
          Categories
        </Text>
      </View>
      <View>
      {/* <Icon name="arrow-back-outline" onPress={ () => {  navigation.goBack();} }   size={35} color={COLORS.white} /> */}
      <Close onPress={ () => {  navigation.goBack();} }/>
        {/* <Feather
          onPress={() => {
            navigation.goBack();
          }}
          name="x"
          size={35}
          color={COLORS.white}
        /> */}
      </View>
    </View>
  );
};

export {Header};
