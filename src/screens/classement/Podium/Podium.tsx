/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/colors';
// import {LinearGradient} from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

import {Cards as CardSomain} from '../Cards';

const Podium = () => {
  return (
    <ScrollView style={styles.Podiom}>
      <View style={styles.CardPrimary}>
        <View
          style={[
            styles.one,
            {flex: 1, backgroundColor: COLORS.bgClassement, height: '60%'},
          ]}>
          <View style={styles.before1} />
          <Text style={{fontSize: 35, fontWeight: 'bold', color: COLORS.white}}>
            2
          </Text>
          <View style={[styles.Avatar, {top: -110}]}>
            <Image
              source={require('../../../images/luffy.jpeg')}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
            <Text style={{color: '#fff', letterSpacing: -1}}>
              Alena Vaccaro
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={['#B1EB73', '#7DB343']}
          style={styles.one}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            >
          <View
            style={{
              width: '100%',
              height: '50%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.before2} />
            <View style={styles.before22} />
            <Text
              style={{fontSize: 35, fontWeight: 'bold', color: COLORS.white}}>
              1
            </Text>
            <View style={[styles.Avatar, {top: -150}]}>
              <Image
                source={require('../../../images/luffy.jpeg')}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
              <Text style={{color: '#fff', letterSpacing: -1}}>
                Alena Vaccaro
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={[
            styles.one,
            {flex: 1, backgroundColor: COLORS.bgClassement, height: '45%'},
          ]}>
          <View style={styles.before3} />
          <View style={styles.before33} />
          <Text style={{fontSize: 35, fontWeight: 'bold', color: COLORS.white}}>
            3
          </Text>
          <View style={[styles.Avatar, {top: -110}]}>
            <Image
              source={require('../../../images/luffy.jpeg')}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
            <Text style={{color: '#fff', letterSpacing: -1}}>
              Alena Vaccaro
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={[styles.Score, {}]}>
          <View>
            <Text style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image
                source={require('../../../images/diamong.png')}
                style={{width: 6, height: 10, marginHorizontal: 5}}
              />
              <Text
                style={{fontSize: 10, fontWeight: '600', color: COLORS.white}}>
                {' '}
                22{' '}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  color: COLORS.white,
                }}>
                {' '}
                points{' '}
              </Text>
            </Text>
          </View>
          <Text style={{color: COLORS.white, fontWeight: '600'}}>00:07:20</Text>
        </View>
        <View style={[styles.Score, {}]}>
          <View>
            <Text style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image
                source={require('../../../images/diamong.png')}
                style={{width: 6, height: 10, marginHorizontal: 5}}
              />
              <Text
                style={{fontSize: 10, fontWeight: '600', color: COLORS.white}}>
                {' '}
                22{' '}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  color: COLORS.white,
                }}>
                {' '}
                points{' '}
              </Text>
            </Text>
          </View>
          <Text style={{color: COLORS.white, fontWeight: '600'}}>00:07:20</Text>
        </View>
        <View style={[styles.Score, {}]}>
          <View>
            <Text style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image
                source={require('../../../images/diamong.png')}
                style={{width: 6, height: 10, marginHorizontal: 5}}
              />
              <Text
                style={{fontSize: 10, fontWeight: '600', color: COLORS.white}}>
                {' '}
                22{' '}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  color: COLORS.white,
                }}>
                {' '}
                points{' '}
              </Text>
            </Text>
          </View>
          <Text style={{color: COLORS.white, fontWeight: '600'}}>00:07:20</Text>
        </View>
      </View>
      <CardSomain />
      <CardSomain />
      <CardSomain />
      <CardSomain />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Podiom: {
    flex: 1,
    //height 100%,
  },
  CardPrimary: {
    flexDirection: 'row',
    height: 200,
    marginTop: 70,
    alignItems: 'flex-end',
  },
  one: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 4,
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  before1: {
    position: 'absolute',
    left: 18,
    top: -20,
    transform: [{skewX: '-60deg'}],
    width: '100%',
    height: 20,
    backgroundColor: COLORS.bgTopClassement,
  },
  before2: {
    position: 'absolute',
    left: 10,
    top: -55,
    transform: [{skewX: '-60deg'}],
    width: '50%',
    height: 15,
    backgroundColor: COLORS.bgTopClassement,
  },
  before22: {
    position: 'absolute',
    right: 11,
    top: -55,
    transform: [{skewX: '60deg'}],
    width: '50%',
    height: 15,
    backgroundColor: COLORS.bgTopClassement,
  },
  before3: {
    position: 'absolute',
    left: 0,
    top: -20,
    zIndex: -5,
    transform: [{skewX: '0deg'}],
    width: '50%',
    height: 20,
    backgroundColor: COLORS.bgTopClassement,
  },
  before33: {
    position: 'absolute',
    right: 10,
    top: -20,
    zIndex: -5,
    transform: [{skewX: '45deg'}],
    width: '50%',
    height: 20,
    backgroundColor: COLORS.bgTopClassement,
  },
  Avatar: {
    position: 'absolute',

    left: 0,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
  },
  Score: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
});

export default Podium;
