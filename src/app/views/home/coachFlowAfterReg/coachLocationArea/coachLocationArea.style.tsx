import { StyleSheet } from "react-native";
import window from '../../../../theme/variables';


export default StyleSheet.create({
    mapPageWrapper: {
        height: window.height,
        position: 'relative'
    },
    title: {
        fontSize: 20,
        color: '#272D43',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 25
    },
    mapWrapper: {
        position: 'relative',
        width: window.width,
        height: 400,
    },
    map: {
        position: 'relative',
        width: window.width,
        height: 400,
        borderRadius: 10,
        zIndex: 1,
    },
    currentLocationBtn: {
        position: 'absolute',
        width: window.width - 50,
        padding: 10,
        backgroundColor: '#4D5A60',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        top:30,
        left: 20,
        zIndex: 9999
    },
    currentLocationBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
    addAddress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        bottom: 145,
        right: 0,
        zIndex: 9999,
        width: window.width
    },
    addressBtnText: {
        color: '#1574FB',
        textDecorationLine: 'underline',
        textDecorationColor: '#1574FB',
        fontSize: 18
    },
    addressBtn: {

    },
    skipBtn: {
        borderRadius: 2,
        borderColor: '#B7C0C7',
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 20,
        paddingLeft: 20
    },
    skipBtnText: {
        color: '#272E41',
        fontSize: 18
    }
})