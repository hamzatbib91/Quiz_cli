import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle';


const Question = ({ index, response, selectedValue, moveNextQuestion, correctAnswer, percentage }: { index: number, response: string, selectedValue: string, moveNextQuestion: () => void, correctAnswer: () => void, percentage: number }) => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [value, setValue] = React.useState(2);

  const sty = [styles.noCorect, styles.corect, styles.question];
  const handleCorrectAnswer = () => {
    setValue(1);
    correctAnswer();
    setTimeout(() => {
      setValue(2);

    }, 500);
  }
  const handleNotCorrectAnswer = () => {
    setValue(0);
    moveNextQuestion();
    setTimeout(() => {
      setValue(2);
    }, 500);
  }

  return (
    <View style={sty[value]}>
      <TouchableOpacity onPress={() => {
        if (selectedValue === 'true') { handleCorrectAnswer(); }
        else { handleNotCorrectAnswer(); }
      }
      }
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
          paddingHorizontal: 30,
          height: '100%',
          overflow: 'hidden',
        }}>
        {
          percentage !== 0 && <ProgressCircle percent={percentage} radius={20} borderWidth={6} color="#3399FF" shadowColor="#999" bgColor="#fff" >
            <Text style={{ fontSize: 11 }}>{percentage}%</Text>
          </ProgressCircle>
        }

        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{alphabet[index]} -</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{response}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    flex: 1,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 2,
    width: '100%',
    height: 40,
    gap: 10,
  },
  corect: {
    flex: 1,
    borderColor: COLORS.white,
    backgroundColor: '#9acd32',
    borderRadius: 5,
    borderWidth: 2,
    width: '100%',
    height: 40,
    gap: 10,
  },
  noCorect: {
    flex: 1,
    borderColor: COLORS.white,
    backgroundColor: '#ff6347',
    borderRadius: 5,
    borderWidth: 2,
    width: '100%',
    height: 40,
    gap: 10,
  },
});

export default Question;
