import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import SwitchComponent from '../../components/Switch';
import ArrowRight from '../../svg/Arrow-right';

const ParametreCompte = () => {
  return (
    <View style={styles.Parametres}>
      <Text style={{color: COLORS.grey, fontSize: 16, fontWeight: '300'}}>
        Parametres du compte
      </Text>
      <View style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>
            Modifier le profil
          </Text>
          <ArrowRight
            onPress={() => {}}
            name={'chevron-right'}
            style={{fontSize: 22}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>
            Changer le mot de passe
          </Text>
          <ArrowRight
            onPress={() => {}}
            name={'chevron-right'}
            style={{fontSize: 22}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>Son</Text>
          <SwitchComponent />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>Musique</Text>
          <SwitchComponent />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>Notifications</Text>
          <SwitchComponent />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Parametres: {
    padding: 20,
    borderBottomColor: COLORS.greyLight,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

export default ParametreCompte;
