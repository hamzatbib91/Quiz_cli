import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
//import {MaterialIcons} from '@expo/vector-icons';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
type CardRef = {
  // Define the properties/methods of your custom ref type here
  // Example: current: HTMLDivElement | null;
  // Adjust the type according to your needs
};

type CardProps = {
  offre?: boolean;
  percent?: boolean;
  checked?: boolean;
  data?: any; // Adjust the type according to your data structure
  onPress?: () => void;
};
const Card = React.forwardRef<CardRef, CardProps>(
  (
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      offre = false,
      percent = false,
      checked = false,
      data = {},
      onPress = () => {},
    },
    ref,
  ) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          ref={ref as React.RefObject<View>}
          style={[
            styles.CardAbonnement,
            checked && {borderWidth: 3.5, borderColor: COLORS.white},
          ]}>
          <View style={styles.headerCard}>
            <Image
              source={require('../../images/diamong.png')}
              style={{width: 20, height: 20, marginHorizontal: 5}}
            />
            <Text style={{color: COLORS.white}}>{data.point}</Text>
            <Text
              style={{fontWeight: '300', color: COLORS.white, fontSize: 12}}>
              points
            </Text>
            <Text style={{fontSize: 12, color: COLORS.white}}>+</Text>
            <Image
              source={require('../../images/presenent.png')}
              style={{width: 20, height: 20}}
            />
            <Text
              style={{fontSize: 13, color: COLORS.white, fontWeight: '300'}}>
              Cadeau pour la 3eme place
            </Text>
          </View>
          <View style={styles.bodyCard}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Text style={{fontSize: 35, color: COLORS.white}}>4</Text>
              <Text style={{fontSize: 28, color: COLORS.white}}>$</Text>
            </View>
            <TouchableOpacity style={styles.checkboxContainer}>
              <View
                style={[styles.checkbox, checked && styles.checkboxChecked]}>
                {checked && (
                  // <MaterialIcons name="check" size={22} color={COLORS.white} />
                  <Icon name="check" size={22} color={COLORS.white} />

                )}
              </View>
            </TouchableOpacity>
          </View>
          {percent && <Text style={styles.offre}>-30%</Text>}
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  CardAbonnement: {
    width: '96%',
    marginHorizontal: '2%',
    backgroundColor: COLORS.GreenDark,
    height: 130,
    borderRadius: 2,
    position: 'relative',

    padding: 15,
    paddingVertical: 20,

    flexDirection: 'column',
    gap: 10,
  },
  headerCard: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  bodyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  checkboxContainer: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    padding: 2,
    color: COLORS.white,
    marginVertical: 10,
    marginBottom: 20,
  },
  checkbox: {
    width: 37,
    height: 37,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.GreenMedium,
  },
  offre: {
    backgroundColor: COLORS.GreenText,
    opacity: 1,
    borderWidth: 1,
    borderColor: COLORS.black,
    position: 'absolute',
    top: -15,
    zIndex: 2,
    right: 30,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden',
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: 15,
  },
});

export {Card};
