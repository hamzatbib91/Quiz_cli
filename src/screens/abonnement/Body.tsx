import {View, } from 'react-native';
import React from 'react';
import {Card as CardAbonnement} from './Card';
import abonnementData from '../../../abonnementData';
import Button from '../../components/Button';

const Body = () => {
  const [checkedIndex, setCheckedIndex] = React.useState(-1);
  const handleCheckboxToggle = (index: number) => {
    //setChecked(!checked);
    setCheckedIndex(index);
  };
  return (
    <View style={{flex: 8, flexDirection: 'column', gap: 20}}>
      <View style={{flexDirection: 'column', gap: 20}}>
        {abonnementData.map((item, index) => {
          return (
            <CardAbonnement
              key={index}
              data={item}
              checked={index === checkedIndex}
              percent={item.offreStatus}
              onPress={() => handleCheckboxToggle(index)}
            />
          );
        })}
      </View>
      <Button title="CONFIRMER" />
    </View>
  );
};

export {Body};
