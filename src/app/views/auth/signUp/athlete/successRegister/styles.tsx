import { StyleSheet, Dimensions } from "react-native"
const window = Dimensions.get('window')

export default StyleSheet.create({
    pageWrapper: {
        backgroundColor: '#eceff1',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: window.width,
        height: window.height - 100
    },
    welcome: {
        color: '#272e43',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    approve: {
        color: '#272e43',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15
    },
    backgroundCheck: {
        backgroundColor: '#b6c0c6',
        height: 86,
        width: 86,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    check: {
        height: 32,
        width: 16,
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        borderStyle: 'solid',
        borderRightColor: 'white',
        borderRightWidth: 3,
        borderRadius: 3,
        transform: [{ rotate: '30deg'}],
        zIndex: 999
    }
})