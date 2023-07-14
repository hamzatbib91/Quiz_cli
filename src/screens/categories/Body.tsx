import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

import ArtSVG from '../../svg/ArtSVG';
import GeoGraphieSVG from '../../svg/GeoGraphieSVG';
import HistoireSVG from '../../svg/HistoireSVG';
import SportSVG from '../../svg/SportSVG';
import SiencesSVG from '../../svg/SiencesSVG';
import DivertissementSVG from '../../svg/DivertissementSVG';

const Body = () => {
  const componentsArray = [
    {
      id: 1,
      component: (
        <ArtSVG
          xmlns="http://www.w3.org/2000/svg"
          width="75%"
          height="75%"
          fill="none"
        />
      ),
      title: 'ART',
      color: COLORS.ArtCOLOR,
    },
    {
      id: 2,
      component: (
        <GeoGraphieSVG
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="90%"
          fill="none"
        />
      ),
      title: 'GEOGRAPHIE',
      color: COLORS.GéographieCOLOR,
    },
    {
      id: 3,
      component: (
        <SportSVG
          xmlns="http://www.w3.org/2000/svg"
          width="80%"
          height="80%"
          fill="none"
        />
      ),
      title: 'SPORT',
      color: COLORS.GreenButton,
    },
    {
      id: 4,
      component: (
        <HistoireSVG
          xmlns="http://www.w3.org/2000/svg"
          width="80%"
          height="80%"
          fill="none"
        />
      ),
      title: 'HISTOIRE',
      color: COLORS.bgViolet,
    },

    {
      id: 5,
      component: (
        <SiencesSVG
          xmlns="http://www.w3.org/2000/svg"
          width="80%"
          height="80%"
          fill="none"
        />
      ),
      title: 'SIENCES',
      color: COLORS.SienceCOLOR,
    },
    {
      id: 6,
      component: (
        <DivertissementSVG
          xmlns="http://www.w3.org/2000/svg"
          width="90%"
          height="100%"
          fill="none"
        />
      ),
      title: 'DIVERTISS',
      color: COLORS.DivertissementCOLOR,
    },
  ];
  return (
    <View style={{flex: 3}}>
      <Text
        style={{
          color: COLORS.white,
          fontWeight: 'bold',
          fontSize: 21,
          textAlign: 'center',
        }}>
        CHOISISSEZ LA CATEGORIE
      </Text>
      <View style={styles.Body}>
        {componentsArray.map((item) => (
          <View style={styles.child} key={item.id}>
            <View
              style={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}>
              <View
                style={[styles.CardCategorie, {backgroundColor: item.color}]}>
                {item.component}
              </View>
              <Text style={{fontWeight:'700', color: COLORS.white}}>
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Body: {
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  child: {
    width: '33.33%',
    height: 150,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  CardCategorie: {
    width: '90%',
    height: '80%',
    backgroundColor: COLORS.bgViolet,
    borderRadius: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: COLORS.white,
  },
});

export {Body};
