import { StyleSheet, Dimensions } from "react-native";
import window from '../../../../../theme/variables';


export default StyleSheet.create({
    container: {
        width: window.width,
        padding: 20
    },
    pageHeader: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 25,
        color: '#2c344d',
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
    },
    email: {
        paddingTop: 8,
        paddingBottom: 20,
        color: '#4d5a5f',
    },
    check: {
        paddingBottom: 20,
    },
    links:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sendText: {
        color: '#fff',
    }


})