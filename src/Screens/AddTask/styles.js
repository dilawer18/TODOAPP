import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale, width } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        marginHorizontal:24,
        marginVertical:24,
        justifyContent: 'center',
        marginTop: 48
    },
    buttonStyle: {
        // backgroundColor: colorPath.gray,
        height: 60,
        width: 60,
    },
    homebtnstyle: {
        marginTop: 10,
        height: 48,
        width: '80%',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: "center",
        backgroundColor:colorPath.gray
    },
    textInputContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
        marginTop:20
    }
});
export default styles