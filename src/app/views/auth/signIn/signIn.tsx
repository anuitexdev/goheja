import { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import React from "react";

class SignInScreen extends Component {
    constructor(props: any) {
        super(props);
    }

    render(){
        return(
        <Text>SignIn works</Text>
        )
    }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);