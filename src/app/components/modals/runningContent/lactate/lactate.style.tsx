import { StyleSheet } from "react-native";
import window from '../../../../theme/variables';

export default StyleSheet.create({
    backDrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(42, 50, 54, 0.3)'
    },
    showBtn: {
        zIndex: 9999,
        position: 'absolute',
        top:30,
        left: 10,
        color: 'white'
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#cdd4d7',
        borderRadius: 2,
        marginRight: 10,
        height: 50,
        width: 30,
        fontSize: 35,
        textAlign: 'center',
        padding: 0
    },
    focusInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#1373fa',
        borderRadius: 2,
        textAlign: 'center',
        height:50,
        width:30,
        marginRight: 10,
        fontSize: 35,
        padding: 0
    },
    modalPage: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: window.width + 250,
        height: window.height - 60,
        zIndex: 1,
        borderRadius: 4000
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
    backBtn: {
        color: '#1373fa',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 26,
        marginBottom: 50
    },
})