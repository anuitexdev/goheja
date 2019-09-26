import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';
import ValidationService from '../../../../../shared/validation/validation.service'

interface State {
    firstname: string,
    lastName: string,
    auth: string,
    password: string,
    confirmPassword: string,
    showPassword: boolean,
    errors: {
        auth: boolean,
        firstname: boolean,
        lastName: boolean,
        password: boolean,
        confirmPassword: boolean,
        formError: boolean,
    }
}

interface Props {
    currentStep: number;
    signUp: (user: UserSignUpData) => void
    nextStepNumber: (nextStepData: any) => void,
}

class BasicInfoAthleteScreen extends Component<Props, State> {

    private validationService = new ValidationService();

    constructor(props: Props) {
        super(props);

        this.state = {
            firstname: '',
            lastName: '',
            auth: '',
            confirmPassword: '',
            password: '',
            showPassword: true,
            errors: {
                auth: false,
                firstname: false,
                lastName: false,
                password: false,
                confirmPassword: false,
                formError: false,
            }
        }
    }


    private toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    private onSubmit = async () => {
        const validationError = this.validationService.signUpAthleteValidation(this.state.auth, this.state.password, this.state.firstname, this.state.lastName, this.state.confirmPassword);

        await this.setState({
            errors: {
                auth: validationError.mailError,
                password: validationError.passwordError,
                firstname: validationError.fNameError,
                lastName: validationError.lNameError,
                confirmPassword: validationError.confPassError,
                formError: validationError.formError,
            }
        });
        if (this.state.errors.formError) { return }
        const { showPassword, errors, confirmPassword, ...basicData } = this.state;
        this.props.nextStepNumber(basicData);
    }

    private handleChange = async (data: any) => {

        let key = Object.keys(data)[0];
        let newValidationObject = this.state.errors;
        newValidationObject[key] = false;

        this.setState({
            ...data,
            errors: {
                ...newValidationObject,
            }
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Your basic info</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        placeholder='Type your first name...'
                        style={this.state.errors.firstname ? styles.inputError : styles.input}
                        onChangeText={(firstname) => this.handleChange({ firstname })}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        placeholder='Type your last name...'
                        style={this.state.errors.lastName ? styles.inputError : styles.input}
                        onChangeText={(lastName) => this.handleChange({ lastName })}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        placeholder='Type your email address...'
                        style={this.state.errors.auth ? styles.inputError : styles.input}
                        onChangeText={(auth) => this.handleChange({ auth })}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Type your password...'
                        secureTextEntry={this.state.showPassword}
                        style={this.state.errors.password ? styles.inputError : styles.input}
                        onChangeText={(password) => this.handleChange({ password })}
                    />
                    <Icon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        placeholder='Type your password...'
                        secureTextEntry={this.state.showPassword}
                        style={this.state.errors.confirmPassword ? styles.inputError : styles.input}
                        onChangeText={(confirmPassword) => this.handleChange({ confirmPassword })}
                    />
                    <Icon
                        style={styles.showPassword}
                        size={25}
                        name={'ios-eye'}
                        onPress={this.toggleSwitch}
                    />
                </View>
                <View style={styles.nextBtnWrapper}>
                    <TouchableOpacity
                        style={styles.nextBtn}
                        onPress={this.onSubmit}
                    >
                        <Text style={styles.nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    currentStep: state.AuthReducer.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (userData: UserSignUpData) => dispatch(actions.signUp(userData)),
    nextStepNumber: (nextStepData: any) => dispatch(actions.changeStep(nextStepData))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoAthleteScreen);