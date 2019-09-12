import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text } from "react-native";

class ForgotPasswordScreen extends Component {

    render() {
        return (
            <Text>Forgot Password works</Text>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);