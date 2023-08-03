import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import Close from '../../svg/Close';



const Jouer = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.jouer}>
      <View
        style={{
          flex: 0.5,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View>
        <Close onPress={ () => {  navigation.goBack();} }/>

        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'column',
          gap: 15,
          justifyContent: 'flex-end',
        }}>
        <Button
          color={COLORS.GreenDark}
          title="DEBUT CHRONO"
          bgColor={COLORS.YellowText}
          border={2}
          borderColor={COLORS.GreenDark}
          bottom={50}
        />
        <Button
          color={COLORS.GreenButton}
          bgColor={COLORS.white}
          borderColor={COLORS.GreenButton}
          border={3}
          title="CATECORIES"
          onPress={() => navigation.navigate('CategorieScreen')}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Text style={{color: COLORS.white}}>REGLES DE JEU</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jouer: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GreenMedium,
  },
});
export default Jouer;
