import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Header as HeaderAbonnement} from './Header';
import {Body as BodyAbonnement} from './Body';
import COLORS from '../../constants/colors';
import {useContext} from 'react';
import {AppContext} from '../.././hooks/useContext';

const Abonnement = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {variable, setVariable} = useContext<any>(AppContext);
  const handleCancel = () => {
    setVariable(false);
  };
  return (
    <View style={styles.Abonement}>
      <HeaderAbonnement onPress={handleCancel} />
      <BodyAbonnement />
    </View>
  );
};

const styles = StyleSheet.create({
  Abonement: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    paddingVertical: 40,
    paddingHorizontal: 15,
    backgroundColor: COLORS.GreenMedium,
  },
});

export default Abonnement;
