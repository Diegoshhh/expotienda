import { StyleSheet } from "react-native";
import { colors } from "../../constans/theme.js/colors";
 
export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        backgroundColor:colors.white,
    },
    cartList:{
        flex: 1,
    },
    footer:{
        borderTopColor:colors.primary,
        borderTopWidth:1,
        paddingVertical:10,
    },
    buttonConfirm:{
        backgroundColor: colors.primary,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:12,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        fontFamily:'Lato-Regular',
    },
    totalContainer:{
        flex: 0.4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        color: colors.white,
    },
    textConfirm:{
        color: colors.white,
        fontSize:16,
        fontWeight:'bold'
    },
    totalTitle:{
        fontSize:16,
        fontFamily:'Lato-Regular',
        color: colors.white,
    },
    total:{
        fontSize:16,
        fontFamily:'Lato-Black',
        color: colors.white,
    }
})