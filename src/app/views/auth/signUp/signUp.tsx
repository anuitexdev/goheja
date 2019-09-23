import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView } from "react-native";
import WelcomeScreen from './welcome/welcome';
import CoachScreen from './coach/coach.view';
import Header from '../../../components/header';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import AthleteScreen from './athlete/athlete.view';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    role: number,
}

class SignUpScreen extends Component<Props> {

    constructor(props: Props) {
        super(props)
        
    }

    render() {
        return (
            <Fragment>
                <ScrollView>
                    <Header />
                    { 
                        this.props.role === -1 ? <WelcomeScreen navigation={this.props.navigation} /> 
                        : this.props.role === 1 ? <AthleteScreen/> 
                            : <CoachScreen />
                    }

                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    role: state.AuthReducer.signUpData.userType,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);