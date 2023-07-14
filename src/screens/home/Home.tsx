/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import AvatarGamer from './Avatar';
import Diamond from './Diamond';
import {Card} from './Card';
import {AppContext} from '../../hooks/useContext';
import {useContext} from 'react';
import Abonnement from '../abonnement/Abonnement';
import Parrainer from '../Parrainer/Parrainer';
import Pause from '../pause/Pause';
import Attendez from '../attendez/Attendez';

const Home = () => {
  return (
    <ScrollView style={styles.content}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AvatarGamer />
        <Diamond />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 0,
        }}>
        <Image
          source={require('../../images/brain.png')}
          style={{width: 270, height: 270}}
        />
      </View>
      <View style={{paddingBottom: 60}}>
        <Card
          icon="braing.png"
          jouer={true}
          choisir={true}
          parrainer={false}
          title="Jouer et gagner!"
        />
        <Card
          jouer={false}
          choisir={false}
          icon="certaficat-user.png"
          parrainer={true}
          title="Parrainer plusieurs personnes recoit 100 points de jeu  a chaque une"
        />
        <Card
          bgColor={COLORS.YellowText}
          color={COLORS.black}
          jouer={false}
          icon="cadeaux.png"
          choisir={false}
          ButtonText="RECUPERER"
          parrainer={true}
          title="Cadeaux gratuits a récupérer tous les jours"
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AvatarGamer />
        <Diamond />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 0,
        }}>
        <Image
          source={require('../../images/brain.png')}
          style={{width: 270, height: 270}}
        />
      </View>
      <View style={{paddingBottom: 60}}>
        <Card
          icon="braing.png"
          jouer={true}
          choisir={true}
          parrainer={false}
          title="Jouer et gagner!"
        />
        <Card
          jouer={false}
          choisir={false}
          icon="certaficat-user.png"
          parrainer={true}
          title="Parrainer plusieurs personnes recoit 100 points de jeu  a chaque une"
        />
        <Card
          bgColor={COLORS.YellowText}
          color={COLORS.black}
          jouer={false}
          icon="cadeaux.png"
          choisir={false}
          ButtonText="RECUPERER"
          parrainer={true}
          title="Cadeaux gratuits a récupérer tous les jours"
        />
      </View>
    </ScrollView>
  );
};

const HomeScreen = () => {
  const {variable, setVariable} = useContext<any>(AppContext);
  const {parier, setParier} = useContext<any>(AppContext);

  return variable ? <Abonnement /> : parier ? <Parrainer /> : <Home />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    paddingVertical: 40,
    paddingHorizontal: 25,
    backgroundColor: COLORS.bgGreen,
    minHeight: '100%',
  },
});

export default HomeScreen;
