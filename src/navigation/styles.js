import { StyleSheet } from "react-native";
import { colors } from "../constans/theme.js/colors";

export const styles = StyleSheet.create({
    tabBar:{
        shadowColor:colors.black,
        shadowOffset: {width:0, height:10},
        shadowOpacity:0.25,
        shadowRadius:0.25,
        elevation:5,
        bottom: 5,
        left: 10,
        right: 20,
        borderRadius:15,
        height: 70,
        width: '95%',
        marginBottom:5,
    }
})