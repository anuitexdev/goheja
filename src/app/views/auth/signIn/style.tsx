import { Dimensions } from "react-native";

const React = require("react-native");
const { StyleSheet } = React;
const window = Dimensions.get('window');

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
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15
    },
    label: {
        fontSize: 14,
        color: '#272e43',
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    formField: {
        paddingBottom: 39
    },
    links: {
        borderBottomWidth: 1,
        paddingBottom: 42,
        borderColor: '#cfd8dc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    forgotPasswordLink: {
        color: '#1373fa',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    signInBtn: {
        padding: 20,
        backgroundColor: '#b6c0c6',
        borderRadius: 2,
    },
    signInText: {
        color: '#f2f8ff',
        fontSize: 16,
    },
    signUpRedirect: {
        paddingTop: 30,
        alignItems: 'center',
        fontSize: 16,
        color: '#272e43',

    },
    signUpLink: {
        fontSize: 16,
        color: '#1373fa',
        textDecorationLine: 'underline',
        paddingTop: 5
    },
    haveAccount: {
        fontSize: 16,
        color: '#272e43',
    }
});