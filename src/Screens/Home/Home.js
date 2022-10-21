//import liraries
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import ImagePath from '../../constants/ImagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import styles from './styles';

const Home = ({ navigation, route }) => {
    const [data, setData] = useState([])
    console.log(data, 'data.......')
    const fetchData = () => {
        const paramData = route?.params
        if (!!paramData) {
            setData(paramData.mergedData)
        }
        console.log(paramData, "pramdataa>>>>>")

    }


    useEffect(() => {
        fetchData();
    }, [route?.params])

    const renderItem = ({ item, index }) => {
        console.log('items', item)
        return (

            <View style={{ flex:1, marginTop: 14, borderRadius: 10, borderColor: "#00FFFF", borderWidth: 1, padding: 8 }}>
                <Text style={{ color: "#00FFFF", marginTop: 4 }}>
                    Title:{item?.title}
                </Text>
                <Text style={{ color: "#00FFFF", marginTop: 22 }}>
                    Description:{item?.desc}
                </Text>
            </View>



        )
    }
    const emptyList = () => {
        return (
            <View style={{ flex: 1, marginTop: 80 }}>
                <Text style={{ fontSize: 18, textAlign: 'center', color: "#00FFFF" }}>no! data here</Text>
            </View>
        )
    }
    const onClick = () => {
        navigation.navigate(NavigationStrings.ADD_TASK, { data: data })
    }
    return (
        <>
            <View style={styles.container}>
                <HeaderComp
                    txt='HOME' />
                <View style={{ borderWidth: 1, borderColor: 'black' }} />
                <FlatList 
                showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    ListEmptyComponent={emptyList}
                />
                <ButtonComp
                    onPress={onClick}
                    btnImage={ImagePath.icAdd}
                    btnStyle={styles.homebtnStyle}
                    img={ImagePath.icAdd} />
            </View>
        </>
    );
};
export default Home;
