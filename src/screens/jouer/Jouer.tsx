import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';



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
        <Icon name="arrow-back-outline" onPress={ () => {  navigation.goBack();} }   size={35} color={COLORS.white} />

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
