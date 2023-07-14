import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/colors';

const PlusInfo = () => {
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
          <Icon
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
          <Icon
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
            backgroundColor: COLORS.redLight,
          }}>
          <Text
            style={{fontSize: 17, fontWeight: '300', color: COLORS.redText}}>
            Déconnexion
          </Text>
          <Icon
            onPress={() => {}}
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
