import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputComp = ({ value = '', onchange = () => { }, placeholder = '' }) => {
    return (
        <View>

            <TextInput
                value={value}
                onChange={onchange}
                placeholder={placeholder}
            />
        </View>
    )
}

export default TextInputComp

const styles = StyleSheet.create({})