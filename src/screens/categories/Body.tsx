import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

import ArtSVG from '../../svg/ArtSVG';
import GeoGraphieSVG from '../../svg/GeoGraphieSVG';
import HistoireSVG from '../../svg/HistoireSVG';
import SportSVG from '../../svg/SportSVG';
import SiencesSVG from '../../svg/SiencesSVG';
import DivertissementSVG from '../../svg/DivertissementSVG';

const Body = ({ navigation }: { navigation: any }) => {
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
      itemId: 1,
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
      itemId: 2,

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
      itemId: 3,

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
      itemId: 4,
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
      itemId: 5,
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
      itemId: 6,

    },
  ];
  return (
    <View style={{ flex: 3 }}>
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
          <View style={styles.child} key={item.id} onStartShouldSetResponder={() => {
            navigation.navigate("Questions", {
              itemId: item.itemId,
            });
            return true;
          }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}>
              {/* <TouchableOpacity onPress={()=>navigation.navigate('Questions') } > */}

              <View
                style={[styles.CardCategorie, { backgroundColor: item.color }]}>
                {item.component}
              </View>
              <Text style={{ fontWeight: '700', color: COLORS.white }}>
                {item.title}
              </Text>
              {/* </TouchableOpacity> */}

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

export { Body };
