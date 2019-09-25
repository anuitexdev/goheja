import { StyleSheet, Dimensions } from "react-native"
import window from '../../theme/variables';

export default StyleSheet.create({
    modalPage: {
        backgroundColor: 'white',
        height: window.height,
        width: window.width
    },
    header: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#CFD8DD'
    },
    headerTitle: {
        fontSize: 22,
        paddingLeft: 20
    },
    footer: {
        position: 'absolute',
        bottom: 50,
        right: 30
    },
    footerBtn: {
        backgroundColor: '#4D5A60',
        height: 50,
        width: 130,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontWeight: 'bold'
    }
})