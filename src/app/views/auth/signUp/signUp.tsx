import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView } from "react-native";
import WelcomeScreen from './welcome';
import BasicInfoScreen from './basicInfo';
import Header from '../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    isWelcomeScreen: boolean,
}

class SignUpScreen extends Component<Props> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <ScrollView>
                    <Header />
                    {this.props.isWelcomeScreen ? <WelcomeScreen navigation={this.props.navigation} /> : <BasicInfoScreen />}

                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    isWelcomeScreen: state.AuthReducer.isWelcomeScreen,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);