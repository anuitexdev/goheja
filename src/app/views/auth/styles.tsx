import { StyleSheet, Dimensions } from "react-native";
import window from '../../theme/variables';


export default StyleSheet.create({
    container: {
        width: window.width,
        padding: 20, 
        // zIndex: -1,
    },
    title: {
        fontSize: 25,
        letterSpacing: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    subTitle: {
        fontSize: 16,
        letterSpacing: 0,
        paddingBottom: 20,
        paddingTop: 10
    },
    welcomeButtons: {
        borderWidth: 1,
        backgroundColor: '#4d5a5f',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        borderRadius: 2,
        width: window.width - 40
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonVariants: {
       paddingBottom: 30,
    },
    accountContainer: {
        backgroundColor: '#EBEFF2',
        width: window.width - 40,
        padding: 20,
        borderRadius: 10,
        marginTop: 50
    },
    haveAccount: {
        fontSize: 20,
        marginBottom:5,
        textAlign: 'center',
        fontWeight: '700',
        color: '#99A8AF'
    },
    loginButton: {
        color: '#1373fa',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
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
        paddingLeft: 15,
        paddingVertical: 0,
        height: 50,
    },
    hebInput: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        textAlign: 'right',
        paddingRight: 50,
        paddingVertical: 0,
        height: 50,

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
    label: {
        fontSize: 14,
        color: '#272e43',
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    formField: {
        paddingBottom: 39,
        position: 'relative'
    },
    links: {
        borderBottomWidth: 1,
        paddingBottom: 42,
        borderColor: '#cfd8dc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    forgotPasswordLink: {
        color: '#1373fa',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    signInBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
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
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
    },
    nextBtnDisabled: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#cfd8dc',
        borderRadius: 2,
    },
    nextBtnWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nextBtnText: {
        color: 'white'
    },
    showPassword: {
        position: 'absolute',
        top: 42,
        right: 15,
        color: '#cfd8dc'
    },
    signInErrors: {
        backgroundColor: '#FFEFEF',
        textAlign: 'center',
        paddingBottom: 8,
        paddingTop: 8,
        marginBottom: 19,
        borderRadius: 2
    },
    textErrors: {
        color: '#ff6464',
        opacity: 1,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    inputError: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
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
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    fbContainer: {
        paddingTop: 20,
        alignItems: 'center',
    },
    footer: {

    }
  })