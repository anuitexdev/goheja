import { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput } from "react-native";
import React from "react";
import styles from './style';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as actions from '../../../redux/actions/auth.actions';
import UserSignInData from "src/app/shared/models/userSignInData";

interface State {
    email: string,
    password: string,
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    signIn: (user: UserSignInData) => void
}

class SignInScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    private onSubmit = async () => {
        await this.props.signIn(this.state);
    }

    public changeEmail = (email: string) => {
        this.setState({ email });
    }

    public changePassword = (password: string) => {
        this.setState({ password });
    }

    public signUpRedirect = () => {
        this.props.navigation.navigate('signUp');
    }

    public forgotPasswordRedirect = () => {
        this.props.navigation.navigate('forgotPassword');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Login</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder='Type your email address...'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={this.changeEmail}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Type your email address...'
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={this.changePassword}
                    ></TextInput>
                </View>
                <View style={styles.links}>
                    <Text style={styles.forgotPasswordLink} onPress={this.forgotPasswordRedirect}>Forgot your password?</Text>
                    <TouchableOpacity style={styles.signInBtn}>
                        <Text style={styles.signInText} onPress={this.onSubmit}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpRedirect}>
                    <Text style={styles.haveAccount}>Don’t have a Go-heja account?</Text>
                    <Text style={styles.signUpLink} onPress={this.signUpRedirect}>Signup for free</Text>
                </View>
            </View>

        )
    }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    signIn: (userData: UserSignInData) => dispatch(actions.signIn(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);