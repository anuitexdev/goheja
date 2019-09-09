import { Component, Fragment } from "react";
import { Text, View } from "react-native";
import React from "react";


class Header extends Component {

    render() {
        return (
           <View
           style={{
             height: 197,
             backgroundColor: '#eceff1',
             justifyContent: 'center',
           }}>        
           <Text
             style={{
               color: 'black',
               textAlign: 'center',
               fontWeight: 'bold',
               fontSize: 18,
             }}>
             Go Heja
           </Text>
         </View>
        )
    }
}

export default Header;