import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from './resetPassword.style';
import TranslateService from '../../../../services/translation.service';
import * as actions from '../../../../redux/actions/auth.actions';
import ResetPasswordData from '../../../../shared/models/resetPasswordData.model';

interface State {
    password: string,
    confirmPassword: string,
    passwordError: boolean;
    confirmPasswordError: boolean;
}

interface Props {
    changeScreen: (screenNumber: number) => void,
    resetPassword: (resetData: ResetPasswordData) => void,
    email: string,
}

class ResetPasswordScreen extends Component<Props, State> {

    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)

        this.state = {
            password: '',
            confirmPassword: '',
            passwordError: false,
            confirmPasswordError: false,
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res
        });
    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
    }


    private handleChange = async (data: any) => {
        const errors = this.validatePassword(data);
        await this.setState({
            ...data,
            ...errors
        });
    }

    private validatePassword = (data: any) => {
        let passwordError = this.state.passwordError;
        let confirmPasswordError = this.state.confirmPasswordError;

        if (data.password || data.password === '') {
            passwordError = data.password === '';
        }
        if (data.confirmPassword || data.confirmPassword === '') {
            confirmPasswordError = this.state.password !== data.confirmPassword;
        }

        return {
            passwordError,
            confirmPasswordError
        }
    }

    private onSubmit = async () => {
        const resetData = {
            email: this.props.email,
            newPassword: this.state.password,
        };
        await this.props.resetPassword(resetData);
        this.props.changeScreen(3);
    }

    render() {
        return (
            <Fragment>
                <Text style={styles.title}>{this.translateMethod('translation.common.reset')} {this.translateMethod('translation.exposeIDE.views.Login.password')}</Text>


                <View style={styles.form}>

                    <View style={styles.formField}>
                        <Text style={styles.label}>{this.translateMethod('translation.common.new')} {this.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                        <TextInput
                            placeholder='Type your new password...'
                            style={this.state.passwordError ? styles.inputError : styles.input}
                            onChangeText={(password) => this.handleChange({ password })}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>{this.translateMethod('translation.common.new')} {this.translateMethod('translation.exposeIDE.views.Login.password')} (again)</Text>
                        <TextInput
                            placeholder='Type your new password (again)...'
                            style={this.state.confirmPasswordError ? styles.inputError : styles.input}
                            onChangeText={(confirmPassword) => this.handleChange({ confirmPassword })}
                        ></TextInput>
                    </View>
                    {this.state.confirmPasswordError || this.state.passwordError ? <Text style={styles.errorText}>Your Password does not match</Text> : null}
                </View>

                <View style={styles.links}>

                    <TouchableOpacity
                        onPress={this.onSubmit}
                        style={this.state.confirmPasswordError || this.state.passwordError || this.state.password === '' || this.state.confirmPassword === '' ? styles.disabledBtn : styles.nextBtn}
                        disabled={this.state.confirmPasswordError || this.state.passwordError || this.state.password === '' || this.state.confirmPassword === ''}
                    >
                        <Text style={styles.resetPasswordText}>{this.translateMethod('translation.common.reset')} {this.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    email: state.AuthReducer.resetPasswordData.email
});

const mapDispatchToProps = (dispatch: any) => ({
    resetPassword: (resetData: ResetPasswordData) => dispatch(actions.resetPassword(resetData))

});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen);