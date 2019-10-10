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
    title: {
        fontSize: 35,
        color: '#272e43',
        fontWeight: 'bold',
        textAlign: 'center',
        width: window.width,
        marginTop: 80,
    },
    subtitle: {
        color: '#272e43',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 30
    },
    achieveBtns: {
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        marginBottom: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    achieveTextBtn: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})