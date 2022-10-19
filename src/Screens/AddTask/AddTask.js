import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import ImagePath from '../../constants/ImagePath';
import styles from './styles';


const AddTask = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
           <HeaderComp txt='ADD TASK'/>
           <ButtonComp
           btnText='DONE'
           onPress={()=>navigation.goBack()} 
           btnImage={ImagePath.icAdd}
          />
        </SafeAreaView>
    );
};

export default AddTask;
