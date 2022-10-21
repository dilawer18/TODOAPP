import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    container: {
        padding: moderateScale(24),
        // marginHorizontal:24,
        // marginVertical:24,
        flex: 1,
        backgroundColor: 'white'
    },
    homebtnStyle:{
        position:'absolute',
        bottom:moderateScale(10),
        right:moderateScale(10),
        height:48,
        width:48,
        borderRadius:24,
        backgroundColor:colorPath.gray
    }
});
export default styles