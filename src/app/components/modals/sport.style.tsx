import { StyleSheet } from "react-native";
import window from '../../theme/variables';

export default StyleSheet.create({
    modalPage: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: window.width + 250,
        height: window.height - 60,
        zIndex: 1,
        borderRadius: 4000
    },
    showBtn: {
        zIndex: 9999,
        position: 'absolute',
        top:30,
        left: 10,
        color: 'white'
    },
    closeIcon: {
        color: 'white'
    },
    backBtn: {
        color: '#1373fa',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 26,
        marginBottom: 50
    },
    title: {
        fontSize: 35,
        color: '#272e43',
        fontWeight: 'bold',
        textAlign: 'center',
        width: window.width
        // marginLeft: 139,
        // marginRight: 139
    },
    subtitle: {
        color: '#272e43',
        fontSize: 16,
        marginTop:20
    },
    nextBtn: {
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
    },
    footerBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: window.width

    },
    nextBtnText: {
        color: 'white'
    },
    skipBtn: {
        color: '#1373fa',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    fullComponent: {
        paddingTop: 30,
        paddingBottom: 30,
        flexDirection: 'row'
    },
    infoInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#cdd4d7',
        borderRadius: 2,
        marginRight: 10,
        fontSize: 35,
        textAlign: 'center'
    },
    focusInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#1373fa',
        borderRadius: 2,
        textAlign: 'center',
        marginRight: 10,
        fontSize: 35
    }
})