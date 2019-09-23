import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from './resetPassword.style';

interface State {
    password: string,
    confirmPassword: string,
    passwordError: boolean;
    confirmPasswordError: boolean;
}

interface Props {
    changeScreen: (screenNumber: number) => void,
}

class ResetPasswordScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            password: '',
            confirmPassword: '',
            passwordError: false,
            confirmPasswordError: false,
        }
    }



    private handleChange = async (data: any) => {
        const errors = this.validatePassword(data);
        await this.setState({
            ...data,
            ...errors
        })
    }

    private validatePassword = (data: any) => {
        let passwordError = this.state.passwordError;
        let confirmPasswordError = this.state.confirmPasswordError;

        if(data.password || data.password === ''){
        passwordError = data.password === '';
        }
        if(data.confirmPassword || data.confirmPassword === ''){
            confirmPasswordError = this.state.password !== data.confirmPassword;
        }

        return {
            passwordError,
            confirmPasswordError
        }
    }

    private onSubmit = () => {
        this.props.changeScreen(3);
    }

    render() {
        return (
            <Fragment>
                <Text style={styles.title}>Reset Password</Text>


                <View style={styles.form}>

                    <View style={styles.formField}>
                        <Text style={styles.label}>New Password</Text>
                        <TextInput
                            placeholder='Type your new password...'
                            style={this.state.passwordError ? styles.inputError: styles.input}
                            onChangeText={(password) => this.handleChange({ password })}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>New Password (again)</Text>
                        <TextInput
                            placeholder='Type your new password (again)...'
                            style={this.state.confirmPasswordError ? styles.inputError: styles.input}
                            onChangeText={(confirmPassword) => this.handleChange({ confirmPassword })}
                        ></TextInput>
                    </View>
                    { this.state.confirmPasswordError || this.state.passwordError ? <Text style={styles.errorText}>Your Password does not match</Text> : null }
                </View>

                <View style={styles.links}>

                    <TouchableOpacity
                        onPress={this.onSubmit}
                        style={this.state.confirmPasswordError || this.state.passwordError || this.state.password === '' || this.state.confirmPassword === '' ?  styles.disabledBtn :styles.nextBtn}
                        disabled ={this.state.confirmPasswordError || this.state.passwordError || this.state.password === '' || this.state.confirmPassword === ''}
                    >
                        <Text style={styles.resetPasswordText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen);