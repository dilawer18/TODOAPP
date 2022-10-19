import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HeaderComp = ({
    txt
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{txt}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textStyle:{
        fontSize:28,
        fontWeight:'bold'
    }
});
export default HeaderComp;
