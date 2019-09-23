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
import FbLogin from '../../../components/fbAuth/fbAuth';
import * as regExp from '../../../shared/validation/regexps';

interface State {
    email: string,
    password: string,
    showPassword: boolean,
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
            emailError: false,
            passwordError: false,
        }
    }

    private onSubmit = async () => {
        await this.props.signIn({ mail: this.state.email, psw: this.state.password, specGroup: 'gohejacode' });

        if (!this.props.isLogged) {
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

    private handleChange = (data: any): void => {
        const errors = this.validateFields(data);
        const {type, ...signInData} = data;
        
        this.setState({
            ...signInData,
            ...errors,
        });        
    }

    private validateFields = (data: any) => {
        let emailError = this.state.emailError;
        let passwordError = this.state.passwordError;

        if (data.type === 'email') {
            emailError = !regExp.mailReqExp.test(data.email);
        }
        if (data.type === 'password') {
            passwordError = !regExp.mailReqExp.test(data.password);
        }

        const validationObject = {
            emailError,
            passwordError,
        }
        return validationObject;
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
                            style={!this.state.emailError ? styles.input : styles.inputError}
                            onChangeText={(email) => this.handleChange({ email, password: this.state.password, type: 'email' })}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder='Type your password...'
                            secureTextEntry={this.state.showPassword}
                            onChangeText={(password) => this.handleChange({ password, email: this.state.email, type: 'password' })}
                            style={!this.state.passwordError ? styles.input : styles.inputError}
                        />
                        <Icon
                            style={styles.showPassword}
                            size={25}
                            name={'ios-eye'}
                            onPress={this.toggleSwitch}
                        />
                    </View>
                    {
                        // TO-DO
                        this.state.emailError || this.state.passwordError ?
                            <View style={styles.signInErrors}>
                                <Text style={styles.textErrors}>
                                    Email or Password is incorrect
                        </Text>
                            </View> : null
                    }
                    <View style={styles.links}>
                        <Text style={styles.forgotPasswordLink} onPress={this.forgotPasswordRedirect}>Forgot your password?</Text>
                        <TouchableOpacity
                            style={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === '' ? styles.signInBtn : styles.nextBtn}
                            onPress={this.onSubmit}
                            disabled ={this.state.emailError || this.state.email === '' || this.state.passwordError || this.state.password === ''}>
                            <Text style={styles.signInText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUpRedirect}>
                        <Text style={styles.haveAccount}>Don’t have a Go-heja account?</Text>
                        <Text style={styles.signUpLink} onPress={this.signUpRedirect}>Signup for free</Text>
                    </View>
                    <FbLogin />
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