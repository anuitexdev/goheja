import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import styles from './styles';
import  WelcomeScreen  from './welcome';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        return {
          header: (
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
          ),
        };
      };
    render(){
        return(
        <WelcomeScreen navigation={this.props.navigation}/>
        )
    }
}




const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);