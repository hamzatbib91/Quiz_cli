import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import {Avatar as AvatarSetting} from './Avatar';
import ParametreCompte from './ParametreCompte';
import PlusInfo from './PlusInfo';

const CardParametre = () => {
  return (
    <View style={styles.cardProfile}>
      <ScrollView style={{position: 'relative'}}>
        <AvatarSetting />
        <ParametreCompte />
        <PlusInfo   />
      </ScrollView>
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
export default CardParametre;
