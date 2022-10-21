//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colorPath from '../constants/colorPath';
const TextInputComp = ({
    value = {},
    onChangeText = {},
    placeholder = {},
    TextInputStyle,
    placeholderTextColor,
    keyBoardType,
}) => {
    return (
        <TextInput
            style={{ ...styles.TextStyle, ...TextInputStyle }}
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
            multiline={true}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyBoardType}
        />

    );
};
export default TextInputComp;
const styles = StyleSheet.create({
    TextStyle: {
        backgroundColor: colorPath.gray,
        borderRadius: 20,
        paddingHorizontal: 8,
        marginTop: 20,
        height: 40,

    }
})
