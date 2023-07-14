import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Question = () => {
  return (
    <View style={styles.question}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
          paddingHorizontal: 30,
          height: '100%',
          overflow: 'hidden',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>A:</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Question</Text>
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
});

export default Question;
