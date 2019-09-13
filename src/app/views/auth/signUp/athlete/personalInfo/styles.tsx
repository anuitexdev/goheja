import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: window.width,
        padding: 20
    },
    label: {
        marginBottom: 10,
        fontSize: 14,
        color: '#272e43',
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    pageHeader: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 25,
        color: '#2c344d',
    },
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15
    },
    formControl: {
        position: 'relative',
    },
    personalFormControl:{
        marginBottom: 39
    },
    formUnit: {
        position: 'absolute',
        right: 15,
        top: 16,
        fontSize: 12,
        color: '#a3b1b8'
    },
    labelContainer:{
        justifyContent: 'flex-start',   
        flexDirection: 'row',
        marginBottom: 10,
    },
    labelText: {
        fontSize: 14,
        color: '#272e43',
        fontWeight: '500',
    },
    skipWrapper:{
        paddingRight: 20,
    },
    personalNextBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    prompt: {
        marginLeft: 5,
        fontSize: 14,
        color: '#99a8af',
    },
    nextBtnText: {
        color: '#f2f8ff'
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
    },
})