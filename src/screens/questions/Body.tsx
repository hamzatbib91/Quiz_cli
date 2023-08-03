/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import COLORS from '../../constants/colors';
import Question from './Question';

type Question = {
  categorie: string;
  id: string;
  question: string;
  questionaire: string;
  responses: [{
    response: string;
    selectedValue: string;
  }]
}
type TbodyProps = {
  QuesTion: any;
  correctAnswer: () => void;
  moveNextQuestion: () => void;
  towOption: boolean;
  montre: boolean;
  sondage: boolean;
}



const Body = ({ QuesTion, correctAnswer, moveNextQuestion, towOption, montre, sondage }: TbodyProps) => {
  const [Q, setQ] = useState<any>(null);
  const [reponse, setReponse] = useState<any>(null);
  const [reponsefalse, setReponsefalse] = useState<any>(null);
  const [reponsetrue, setReponsetrue] = useState<any>(null);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    if (QuesTion) {
      setLoding(false);
      setQ(QuesTion);
      setReponse(QuesTion.responses.map((item:any) =>{ return { ...item, sondage: 0 };}));
      
      setReponsefalse(QuesTion.responses.filter((repons: any) => repons.selectedValue === 'false'));
      setReponsetrue(QuesTion.responses.filter((repons: any) => repons.selectedValue === 'true'));

    } else {
      setLoding(true);
    }
  }, [QuesTion]);

  useEffect(() => {
    if (montre) {
      setReponse(reponse.filter((repons: any) => repons.selectedValue === 'true'));
    }
    else if (towOption) {
      setReponse(reponse.filter((repons: any) => repons.selectedValue === 'true'));
      const randomfalse = Math.floor(Math.random() * reponsefalse.length);
      const randomtrue = Math.floor(Math.random() * reponsetrue.length);
      const random = Math.floor(Math.random() * 2);
      if (random === 1)
        setReponse([reponsetrue[randomtrue], reponsefalse[randomfalse]]);
      else
        setReponse([reponsefalse[randomfalse], reponsetrue[randomtrue]]);
    }
    else if (sondage) {
      const randomtrue = getRandomBetween(60,100);
      setReponse(reponse.map((repons: any) => {
        if (repons.selectedValue === 'true')
          return { ...repons, sondage: randomtrue };
        else 
          return { ...repons, sondage: getRandomBetween(0,80) };
      }));
    }
  }, [QuesTion, montre, towOption, sondage]);
  const getRandomBetween = (min: number , max : number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return (
    <View style={styles.Body}>
      <Text style={{ fontSize: 28, fontWeight: '600', color: COLORS.white }}>
        {Q?.question}
      </Text>
      {!loding && reponse.map((item: {
        response: string;
        selectedValue: string;
        sondage?: number;
      }, index: number) => {
        return (
          <Question percentage={item.sondage ? item.sondage : 0 } key={index} index={index} response={item.response} selectedValue={item.selectedValue} correctAnswer={correctAnswer} moveNextQuestion={moveNextQuestion} />
        );
      })

      }

    </View>
  );
};

const styles = StyleSheet.create({
  Body: {
    flex: 6,
    flexDirection: 'column',
    gap: 20,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
});

export { Body };
