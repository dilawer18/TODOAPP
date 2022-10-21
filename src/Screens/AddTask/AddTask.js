import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputComp from '../../Components/TextInputComp';
import ImagePath from '../../constants/ImagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import styles from './styles';

const AddTask = ({ navigation, route }) => {

    let prevData = route?.params.data
    console.log(prevData, "routs")


    const [todo, setToDo] = useState([{
        title: '',
        desc: ''
    }])



    const onSave = () => {
        let currentData = [{ title: todo.title, desc: todo.desc }]
        let mergedData = [...currentData, ...prevData]
        navigation.navigate(NavigationStrings.HOME, {mergedData})

    }

    return (
        <SafeAreaView style={styles.container}>

            <HeaderComp
                navigation={navigation}
                imgaeUri={ImagePath.icBack}
                txt='ADD TASK'
            />
            <View style={styles.textInputContainer}>
                <TextInputComp
                    placeholder='Enter Movie Title'
                    onChangeText={(title) => {
                        setToDo({ ...todo, title: title })
                        console.log(title, ">>>>>>>title")
                    }}
                    value={todo.title}
                />
                <TextInputComp
                    placeholder='Enter Discription'
                    onChangeText={(desc) => {
                        setToDo({ ...todo, desc: desc })
                        console.log(desc, ">>>>>>>desc")
                    }}
                    value={todo.desc}
                    TextInputStyle={{ height: 140 }}
                />
            </View>
            <View style={{ flex: 1, marginTop: 300 }}>
                <ButtonComp
                    btnText='Save'
                    onPress={onSave}
                    btnStyle={styles.homebtnstyle}
                />
            </View>
        </SafeAreaView>

    );
};


export default AddTask;
