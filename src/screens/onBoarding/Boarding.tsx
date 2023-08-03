/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, Alert } from 'react-native';
import COLORS from '../../constants/colors';
import data from '../../../data';
import OnBoardingItem from '../../components/OnBoardingItem';
import Paginator from '../../components/Paginator';
import Button from '../../components/Button';
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase({
  name: 'mydb',
  location: 'default'
},
() => {
  console.log("Database connected!")
}, //on success
error => console.log("Database error", error) //on error
)

const Boarding = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dataRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      dataRef?.current?.scrollToIndex({ index: currentIndex + 1 });
      console.log(currentIndex + 1);
    }
    else if(currentIndex == data.length - 1 ){
      createUser();


    }
  };
  
  useEffect(() => {
    createUserTable(); //create the table
   },[]);
  //-------------------
  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  


  //create table function
  const createUserTable = () => {
    db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,  name VARCHAR)",[], (result) => {
      console.log("Table created successfully");
    }, (error) => {
      console.log("Create table error", error)
    })
  }
  const createUser = () => {
    let sql = "INSERT INTO users (name) VALUES ( ?)";
    let params = ["true"];
    db.executeSql(sql, params, (result) => {
      navigation.navigate('LoginScreen');

    }, (error) => {
     console.log("Create user error", error);
    });
 }
 

  return (
    <View
      style={{
        backgroundColor: COLORS.GreenDark,
        height: '100%',
        position: 'relative',
      }}>
      <View style={styles.content}>
        <FlatList
          //set the data to the data from the data.tsx file
          data={data}
          //render the data from the data.tsx file
          renderItem={({ item }) => <OnBoardingItem item={item} data={data} scrollX={scrollX} />}
          //set the horizontal to true
          horizontal
          //remove the scroll bar
          showsHorizontalScrollIndicator={false}
          //set the paging to true
          pagingEnabled
          //remove the bounce effect (its is the effect that happens when you scroll to the end of the screen)
          bounces={false}
          // set the key extractor to the id of the item
          keyExtractor={item => item.id.toString()}
          /*
            keyExtractor={(item)=>item.id}
            */
          ref={dataRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          //set the scroll x to the scroll x from the useRef
          onViewableItemsChanged={viewableItemsChanged}
          //32 is mean that the function will be called every 32 miliseconds
          scrollEventThrottle={2}
          viewabilityConfig={viewConfig}
          //i want to hiddin the scroll bar
          showsVerticalScrollIndicator={false}


        />
        <View
          style={{
            flexDirection: 'column',
            width: '70%',
            gap: 10,
            marginBottom: 40,
          }}>
          <View style={{ marginBottom: 50, }}>

            <Paginator data={data} scrollX={scrollX} />
          </View>

          <View style={{ marginBottom: 50, }}>

            <Button
              title={currentIndex == data.length - 1 ? 'DEMARRER' : 'SUIVANT'}
              onPress={scrollTo}
            />
          </View>
          {currentIndex == data.length - 1 ? null : (
            <Button
              title="SAUTER"
              onPress={() => {createUser();
                navigation.navigate('LoginScreen');

              }}
              color={COLORS.black}
              bgColor={COLORS.white}
            />
          )}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: COLORS.white,
          width: '100%',
          height: 300,
          zIndex: -1,

        }}
      />
    </View>
  );
};

export default Boarding;
const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: '100%',
    paddingTop: 80,
    width: '100%',
    alignItems: 'center',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.GreenButton,
  },
  text: {
    fontSize: 15,
    color: COLORS.greyText,
    textAlign: 'center',
    marginTop: 20,
  },
});

const styless = {
  color: COLORS.black,
  backgroundColor: COLORS.white,
};
