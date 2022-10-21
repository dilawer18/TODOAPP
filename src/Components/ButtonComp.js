import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colorPath from '../constants/colorPath';
import { moderateScale } from '../styles/responsiveSize';
const ButtonComp = (
    {
        btnText = '',
        onPress = () => {},
        btnImage,
        btnStyle,
        img,
        text
    }
) => {
    return (
        <TouchableOpacity
            style={{ ...style.container, ...btnStyle }}
            onPress={onPress}
        >
            <Text>{btnText}</Text>
            {img ? <Image style={style.ImgStyle} source={btnImage} /> :
                <Text style={style.textStyle}>{text}</Text>}
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    ImgStyle: {
        height: 50,
        // alignSelf: "center",
        width: 50,
    },
    textStyle:{
      marginBottom: -10
    // justifyContent:'center'
    
    }
})
export default ButtonComp;




















// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';

// const ButtonComp = ({
//     btnText = '',
//     btnStyle = {},
//     btnTextStyle = {},
//     onPress = () => {},
//     img,
//     btnImage,
// }) => {


//     return (
//         <TouchableOpacity style={{...styles.btn,...btnStyle}}
//         onPress={onPress}
//             >
//             {img ? <Image style={styles.ImgStyle} source={btnImage} /> :
//             <Text style={styles.textStyle}>{btnText}</Text>}
//         </TouchableOpacity>
//     )
// }


// const styles = StyleSheet.create({
//     click: {
//         color: 'white'
//       },
//       btn:
//       {
//         backgroundColor: 'blue',
//         height: 48,
//         marginTop:20,
//         borderRadius:30,
    
//         width: '100%', 
//         alignItems: "center", 
//         justifyContent: 'center', 
//         marginBottom: 24
//       }
// })


// export default ButtonComp
