import React from 'react'
import { Text, View, StyleSheet, Image, useWindowDimensions } from 'react-native'
import COLORS from '../constants/colors'


const OnBoardingItem = ({ item }: any) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image
                style={[styles.image, { width, resizeMode: 'contain' }]}
                source={item.image}
            />
            <View style={styles.info}>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.text}>{item.content}</Text>
            </View>
            {/* <Paginator data={data} scrollX={scrollX} /> */}
        </View>
    );
}
export default OnBoardingItem

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '50%',
    },
    image: {
        width: 300,
        height: 230,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.GreenButton
    },
    text: {
        fontSize: 15,
        color: COLORS.greyText,
        textAlign: 'center',
        marginTop: 20,
    },
    info: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 15,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    }
});

