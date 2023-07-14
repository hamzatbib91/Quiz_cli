import React from 'react'
import {View,Text,StyleSheet,useWindowDimensions,Animated} from 'react-native'
import COLORS from '../constants/colors';



interface PaginatorProps {
    data: Array<object>;
    scrollX: Animated.Value;
}


const  Paginator:React.FC<PaginatorProps>=({data,scrollX})=>{
    const [counter,setCounter]=React.useState<Number>(0)
    const {width}=useWindowDimensions()
    return (
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start',height:20,width:'100%'}}>
            {data.map((_,i)=>{
                const inputRange=[(i-1)*width,i*width,(i+1)*width]
                const dotWidth=scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',
                })

                const opacity=scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3],
                    extrapolate:'clamp',
                })


                return <Animated.View style={[styles.dot,{width:dotWidth,opacity}]} key={i}/>})
            }
        </View>
    )
}


const styles=StyleSheet.create({
    dot:{
        height:10,
        borderRadius:5,
        zIndex:1,
        backgroundColor:COLORS.GreenText,
        
        marginHorizontal:8,
    }
    //check this out 
    
})

export default Paginator