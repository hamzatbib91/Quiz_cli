/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import { View, StyleSheet, FlatList, Animated} from 'react-native';
import COLORS from '../../constants/colors';
import data from '../../../data';
import OnBoardingItem from '../../components/OnBoardingItem';
import Paginator from '../../components/Paginator';
import Button from '../../components/Button';

const Boarding = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dataRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      dataRef?.current?.scrollToIndex({index: currentIndex + 1});
    }
  };
  useEffect(() => {});
  //-------------------
  const viewableItemsChanged = useRef(({viewableItems}:{viewableItems:any}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
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
          renderItem={({item}) => <OnBoardingItem item={item} data={data} />}
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
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
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
          <Paginator data={data} scrollX={scrollX} />
          <Button
            title={currentIndex == data.length - 1 ? 'DEMARRER' : 'SUIVANT'}
            onPress={scrollTo}
          />
          {currentIndex == data.length - 1 ? null : (
            <Button
              title="SAUTER"
              onPress={() => {}}
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
