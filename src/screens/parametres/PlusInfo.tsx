import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import ArrowRight from '../../svg/Arrow-right';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



const PlusInfo = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.Parametres}>
      <Text
        style={{
          color: COLORS.grey,
          fontSize: 16,
          fontWeight: '300',
          paddingHorizontal: 20,
        }}>
        Plus d'informations
      </Text>
      <View style={{marginTop: 8}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>
            Termes et conditions
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
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 17, fontWeight: '300'}}>Assistance</Text>
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
            padding: 8,
            paddingHorizontal: 20,
          }}
          
          >
          <Text
            style={{fontSize: 17, fontWeight: '300'}}>
            Code de parrainage
          </Text>
          <ArrowRight
            onPress={() => { navigation.navigate('Parrainer');
          }}
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
            padding: 8,
            paddingHorizontal: 20,
            backgroundColor: COLORS.redLight,
          }}>
          <Text
            style={{fontSize: 17, fontWeight: '300', color: COLORS.redText}}>
            Déconnexion
          </Text>
          <ArrowRight
            onPress={() => {auth().signOut().then(() => console.log('User signed out!'));}}
            name={'chevron-right'}
            style={{fontSize: 22, color: COLORS.redText}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Parametres: {
    paddingVertical: 10,
  },
});
export default PlusInfo;
