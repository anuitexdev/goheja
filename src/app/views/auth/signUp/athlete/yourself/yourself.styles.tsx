import { StyleSheet, Dimensions } from "react-native";
import window from '../../../../../theme/variables';

export default StyleSheet.create({
    container: {
        width: window.width,
        padding: 20
    },
    pageHeader: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 25,
        color: '#2c344d',
    },
    nextBtnWrapper: {
        marginTop: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nextBtnText: {
        color: '#f2f8ff'
    },
    nextBtnDisabled: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#cfd8dc',
        borderRadius: 2,
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
    },
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
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
    label: {
        marginBottom: 10,
        fontSize: 14,
        color: '#272e43',
        //fontFamily: 'Roboto',
        fontWeight: '500',
    },
    datePicker: {
        position: 'relative'
    },
    dateIcon: {
        position: 'absolute',
        right: 15,
        top: 14,
    },
    genderField: {
        marginTop: 39
    },
    hebInput: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        textAlign: 'right',
        paddingRight: 50,

    },
    inputHebError: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
        textAlign: 'right',
        paddingRight: 50,
    },
    errorText: {
        color: 'red',
    }
 
})