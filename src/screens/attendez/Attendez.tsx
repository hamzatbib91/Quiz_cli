import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

import {Footer} from '../questions/Footer';

const Attendez = ({navigation}: {navigation: any }) => {

  return (
    <View style={styles.jouer}>
      <View
        style={{
          flex: 3,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
        }}>
        <View>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            name="arrow-back-outline"
            size={35}
            color={COLORS.white}
          />
        </View>
      </View>
      <View
        style={{
          flex: 6,
          width: '100%',
          flexDirection: 'column',
          gap: 50,
          justifyContent: 'flex-start',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            ATTENDEZ !
          </Text>
          <Text
            style={{textAlign: 'center', fontSize: 20, color: COLORS.white}}>
            Vous avez encore une chance
          </Text>
        </View>
        <View style={{flexDirection: 'column', gap: 10}}>
          <Button
            color={COLORS.white}
            title="REGARDER UNE VIDEO"
            bgColor={COLORS.greenOne}
            border={0}
            iconName="diamond.png"
            iconStatus={true}
          />
          <Button
            color={COLORS.GreenDark}
            bgColor={COLORS.white}
            borderColor={COLORS.GreenDark}
            border={3}
            iconName="diamond.png"
            iconStatus={true}
            onPress={() => navigation.navigate('Niveau')}
            title="UTILISER LES POINTS"
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  jouer: {
    flex: 1,
    height: '100%',

    flexDirection: 'column',

    alignItems: 'center',
    backgroundColor: COLORS.GreenMedium,
  },
});
export default Attendez;
