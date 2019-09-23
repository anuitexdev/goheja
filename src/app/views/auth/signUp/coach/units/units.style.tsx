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
    nextBtn: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    unitBtn:{
        backgroundColor: '#eceff1',
        // borderRadius: 1000,
        // paddingTop: 34,
        // paddingRight: 38,
        // paddingLeft: 39,
        // paddingBottom: 33
        height: 138,
        width:138,
        borderRadius: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeUnitBtn: {
        backgroundColor: '#4d5a5f',
         // borderRadius: 1000,
        // paddingTop: 34,
        // paddingRight: 38,
        // paddingLeft: 39,
        // paddingBottom: 33
        height: 138,
        width:138,
        borderRadius: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    unitBtnTopText:{
        color: '#384564',
    },
    activeUnitBtnTopText:{
        color: '#fff',
    },
    unitBtnBottomText:{
        color: '#384564',
        fontWeight: 'bold',
        fontSize: 40
    },
    activeUnitBtnBottomText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    nextBtnDisabled: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        backgroundColor: '#cfd8dc',
        borderRadius: 2,
    },
})