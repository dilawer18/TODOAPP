import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ImagePath from '../constants/ImagePath';
import { moderateScale } from '../styles/responsiveSize';
import ButtonComp from './ButtonComp';
const HeaderComp = ({
    navigation,
    txt,
    imgaeUri,
}) => {
    return (
        <View style={styles.container}>
            <ButtonComp />
            <View/>
            <Text style={styles.textStyle}>{txt}</Text>
            <View/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:moderateScale(24),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:28,
        fontWeight:'bold',

        
    }
});
export default HeaderComp;
