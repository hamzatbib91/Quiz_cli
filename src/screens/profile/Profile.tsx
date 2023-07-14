/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header as HeaderProfile} from './Header';
import CardProfile from './CardProfile';

const Profile = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.header}>
      <HeaderProfile />
      <CardProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {flex: 1, flexDirection: 'column', position: 'relative'},
});

export default Profile;
