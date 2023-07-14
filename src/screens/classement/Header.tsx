import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import {Body as BodyClassement} from './Body';
const Header = () => {
  const [podiom, setPodiom] = React.useState(false);
  const [semaine, setSemaine] = React.useState(true);
  const [toujours, setToujours] = React.useState(false);
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
            Classement
          </Text>
          <Text>{/*Empty dont remove it*/}</Text>
        </View>
        <View style={styles.Classement}>
          <Button
            onPress={() => {
              setSemaine(true);
              setPodiom(false);
              setToujours(false);
            }}
            style={[
              styles.Button,
              semaine && {
                backgroundColor: COLORS.DarkShadowActive,
                borderBottomWidth: 3,
                borderBottomColor: COLORS.white,
              },
            ]}>
            <Text style={{color: COLORS.white}}>Semaine</Text>
          </Button>
          <Button
            onPress={() => {
              setSemaine(false);
              setPodiom(true);
              setToujours(false);
            }}
            style={[
              styles.Button,
              podiom && {
                backgroundColor: COLORS.DarkShadowActive,
                borderBottomWidth: 3,
                borderBottomColor: COLORS.white,
              },
            ]}>
            <View style={styles.shadow} />
            <Text style={{color: COLORS.white}}>Podium</Text>
          </Button>
          <Button
            onPress={() => {
              setSemaine(false);
              setPodiom(false);
              setToujours(true);
            }}
            style={[
              styles.Button,
              toujours && {
                backgroundColor: COLORS.DarkShadowActive,
                borderBottomWidth: 3,
                borderBottomColor: COLORS.white,
              },
            ]}>
            <View style={styles.shadow} />
            <Text style={{color: COLORS.white}}>Toujours</Text>
          </Button>
        </View>
      </View>
      <BodyClassement semaine={semaine} podiom={podiom} toujour={toujours} />
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
  Classement: {
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
    width: '33.33%',
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
