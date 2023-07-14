import { View, Text,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import COLORS from '../../constants/colors'
import {Header as HeaderParrier} from './Header'
import {Body as BodyParrier} from './Body'
import { AppContext } from '../../hooks/useContext'

const Parrainer = () => {
    const {parier,setParier}=useContext(AppContext)
    const handleCancel=()=>{
        setParier(false)

    }
  return (
    <View style={styles.parrier}>
        <HeaderParrier onPress={handleCancel} />
        <BodyParrier/>
    </View>
  )
}
const styles = StyleSheet.create({
    parrier:{
        flex:1,
        height:'100%',
        flexDirection:'column',
        paddingVertical:40,
        paddingHorizontal:25,
        
        backgroundColor:COLORS.GreenMedium,
    }
})
export default Parrainer