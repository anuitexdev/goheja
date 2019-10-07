import { StyleSheet } from "react-native";
import window from '../../../theme/variables';


export default StyleSheet.create({
    titles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25
    },
    createClub: {
        color: '#272D43',
        fontSize: 24,
        marginTop: 15,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    pleaseFill: {
        color: '#282E44',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
    },
    welcome: {
        color: '#99A8AF',
        fontSize: 18,
        textAlign: 'center'
    },
    clubPage: {
        backgroundColor: '#EBEFF2',
        width: window.width,
        height: window.height,
        paddingTop: 20
    },
})