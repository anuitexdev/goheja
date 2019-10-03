import { StyleSheet } from "react-native";
import window from '../../../theme/variables';
import { whileStatement } from "@babel/types";

export default StyleSheet.create({
    modalWrapper: {
        backgroundColor:'white',
        height: window.height -250,
        width: window.width,
        zIndex: 9999,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position:'relative',
        padding: 25
    },
    backDrop: {
        flex: 1, 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    close: {
        color: '#88959C',
        position: 'absolute',
        top: 10,
        right: 10
    },
    title: {
        color: '#282E44',
        fontSize: 20,
        marginBottom: 20
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
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15
    },
    arrowDropDown: {
        position: 'absolute',
        right: 7,
        color: '#757575'
    },
    selectCountry: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15,
        height: 50,
        justifyContent: 'center'
    },
    locateBtn: {
        backgroundColor: '#B7C0C7',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12
    },
    locateBtnActive: {
        backgroundColor: '#272e43',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12
    },
    locateBtnText: {
        color: 'white',
        fontSize: 16
    },
    locateBtnWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})