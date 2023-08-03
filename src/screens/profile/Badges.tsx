import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Hexagonal from './Hexagonal';

const Badges = () => {
  return (
    <View style={styles.badgeProfile}>
      <Text style={{fontSize: 15, textAlign: 'center', color: COLORS.black}}>
        BADGES
      </Text>
      <ScrollView style={{minHeight: '100%'}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View
            style={{
              width: '29.33%',
              flexDirection: 'column',
              gap: 0,
              marginLeft: 10,
            }}>
            <Hexagonal bgColor={COLORS.bgOrange} />
            <Text style={{marginHorizontal: 20}}>Or</Text>
          </View>
          <View
            style={{
              width: '29.33%',
              flexDirection: 'column',
              gap: 0,
              marginLeft: 10,
            }}>
            <Hexagonal bgColor={COLORS.bgGrayArgon} />
            <Text style={{marginHorizontal: 10}}>Argent</Text>
          </View>
          <View
            style={{
              width: '29.33%',
              flexDirection: 'column',
              gap: 0,
              marginLeft: 10,
            }}>
            <Hexagonal bgColor={COLORS.bgRedLight} />
            <Text style={{marginHorizontal: 10}}>Cuivre</Text>
          </View>
          <View
            style={{
              width: '29.33%',
              flexDirection: 'column',
              gap: 0,
              marginLeft: 10,
            }}>
            <Hexagonal bgColor={COLORS.bgViolet} />
            <Text style={{marginHorizontal: 10}}>Mondiale</Text>
          </View>
          
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeProfile: {
    marginTop: 20,
    width: '84%',
    height: '60%',
    marginHorizontal: '8%',
  },
});

export {Badges};
