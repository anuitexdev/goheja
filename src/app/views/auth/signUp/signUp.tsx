import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, SafeAreaView, Platform, KeyboardAvoidingView } from "react-native";
import WelcomeScreen from './welcome/welcome';
import CoachScreen from './coach/coach.view';
import Header from '../../../components/header/header';
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
            <KeyboardAvoidingView enabled behavior="padding"
                 keyboardVerticalOffset={0}>
                <ScrollView> 
                    <SafeAreaView style={{flex: 1}}/>
                    {Platform.OS === 'android' ?  <Header/>: null} 
                    { 
                        this.props.role === -1 ? <WelcomeScreen navigation={this.props.navigation} /> 
                        : this.props.role === 1 ? <AthleteScreen/> 
                        : <CoachScreen navigation={this.props.navigation} />
                    }
                </ScrollView>
                </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state: any) => ({
    role: state.AuthReducer.userType,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);