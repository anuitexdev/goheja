import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

export default StyleSheet.create({
    // steps: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     marginBottom: 30,
    //     marginTop: 10,
    //     marginLeft:20,
    //     marginRight: 20
    // },
    // step: {
    //     borderRadius: 1000,
    //     height: 24,
    //     width:24,
    //     borderColor: '#b6c0c6',
    //     borderWidth: 1.5,
    //     borderStyle: 'solid',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     zIndex: 99,
    //     backgroundColor: 'white'
    // },
    // stepsLine: {
    //     height: 2,
    //     width: window.width - 134,
    //     backgroundColor: '#b6c0c6',
    //     position: 'absolute',
    //     top: 10,
    //     right: 50
    // },
    // text: {
    //     color: '#414a4f',
    // },
    // activeStep: {
    //     borderRadius: 1000,
    //     height: 24,
    //     width:24,
    //     borderColor: '#414a4f',
    //     borderWidth: 1.5,
    //     borderStyle: 'solid',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     zIndex: 99,
    //     backgroundColor: 'white'
    // },
    // completeStep: {
    //     borderRadius: 1000,
    //     height: 24,
    //     width:24,
    //     borderColor: '#b6c0c6',
    //     borderWidth: 1.5,
    //     borderStyle: 'solid',
    //     backgroundColor: '#b6c0c6',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // check: {
    //     height: 12,
    //     width: 6,
    //     borderBottomWidth: 3.5,
    //     borderBottomColor: 'white',
    //     borderStyle: 'solid',
    //     borderRightColor: 'white',
    //     borderRightWidth: 3.5,
    //     transform: [{ rotate: '45deg'}],
    //     zIndex: 999,
    // }












    fullWrapper: {
        justifyContent: 'center',
    },
    wizardWrapper: {
        alignItems: 'center'
    },
    titleNew: {
textAlign: 'center'
    },
    dotWrapper: {
        marginRight: 5
    },
    successDot: {
        backgroundColor: '#45D58A',
        height:10,
        width: 10,
        borderRadius: 1000
    },
    activeDot: {
        backgroundColor: '#606F76',
        height:10,
        width: 40,
        borderRadius: 500
    },
    nextDot: {
        backgroundColor: '#CFD7DD',
        height:10,
        width: 10,
        borderRadius: 1000
    }
})