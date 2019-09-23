import { StyleSheet, Dimensions } from "react-native";
import window from '../../../theme/variables';


export default StyleSheet.create({
    container: {
        width: window.width,
        padding: 20,

    },
    title: {
        fontSize: 25,
        fontWeight: '500',


    },
    subTitle: {
        fontSize: 16,
        letterSpacing: 0,
        paddingBottom: 20,
        paddingTop: 10
    },
    content:{
        paddingTop: 30
    }

  })