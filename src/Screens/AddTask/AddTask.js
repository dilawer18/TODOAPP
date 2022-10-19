import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import TextInputComp from '../../Components/TextInputComp';
import styles from './styles';
const AddTask = ({ navigation }) => {
    const [text, setText] = useState('')
    const onchange = (value) => {
        setText(value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp txt='ADD TASK' />
            <TextInputComp
                title='enter MOVIE'
                placeholder='Enter Movie Title'
                onchange={onchange}
                value={text}
            />

            <TextInputComp
                title='value'
                placeholder='Enter Discription'
                onchange={onchange}
                value={text}
            />
        </SafeAreaView>
    );
};

export default AddTask;
