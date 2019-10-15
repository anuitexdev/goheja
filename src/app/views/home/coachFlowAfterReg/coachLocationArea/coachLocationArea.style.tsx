import { StyleSheet } from "react-native";
import window from '../../../../theme/variables';


export default StyleSheet.create({
    mapPageWrapper: {
        height: window.height - 210,
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
        height: window.height,
    },
    map: {
        position: 'relative',
        width: window.width,
        height: window.height,
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
    finalLocation: {
        position: 'absolute',
        width: window.width,
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 2,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 12,
        paddingTop: 12,
        top:0,
        left: 0,
        zIndex: 9999
    },
    finalLocationText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
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
        bottom: 0,
        height: 100,
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
    },
    nextBtn: {
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        position: 'absolute',
        zIndex: 9999,
        right: 20,
        bottom: 20
    },
    nextBtnText: {
        color: 'white'
    },
    range: {
        paddingTop: 25,
        paddingBottom: 45,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        bottom: 0,
        height: 150,
        right: 0,
        zIndex: 9999,
        width: window.width
    },
    rangeSlider: {
        height:  40,
        width: window.width - 80
    },
    sliderWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radiusText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    changeValue: {
        color: '#99A8AF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    doneBtn: {
        color: '#1373FB',
        fontWeight: 'bold'
    }
})