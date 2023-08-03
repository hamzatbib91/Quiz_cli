import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Changer from '../../svg/Quizz/Changer';
import TowOption from '../../svg/Quizz/2option';
import Montre from '../../svg/Quizz/Montre';
import Sondage from '../../svg/Quizz/Sondage';

const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 4;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width / 1.2;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;
type TtypeChange= "change" | "sondage" | "towOptions" | "monter";

const Header = ({handleNavigation} : {handleNavigation:({typeChange}:{typeChange:TtypeChange})=>void}) => {
  
  return (
    <View style={styles.itemsWrap}>
      <TouchableOpacity
        onPress={() => {
          handleNavigation({typeChange: 'change'});
        }}
        // style={{flexDirection: 'column', alignItems: 'center', gap: 8}}
        style={styles.singleItem}
        >
        <Changer
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Changer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleNavigation({typeChange: 'sondage'});
        }}
        // style={{flexDirection: 'column', alignItems: 'center', gap: 8}}
        style={styles.singleItem}

        >
        <Sondage
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Sondage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleNavigation({typeChange:'towOptions'});
        }}
        // style={{flexDirection: 'column', alignItems: 'center', gap: 8}}
        style={styles.singleItem}

        >
        <TowOption
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>2 Option</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleNavigation({typeChange:'monter'});
        }}
        // style={{flexDirection: 'column', alignItems: 'center', gap: 8}}
        style={styles.singleItem}
        >
        <Montre
          style={{width: 56, height: 60, marginTop: 20}}
        />
        <Text style={{color: COLORS.white}}>Montre</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderQuestion: {
    flex: 2,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.GreenDark,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  itemsWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.GreenDark,
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  singleItem: {
    flexDirection: 'column', alignItems: 'center',
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
});

export {Header};
