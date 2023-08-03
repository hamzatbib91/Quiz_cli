import {View, Text, Image} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';
import { useAuthentication as UseAuthentication  } from '../../hooks/useAuthentication';
import { ActivityIndicator } from 'react-native';

const AvatarGamer = () => {
 const {users : user,loding} =  UseAuthentication();
  return (
    <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
      { !loding && user.photoURL ? <Image source={{uri: user.photoURL}}
      style={{width: 60, height: 60, borderRadius: 50}}/> :
      loding ? <View  style={{width: 60, height: 60, borderRadius: 50}}>
      <ActivityIndicator size="large" color={COLORS.darkBlue} />
    </View> : 
      <Image
        source={require('../../images/luffy.jpeg')}
        style={{width: 60, height: 60, borderRadius: 50}}/>
    }
    
      
      <View style={{flexDirection: 'column', gap: 3}}>
        <Text style={{color: COLORS.white, fontSize: 18}}>
          Bienvenu,
          <Text style={{fontWeight: 'bold'}}>Robert</Text>
        </Text>
        <Text style={{fontWeight: 'bold', color: COLORS.YellowText}}>
          Niveau 1
          <Text style={{fontWeight: 'normal', color: COLORS.white}}>
            {' '}
            ( 80% )
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AvatarGamer;
