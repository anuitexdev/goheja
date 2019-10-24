import { StyleSheet, Dimensions } from "react-native";
import window from '../../../../theme/variables';


export default StyleSheet.create({

    title: {
        fontSize: 25,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 16,
        letterSpacing: 0,
        paddingBottom: 20,
        paddingTop: 10
    },
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        color: '#282E44',
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
        fontSize: 14,
        color: '#272e43',
        paddingBottom: 10,
        fontWeight: 'bold'
    },

    links: {
        paddingTop: 18,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    resetPasswordBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#b6c0c6',
        borderRadius: 2,
    },
    resetPasswordText: {
        color: '#f2f8ff',
        fontSize: 16,
    },
    loginLink: {
        fontSize: 16,
        color: '#1373fa',
        textDecorationLine: 'underline',
        paddingTop: 5
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,

    },
    nextBtnText: {
        color: '#fff'
    },
    formField: {
        paddingBottom: 39,
        position: 'relative'
    },
    form: {
        paddingTop: 20,
    },
    disabledBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#b6c0c6',
        borderRadius: 2,
    },
    errorText: {
        color: 'red',
        marginTop: -39
    }
})