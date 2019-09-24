import { StyleSheet, Dimensions } from "react-native";
import window from '../../../../../theme/variables';

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
    nextBtnWrapper: {
        marginTop: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nextBtnText: {
        color: '#f2f8ff'
    },
    nextBtnDisabled: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#cfd8dc',
        borderRadius: 2,
    },
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
    },
    input: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        paddingLeft: 15
    },
    inputError: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15
    },
    label: {
        marginBottom: 10,
        fontSize: 14,
        color: '#272e43',
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    errorText: {
        color: 'red',
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
        alignItems: 'center',
    },
    prompt: {
        marginLeft: 5,
        fontSize: 14,
        color: '#99a8af',
    },
    optionalContainer: {
        paddingTop: 30,
    },
    optionalTitle: {
        paddingBottom: 10,
        fontWeight: '500',
    },
    optionalSubtitle: {
        paddingBottom: 20
    },
    genderTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
    },
    genderCheckBox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 3,
    },
    genderCheckBoxError: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: 'red',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 3,
    },
    genderCheckBoxField: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    checkIcon: {
        height: 10,
        width: 6,
        borderBottomWidth: 2.5,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        borderRightColor: '#000',
        borderRightWidth: 2.5,
        transform: [{ rotate: '45deg' }],
        zIndex: 999,
    }

})