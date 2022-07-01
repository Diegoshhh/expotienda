import { StyleSheet } from "react-native";
import { colors } from "../../constans/theme.js/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius:10,
        margin: 10,
        height: 180,
    },
    containerTouchable:{
        flex: 1,
        borderRadius:10,
        shadowColor: colors.shadow,
        opacity: 0.96,
        shadowOffset: {width: 0, height:2},
        shadowRadius:6,
        elevation:3,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
    },
    title:{
        color: colors.white,
        fontFamily:'Lato-Black',
        fontSize:36,
        opacity: 1,
    }
})