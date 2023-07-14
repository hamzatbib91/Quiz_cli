/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, Image, ImageStyle, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';
import MyModal from '../../components/Modal';
import Abonnement from '../abonnement/Abonnement';
import {AppContext} from '../../hooks/useContext';
import {useContext} from 'react';

type K = 'braing.png' | 'certaficat-user.png' | 'cadeaux.png' | 'ace.png';

let parrier = false;
interface CardProps {
  title?: string;
  ButtonText?: string;
  parrainer?: boolean;
  jouer?: boolean;
  icon?: K;
  choisir?: boolean;
  navigation?: any;
  abonnementModal?: boolean;

  color?: string;
  bgColor?: string;
  onPress?: () => void;
}

interface ImageProps {
  source: string;
  style: {
    width: number;
    height: number;
    borderRadius: number;
    marginTop: number;
  };
}

const Card = ({
  title = '',
  ButtonText = 'PARRAINER',
  parrainer = false,
  jouer = false,
  icon = 'braing.png',
  choisir = false,
  abonnementModal = false,
  color = COLORS.white,
  bgColor = COLORS.GreenButton,
  navigation,
}: CardProps) => {
  //useEffect to change the value of parrier
  const {variable, setVariable} = useContext<any>(AppContext);
  const handleJouer = (): void => {
    navigation.navigate('JouerScreen');
  };
  const handleAbonnement = () => {
    setVariable(true);
  };
  const imagePath: {[key in K]: any} = {
    'braing.png': require('../../images/braing.png'),
    'certaficat-user.png': require('../../images/usercertafica.png'),
    'cadeaux.png': require('../../images/cadeau.png'),
    'ace.png': require('../../images/ace.png'),
    // Add more image paths here for different icons
  };

  const sizes: {[key in K]: {width: number; height: number}} = {
    'braing.png': {width: 60, height: 50},
    'certaficat-user.png': {width: 60, height: 60},
    'cadeaux.png': {width: 60, height: 60},
    'ace.png': {width: 60, height: 60},
    // Add more image paths here for different icons
  };

  return (
    <View style={[styles.content, {paddingBottom: parrainer ? 40 : 15}]}>
      <Image
        source={imagePath[icon]}
        style={{
          width: sizes[icon].width,
          height: sizes[icon].height,
          borderRadius: 10,
          marginTop: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 10,
        }}>
        <Image source={imagePath[icon]} style={styles.imgBG} />
        <Text style={styles.title}>{title}</Text>
        {jouer && <Button onPress={handleJouer} title="JOUER" />}
        {choisir && (
          <Button
            onPress={handleAbonnement}
            title="CHOISIR SON ABONNEMENT"
            bgColor={COLORS.white}
            color={COLORS.GreenButton}
            border={2}
          />
        )}

        {parrainer && (
          <Button
            title={ButtonText}
            position="absolute"
            bottom={-60}
            bgColor={bgColor}
            color={color}
            width="50%"
            //translateX:-50 is meaning that the button will be centered in the parent view
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.blackLight2,
    marginVertical: 5,
    marginTop: 20,
    marginBottom: 15,
    paddingVertical: 15,
    width: '100%',
    position: 'relative',
    paddingHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    borderRadius: 10,
  },
  imgBG: {
    width: 120,
    height: 120,
    opacity: 0.2,
    borderRadius: 10,
    position: 'absolute',
    left: -5,
    zIndex: -1,
    top: -60,
  },
  title: {
    color: COLORS.white,
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 15,
  },
});

export {Card};
