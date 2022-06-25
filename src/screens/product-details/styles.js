import { Dimensions, StyleSheet } from "react-native";


const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    details:{
        height: height / 2,
        alignItems:'center',
        justifyContent: 'space-between',

    },
    text:{
        fontSize:20
    }
});
  