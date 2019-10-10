import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

export default StyleSheet.create({
    languageDropDown: {
        height: 260,
        width: 200,
        backgroundColor: 'white',
        position: 'absolute',
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30, 
        margin: 10,
        right: -15,
        top: -15,
        padding: 10,
        zIndex: 9999,
    },
    languageItemWrapper: {
        borderBottomColor: '#CFD8DD',
        borderBottomWidth: 1,
        paddingBottom: 6,
        paddingTop: 6,
        zIndex: 8888
    },
    languageItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        borderBottomColor: '#CFD8DD',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        zIndex: 9999
    },
    languageItemActive: {
        backgroundColor: '#EBEFF2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
    },
    abbreviation: {
        color: '#9AA7AF',
        fontWeight: 'bold'
    },
})