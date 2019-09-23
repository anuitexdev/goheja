import { StyleSheet, Dimensions } from "react-native";
import window from '../../../../../theme/variables';

export default StyleSheet.create({
    container: {
        width: window.width,
        padding: 20
    },
    screenTitle: {
        color: '#272e43',
        fontSize: 25,
        paddingBottom: 20
    },
    formField: {
        paddingBottom: 39,
        position: 'relative'
    },
    label: {
        fontSize: 14,
        color: '#272e43',
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15
    },
    showPassword: {
        position: 'absolute',
        top: 42,
        right: 15,
        color: '#cfd8dc'
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#b6c0c6',
        borderRadius: 2,
    },
    nextBtnWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nextBtnText: {
        color: 'white'
    },
    // phoneContainer: {
    //     flexDirection: 'row'
    // },
    phoneSelect: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30

    }
})