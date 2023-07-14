import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors';

const Diamond = () => {
  return (
    <View style={styles.content}>
      <Image 
        source={require('../../images/diamong.png')}
        style={{width:20,height:22}}
        />
       <Text style={{color:COLORS.white,fontWeight:'bold'}}>20</Text>
       <Text style={{color:COLORS.white}}>Points</Text>
    </View>
  )
}


const styles = StyleSheet.create({
   
    content:{
        backgroundColor:COLORS.blackLight,
        paddingVertical:10,
        width:90,
        height:90,
        paddingHorizontal:15,
        flexDirection:'column',
        alignItems:'center',
        gap:4,
        borderRadius:10,

    }
});


export default Diamond