import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
interface Styles {
  header: View['props']['style'];
  Heading: Text['props']['style'];
}
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.Heading}>Paramètres</Text>
    </View>
  );
};
const styles: Styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 40,
    paddingHorizontal: 10,
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GreenDark,
  },
  Heading: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: '700',

    marginHorizontal: 20,
  },
});
export {Header};
