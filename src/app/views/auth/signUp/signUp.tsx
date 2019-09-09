import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text } from "react-native";

class SignUpScreen extends Component {

    render(){
        return(
        <Text>SignUp in works</Text>
        )
    }
}


const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);