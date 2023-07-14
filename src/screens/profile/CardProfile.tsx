import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar as AvatarProfile} from './Avatar';
import {Results as ResultProfile} from './Results';
import {Badges as BadgeProfile} from './Badges';

const CardProfile = () => {
  return (
    <View style={styles.cardProfile}>
      <View style={{position: 'relative'}}>
        <AvatarProfile />
      </View>
      <ResultProfile />
      <BadgeProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  cardProfile: {
    flexDirection: 'column',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    //borderRadius in top left and top right
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadowColor: '#000',

    top: 80,
    height: '85%',
    zIndex: 3,
  },
});

export default CardProfile;
