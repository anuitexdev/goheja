import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

export default StyleSheet.create({
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    unitBtn:{
        backgroundColor: '#eceff1',

        borderRadius: 1000,
        paddingTop: 34,
        paddingRight: 38,
        paddingLeft: 39,
        paddingBottom: 33
    },
    activeUnitBtn: {
        backgroundColor: '#4d5a5f',
        borderRadius: 1000,
        paddingTop: 34,
        paddingRight: 38,
        paddingLeft: 39,
        paddingBottom: 33
    },
    unitBtnTopText:{
        color: '#384564',
    },
    activeUnitBtnTopText:{
        color: '#fff',
    },
    unitBtnBottomText:{
        color: '#384564',
        fontWeight: '900'
    },
    activeUnitBtnBottomText:{
        color: '#fff',
        fontWeight: '900'
    }


})