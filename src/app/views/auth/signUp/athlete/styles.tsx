import { StyleSheet, Dimensions } from "react-native";
import window from '../../../../theme/variables';

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
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
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
    nextBtnWrapper: {
        marginTop: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
    formControl: {
        position: 'relative',
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
    prompt: {
        marginLeft: 5,
        fontSize: 14,
        color: '#99a8af',
    },
    labelText: {
        fontSize: 14,
        color: '#272e43',
        fontWeight: '500',
    },
    personalFormControl:{
        marginBottom: 39
    },
    skipWrapper:{
        paddingRight: 20,
    },
    personalNextBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },



})