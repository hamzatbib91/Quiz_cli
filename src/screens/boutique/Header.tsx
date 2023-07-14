import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import {Body as BodyBoutique} from './Body';

const Header = () => {
  //useState
  const [cadeaux, setCadeaux] = React.useState(true);
  const [offres, setOffres] = React.useState(false);
  return (
    <View>
      <View style={styles.HeaderBoutique}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}>
          <Icon
            onPress={() => {}}
            name={'arrow-left'}
            style={{fontSize: 28, color: COLORS.white}}
          />
          <Text style={{fontWeight: '600', fontSize: 25, color: COLORS.white}}>
            Boutique
          </Text>
          <Text>{/*Empty dont remove it*/}</Text>
        </View>
        <View style={styles.CadeauOffres}>
          <Button
            onPress={() => {
              setCadeaux(true), setOffres(false);
            }}
            style={[
              styles.Button,
              cadeaux && {
                backgroundColor: COLORS.DarkShadowActive,
                borderBottomWidth: 3,
                borderBottomColor: COLORS.white,
              },
            ]}>
            <Text style={{color: COLORS.white}}>Cadeaux</Text>
          </Button>
          <Button
            onPress={() => {
              setOffres(true), setCadeaux(false);
            }}
            style={[
              styles.Button,
              offres && {
                backgroundColor: COLORS.DarkShadowActive,
                borderBottomWidth: 3,
                borderBottomColor: COLORS.white,
              },
            ]}>
            <View style={styles.shadow} />
            <Text style={{color: COLORS.white}}>Offres</Text>
          </Button>
        </View>
      </View>
      <BodyBoutique cadeau={cadeaux} offres={offres} />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBoutique: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',

    backgroundColor: COLORS.GreenMedium,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.white,
  },
  CadeauOffres: {
    flex: 1,
    flexDirection: 'row',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.black,
    opacity: 0.2,
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
  Button: {
    width: '50%',
    borderRadius: 0,
    flexDirection: 'row',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DarkShadow,
    //transition
    transition: 'all 0.3s ease-in-out',
  },
});

export {Header};
