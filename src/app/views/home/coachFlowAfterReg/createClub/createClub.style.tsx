import { StyleSheet } from "react-native";
import window from '../../../../theme/variables';


export default StyleSheet.create({
    welcomeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // textAlign: 'center'
    },
    clubNameInput: {
        marginTop: 15,
        marginLeft: 20
    },
    titleName: {
        color: '#272D43',
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputClub: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        width: window.width - 130,
        backgroundColor: 'white'
    },
    nextBtn: {
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        marginLeft: 15
    },
    nextBtnText: {
        color: 'white',
        fontSize: 16
    },
    inputWrapper: {
        flexDirection: 'row',
        marginTop: 10
    }
})