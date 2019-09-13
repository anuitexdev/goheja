import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

export default StyleSheet.create({
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
    }


})