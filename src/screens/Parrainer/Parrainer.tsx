import { View, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import COLORS from '../../constants/colors'
import { Header as HeaderParrier } from './Header'
import { Body as BodyParrier } from './Body'
import { AppContext } from '../../hooks/useContext'

const Parrainer = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { parier, setParier } = useContext<any>(AppContext);
   
    return (
        <View style={styles.parrier}>
            <HeaderParrier />
            <BodyParrier />
        </View>
    )
}
const styles = StyleSheet.create({
    parrier: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        paddingVertical: 40,
        paddingHorizontal: 25,

        backgroundColor: COLORS.GreenMedium,
    }
})
export default Parrainer