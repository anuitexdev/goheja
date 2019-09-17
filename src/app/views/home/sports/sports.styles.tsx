import { StyleSheet } from "react-native";
import window from '../../../theme/variables';


export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 20,
        alignItems: 'center',
        width: window.width,
        height: window.height - 100,
    },
    title: {
        color: '#272e43',
        fontSize: 25
    },
    subtitle: {
        fontSize: 16,
        color: '#272e43',
        textAlign: 'center',
        marginTop: 20
    },
    chooseCategory: {
        fontSize: 20,
        color: '#272e43',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 30
    },
    categories: {
        flexDirection: 'row'
    },
    category: {
        height: 130,
        fontSize: 20,
        width: 130,
        borderRadius: 1000,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#4c93e6",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        
        elevation: 24,  
    },
    footer: {
       position: 'absolute',
       right: 28,
       bottom: 32
    },
    skipButton: {
        fontSize: 14,
        color: '#313c58',

    }
})