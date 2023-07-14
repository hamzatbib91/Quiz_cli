import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Avatar = () => {
  return (
    <View style={styles.avatarProfile}>
      <Image
        source={require('../../images/luffy.jpeg')}
        style={{width: 90, height: 90, borderRadius: 50}}
      />
      <Text>Mugiwara Luffy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarProfile: {
    position: 'absolute',
    zIndex: 3,
    gap: 10,
    transform: [{translateY: -50}],
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Avatar};
