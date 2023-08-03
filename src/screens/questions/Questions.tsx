import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Header as HeaderQuestions } from './Header';
import { Body as BodyQuestions } from './Body';
import { Footer as FooterQuestions } from './Footer';
import COLORS from '../../constants/colors';
import { useQuestions } from './ControllerQuestions';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthentication } from '../../hooks/useAuthentication';



const Questions = ({ route }: { route: any }) => {
  const navigation = useNavigation<any>();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionIndexUserd, setQuestionIndexUsed] = useState<any>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [timeTakenTotal, setTimeTakenTotal] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [questions, setQuestions] = useState<any>([0]);
  const [montre, setmontre] = useState(false);
  const [sondage, setSondage] = useState(false);
  const [towOption, setTowOption] = useState(false);
  const { user, loding } = useAuthentication();


  type TtypeChange = "change" | "sondage" | "towOptions" | "monter";
  const { questions: t } = useQuestions({ id: route.params.itemId });
  const handleNavigation = ({ typeChange }: { typeChange: TtypeChange }) => {
    if (typeChange === 'change') {
      stopTimer();
      getrandomQuizz({ etat: 'change' });
    } else if (typeChange === 'sondage') {
      setSondage(true);
    } else if (typeChange === 'towOptions') {
      setTowOption(true);
    

    } else if (typeChange === 'monter') {
      setmontre(true);
    }
    // navigation.navigate('Attendez');
  };

  const correctAnswerPoints = 10;
  const maximumTimeLimit = 30;
  const maximumTimeBonus = 20;
  const maximumQuestion = 5;

  const timerRef = useRef<any>(null);
  const calculatePoints = (): number => {
    // Calculate the time bonus based on timeTaken and maximumTimeLimit
    const timeBonus = Math.max(
      maximumTimeBonus * (1 - timeTaken / maximumTimeLimit),
      0
    );
    if (correctAnswers === 0) {
      const total = (timeBonus / 4);
      return total;
    }
    // Calculate total points
    const totalPoints = correctAnswers * correctAnswerPoints + timeBonus;
    return totalPoints;
  };

  const startTimer = (): void => {
    setIsTimeUp(false);
    setTimeTaken(0);
    timerRef.current = setInterval(() => {
      setTimeTaken((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = (): void => {
    setIsTimeUp(true);
    setTimeTakenTotal((time) => time + timeTaken);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
  const handleCorrectAnswer = (): void => {
    setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    moveNextQuestion();
  };

  const moveNextQuestion = (): void => {
    stopTimer();
    if (questionIndexUserd.length < maximumQuestion) {
      getrandomQuizz({ etat: 'next' });
    } else {
      // All questions answered, you can show the final score here
      const finalScore = calculatePoints();
      Alert.alert('Final Score', 'Score : ' + finalScore.toString() + ' \n time : ' + timeTakenTotal + ' s \n CorrectAnswers:' + correctAnswers + '/' + questions.length);
    }
  };

  useEffect(() => {
    if (timeTaken >= maximumTimeLimit && !isTimeUp) {
      stopTimer();
      moveNextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeTaken, isTimeUp]);

  useEffect(() => {
    // Start the timer when the component mounts or when a new question appears
    startTimer();

    // Clean up the timer when the component unmounts or when moving to the next question
    return () => {
      stopTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIndex]);
  useEffect(() => {
    setQuestions(t);
  }, [t]);

  const getrandomQuizz = ({ etat }: { etat: 'change' | 'next' }) => {
    const typ = etat;
    const random = Math.floor(Math.random() * questions.length);
    const index = questions.indexOf(questions[random]);
    if (index !== -1) {
      if (etat === 'next') {
        setQuestionIndexUsed([...questionIndexUserd, questions.length]);
      }
      setQuestionIndex(random);
      setmontre(false);
      setTowOption(false);
      setSondage(false);
    } else {
      getrandomQuizz({ etat: typ });
    }
  }

  const currentQuestion = questions[questionIndex];
  return (
    <View style={styles.questions}>
      <HeaderQuestions handleNavigation={handleNavigation} />
      <BodyQuestions QuesTion={currentQuestion} correctAnswer={handleCorrectAnswer} moveNextQuestion={moveNextQuestion} montre={montre} sondage={sondage} towOption={towOption}/>
      <FooterQuestions timer={timeTaken} />
    </View>
  );
};

const styles = StyleSheet.create({
  questions: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: COLORS.GreenMedium,
  },
});

export default Questions;







