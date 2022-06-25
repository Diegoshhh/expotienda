import { StyleSheet } from "react-native";
import { colors } from "../../constans/theme.js/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 110,
        backgroundColor: colors.primary,
        marginVertical: 5,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 7,
    },
    header:{
        width: '100%',
        fontSize:16,
        fontFamily:'Lato-Black',
        paddingTop:20,
        paddingLeft:20,
        color: colors.white,
    },
    containerDetail:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
    },
    detailQty:{
        fontSize:14,
        fontFamily:'Lato-Regular',
        color: colors.white
    },
    detailPrice:{
        fontSize:16,
        fontFamily:'Lato-Black',
        color: colors.white
    }
});
  