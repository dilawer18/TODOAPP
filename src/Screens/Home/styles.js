import { StyleSheet } from "react-native";
import { moderateScale } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    container: {
        padding: moderateScale(24),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});
export default styles