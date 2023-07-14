import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

const Avatar = () => {
  return (
    <View style={styles.avatarProfile}>
      <Image
        source={require('../../images/luffy.jpeg')}
        style={{width: 45, height: 45, borderRadius: 50}}
      />
      <Text style={{fontWeight: '600', fontSize: 15}}>Mugiwara Luffy</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  avatarProfile: {
    borderBottomColor: COLORS.greyLight,
    borderBottomWidth: 1,

    gap: 10,
    alignItems: 'center',
    width: '100%',
    padding: 20,
    flexDirection: 'row',
  },
});
export {Avatar};
