import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {MotiView} from '@motify/components';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
// import {Easing} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const _size = 150;

const Motion = ({index}:{index:any}) => {
  return (
    <MotiView
      key={index}
      from={{opacity: 0.5, scale: 1, borderWidth: 2, borderColor: COLORS.white}}
      animate={{opacity: 0, scale: 1.5}}
      transition={{
        type: 'timing',
        duration: 2000,
        repeat: Infinity,
        // easing: Easing.out(Easing.ease),
        delay: index * 1000,
        loop: true,
        repeatReverse: false,
      }}
      style={[StyleSheet.absoluteFillObject, styles.dot]}
    />
  );
};
const Body = () => {
  const [pause, setPause] = React.useState(true);
  const handleClick = () => {
    setPause(!pause);
  };

  return (
    <View
      style={{
        flex: 8,
        flexDirection: 'column',
        marginTop: 40,
        gap: 40,
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            //width:_size,
            //height:120,
            position: 'relative',
          },
        ]}>
        {[...Array(3).keys()].map(index => {
          return <Motion index={index} />;
        })}
        <View
          style={{
            position: 'absolute',
            width: _size,
            height: _size,
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            backgroundColor: COLORS.GreenTextLight,
            borderRadius: _size / 2,
          }}
        />
        <TouchableOpacity onPress={handleClick}>
          <Image
            source={
              pause
                ? require('../.././images/pause.png')
                : require('../../images/start.png')
            }
            style={{
              width: _size,
              height: _size,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 20,
          width: '100%',
        }}>
        <Text style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image
            source={require('../../images/diamong.png')}
            style={{width: 12, height: 15, marginHorizontal: 5}}
          />
          <Text style={{fontSize: 10, fontWeight: '600', color: COLORS.white}}>
            22{' '}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '300', color: COLORS.white}}>
            points
          </Text>
        </Text>
        <Button
          title="QUITTER"
          width="85%"
          bgColor={COLORS.white}
          borderColor={COLORS.GreenButton}
          border={2}
          color={COLORS.GreenText}
        />
      </View>
    </View>
  );
};

const styles = {
  copie: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
  },
};

export {Body};
