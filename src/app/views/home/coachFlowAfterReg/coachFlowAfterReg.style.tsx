import { StyleSheet } from "react-native";
import window from '../../../theme/variables';


export default StyleSheet.create({
    titles: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    createClub: {
        color: '#272D43',
        fontSize: 16,
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
        fontSize: 18
    },
    clubPage: {
        backgroundColor: '#EBEFF2',
        width: window.width,
        height: window.height
    },
})