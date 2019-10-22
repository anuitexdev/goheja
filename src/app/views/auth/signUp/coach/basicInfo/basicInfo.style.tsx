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
        paddingLeft: 15,
        color: '#282E44',
        paddingVertical: 0,
        height: 50,
    },
    phoneInput: { 
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        color: '#282E44',
        paddingVertical: 0,
        height: 50,
        flexDirection: "row",
        alignItems: "center"
    },
    inputHeb: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        color: '#282E44',
        textAlign: 'right',
        paddingVertical: 0,
        height: 50,
    },
    inputError: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
        paddingVertical: 0,
        height: 50,
    },
    inputErrorHeb: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
        textAlign: 'right',
        paddingVertical: 0,
        height: 50,
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
    nextBtnActive: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#272e43',
        borderRadius: 2,
    },
    nextBtnWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nextBtnText: {
        color: 'white'
    },
    phoneSelect: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        width: 100,
        height: 50,
        justifyContent: 'center',
        position: 'relative'
    },
    phoneSelectError: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 50,
        justifyContent: 'center',
        position: 'relative'
    },
    arrowDropDown: {
        position: 'absolute',
        right: 7,
        color: '#757575'
    },
    hebInput: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        textAlign: 'right',
        paddingRight: 50,

    },
    hebInputDefault: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        textAlign: 'right',
        paddingVertical: 0,
        height: 50,

    },
    inputHebError: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
        textAlign: 'right',
        paddingRight: 50,
    },
    inputHebErrorDefault: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
        textAlign: 'right',
        paddingVertical: 0,
        height: 50,
    },
    errorText: {
        color: 'red',
    }
})