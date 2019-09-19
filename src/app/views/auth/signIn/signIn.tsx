import { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput } from "react-native";
import React from "react";
import styles from '../styles';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

import * as actions from '../../../redux/actions/auth.actions';
import UserSignInData from "src/app/shared/models/userSignInData.model";

import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Header from '../../../components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import { string } from "prop-types";

interface State {
    email: string,
    password: string,
    showPassword: boolean,
    emailError: boolean,
    passwordError: boolean,
}

interface ValidationObject{
    emailError: boolean,
    passwordError: boolean,
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    signIn: (user: UserSignInData) => void,
    isLogged: boolean,
}

class SignInScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showPassword: true,
            email: '',
            password: '',
            emailError: true,
            passwordError: true,
        }
    }

    private onSubmit = async () => {
        await this.props.signIn({ email: this.state.email, password: this.state.password });

        if (this.props.isLogged) {
            this.props.navigation.navigate('Home');
        }
    }

    public signUpRedirect = () => {
        this.props.navigation.navigate('signUp');
    }

    public toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }
    public forgotPasswordRedirect = () => {
        this.props.navigation.navigate('forgotPassword');
    }

    private handleChange = (data: any ) => {
        const validationErrors = this.signInValidation(data);
        this.setState({
            ...data,
            emailError: validationErrors.emailError,
            passwordError: validationErrors.passwordError,
        });
    }

    public signInValidation(data: any): ValidationObject {
        const mailReqExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const passwordReqExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (data.email) {
            return {
                emailError: mailReqExp.test(data.email),
                passwordError: this.state.passwordError,
            }
        }
        if (data.password) {
            return {
                emailError: this.state.emailError,
                passwordError: passwordReqExp.test(data.password),
            }
        }
        if (data.email && data.password) {
            return {
                emailError: mailReqExp.test(data.email),
                passwordError: passwordReqExp.test(data.password),
            }
        }
        return {
            emailError: false,
            passwordError: false
        }
    }

    render() {
        return (
            <ScrollView>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.screenTitle}>Login</Text>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            placeholder='Type your email address...'
                            style={styles.input}
                            onChangeText={(email) => this.handleChange({ email })}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder='Type your password...'
                            secureTextEntry={this.state.showPassword}
                            onChangeText={(password) => this.handleChange({ password })}
                            style={styles.input}
                        />
                        <Icon
                            style={styles.showPassword}
                            size={25}
                            name={'ios-eye'}
                            onPress={this.toggleSwitch}
                        />
                    </View>
                    {!this.state.emailError || !this.state.passwordError ?
                        <View style={styles.signInErrors}>
                            <Text style={styles.textErrors}>
                                Email or Password is incorrect
                        </Text>
                        </View> : null
                    }
                    <View style={styles.links}>
                        <Text style={styles.forgotPasswordLink} onPress={this.forgotPasswordRedirect}>Forgot your password?</Text>
                        <TouchableOpacity style={false : styles.nextBtn } disabled={true} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.signInText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUpRedirect}>
                        <Text style={styles.haveAccount}>Don’t have a Go-heja account?</Text>
                        <Text style={styles.signUpLink} onPress={this.signUpRedirect}>Signup for free</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = (state: any) => ({
    isLogged: state.AuthReducer.isLogged,
});

const mapDispatchToProps = (dispatch: any) => ({
    signIn: (userData: UserSignInData) => dispatch(actions.signIn(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);