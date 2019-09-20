
import { StyleSheet, Dimensions } from "react-native"
import window from '../../../../../theme/variables';

export default StyleSheet.create({
    pageWrapper: {
        backgroundColor: '#eceff1',
        padding: 35,
        height: window.height - 100
    },
    skipWrapper:{
        paddingRight: 20,
    },
    personalNextBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    nextBtnText: {
        color: '#f2f8ff'
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
        fontFamily: 'Roboto-Regular'
    },
    title: {
        fontSize: 25,
        color: '#272e43',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#272e43',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontFamily: 'Roboto-Regular'
    },
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        marginBottom: 20,
        fontSize: 30,
        fontFamily: 'Roboto-Regular'
    },
})