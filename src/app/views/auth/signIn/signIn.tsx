import { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput } from "react-native";
import React from "react";
import styles from '../styles';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

import * as actions from '../../../redux/actions/auth.actions';
import UserSignInData from "src/app/shared/models/userSignInData";

import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Header from '../../../components/header';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    email: string,
    password: string,
    showPassword: boolean
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    signIn: (user: UserSignInData) => void
}

class SignInScreen extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showPassword: true,
            email: '',
            password: '',
        }
    }

    private onSubmit = async () => {
        await this.props.signIn({ email :this.state.email,password: this.state.password });
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

    public toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }
    public forgotPasswordRedirect = () => {
        this.props.navigation.navigate('forgotPassword');
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
                            onChangeText={this.changeEmail}
                            style={styles.input}
                            onChangeText = {this.changeEmail}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            placeholder='Type your password...'
                            secureTextEntry={this.state.showPassword}
                            onChangeText = {this.changePassword}
                            style={styles.input}
                        />
                        <Icon
                            style={styles.showPassword}
                            size={25}
                            name={'ios-eye'}
                            onPress={this.toggleSwitch}
                        />
                    </View>
                    <View style={styles.signInErrors}>
                        <Text style={styles.textErrors}>
                            Email or Password is incorrect
                </Text>
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
            </ScrollView>
        )
    }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    signIn: (userData: UserSignInData) => dispatch(actions.signIn(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);