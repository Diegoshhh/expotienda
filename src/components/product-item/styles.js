import { StyleSheet } from "react-native";
import { colors } from "../../constans/theme.js/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius:10,
        margin: 20,
        height: 180,
        backgroundColor:colors.white,
    },
    containerTouchable:{
        flex: 1,
        borderRadius:10,
        backgroundColor:colors.white,
        shadowColor: colors.shadow,
        opacity: 0.26,
        shadowOffset: {width: 0, height:2},
        shadowRadius:6,
        elevation:3,
        justifyContent:'space-around',
        alignItems:'center',
        padding: 10,
    },
    name:{
        color: colors.black,
        fontFamily:'Lato-Black',
        fontSize:19,
    },
    detail:{
        fontFamily:'Lato-Regular',
        fontSize:16,
    }
})