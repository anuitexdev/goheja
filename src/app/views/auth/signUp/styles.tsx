import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      padding: 20
    },
    title: {
        fontSize: 25,
        letterSpacing: 0,
        fontWeight: '500'
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
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        borderRadius: 2,
        width: 'auto'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonVariants: {
       paddingBottom: 30,
       borderBottomWidth: 1,
        borderColor: '#eeeff1',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    haveAccount: {
        fontSize: 16,
        marginBottom:5,
        marginTop: 30,
        textAlign: 'center'
    },
    loginButton: {
        color: '#1373fa',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
  })