import { StyleSheet } from "react-native";
import window from '../../../../theme/variables';


export default StyleSheet.create({
    photoWrapper: {
        padding: 25
    },
    titleLogo: {
        color: '#272D43',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
        borderRadius: 5
    },
    photoPicker: {
        height: 340,
        width: window.width - 90,
        backgroundColor: '#CFD8DD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    pickedPhoto: {
        height: 260,
        width: window.width - 140,
        borderRadius: 8
    },
    photoBtnTitle: {
        fontSize: 20,
        color: '#272D43'
    },
    newPhoto: {
        height: 340,
        width: window.width - 90,
        backgroundColor: 'white',
        padding: 20
    },
    nextBtn: {
        backgroundColor: '#4d5a5f',
        borderRadius: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 12,
        paddingTop: 12,
        marginLeft: 15,
        
    },
    nextBtnText: {
        color: 'white',
        fontSize: 16
    },
    wrapperBtn: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 20
    }
})