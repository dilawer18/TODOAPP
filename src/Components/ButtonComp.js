import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image } from 'react-native';
const ButtonComp = (
    {
        btnText='',
        onPress=()=>{},
        btnImage
    }
) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress}>
        {/* <Text>{btnText}</Text> */}
        <Image style={style.ImgStyle} source={btnImage}></Image>
    </TouchableOpacity>
    );
};
const style= StyleSheet.create({
    container:{
        backgroundColor:'#7FFFD4',
        marginLeft:250,
        height:60,
        width:60,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:40
    },
    ImgStyle:{
        height:50,
        width:50
    }
})
export default ButtonComp;
