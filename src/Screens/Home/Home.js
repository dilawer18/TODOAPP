//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import ImagePath from '../../constants/ImagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import styles from './styles'

const Home = ({ navigation, routes }) => {
    const onClick = () => {
        navigation.navigate(NavigationStrings.ADD_TASK)
    }
    return (
        <>
            <View style={styles.container}>
                <HeaderComp txt='HOME'></HeaderComp>

                <ButtonComp
                    onPress={onClick}
                    btnText='Add Task'
                    btnImage={ImagePath.icAdd} />

            </View>
        </>
    );
};

export default Home;
