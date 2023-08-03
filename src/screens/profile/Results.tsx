import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

const Results = () => {
  return (
    <View style={styles.resultProfile}>
      <View style={styles.iconResult}>
        <Image
          source={require('../../images/diamong.png')}
          style={{width: 20, height: 22}}
        />
        <Text style={{color: COLORS.white}}>Points</Text>
        <Text style={{color: COLORS.white, fontWeight: 'bold'}}>300</Text>
      </View>
      <View style={styles.iconResult}>
        <Image
          source={require('./images/classements.png')}
          style={{width: 20, height: 22}}
        />
        <Text style={{color: COLORS.white}}>Classements</Text>
        <Text style={{color: COLORS.white, fontWeight: 'bold'}}>5000</Text>
      </View>
      <View style={styles.iconResult}>
        <Image
          source={require('./images/Chrono.png')}
          style={{width: 20, height: 22}}
        />
        <Text style={{color: COLORS.white}}>Chrono</Text>
        <Text style={{color: COLORS.white, fontWeight: 'bold'}}>00:07:20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultProfile: {
    marginTop: 90,
    width: '84%',
    marginHorizontal: '7%',
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.GreenMedium,
  },
  iconResult: {
    flexDirection: 'column',
    gap: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Results};
