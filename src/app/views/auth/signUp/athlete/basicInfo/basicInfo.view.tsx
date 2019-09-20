import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';

interface State {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    showPassword: boolean,
    errors: {
        firstNameError: boolean,
        lastNameError: boolean,
        emailError: boolean,
        passwordError: boolean,
        confirmPasswordError: boolean
    }
}

interface Props {
    signUp: (user: UserSignUpData) => void
    nextStepNumber: (nextStepNumber: any) => void,
    currentStep: number;
}

class BasicInfoAthleteScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            confirmPassword: '',
            password: '',
            showPassword: true,
            errors: {
                emailError: false,
                firstNameError: false,
                lastNameError: false,
                passwordError: false,
                confirmPasswordError: false
            }
        }
    }

    public signUpValidation(email: string, password: string, fname: string, lname: string, confirmPassword: string) {
        const mailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const passwordRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const fnameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const lnameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

        const validationObject = {
            mailError: mailRegExp.test(email),
            passwordError: passwordRegExp.test(password),
            fNameError: fnameRegExp.test(fname),
            lNameError: lnameRegExp.test(lname),
            confPassError: password === confirmPassword
        }
        return validationObject;
    }
    private toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    private onSubmit = async () => {
        const { showPassword, errors, confirmPassword, ...basicData } = this.state;
        // await this.props.signUp(userDto);
        this.props.nextStepNumber(basicData);
    }

    private handleChange = async (data: any) => {
        await this.setState(data);
        const validationError = this.signUpValidation(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.confirmPassword);
        await this.setState({
            errors: {
                emailError: validationError.mailError,
                passwordError: validationError.passwordError,
                firstNameError: validationError.fNameError,
                lastNameError: validationError.lNameError,
                confirmPasswordError: validationError.confPassError
            }
        });
        
        
    }

    private checkValid(){
        console.log(this.state.errors);
        return Object.values(this.state.errors).filter(el => el == false).length > 0 ? false : true
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>Your basic info</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        placeholder='Type your first name...'
                        style={styles.input}
                        onChangeText={(firstName) => this.handleChange({ firstName })}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        placeholder='Type your last name...'
                        style={styles.input}
                        onChangeText={(lastName) => this.handleChange({ lastName })}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Email Address</Text>
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
                        style={styles.input}
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
                        style={styles.input}
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
                        style={
                            this.checkValid() ? styles.nextBtn : styles.nextBtnDisabled
                        } 
                        disabled={
                            !this.checkValid()
                        } 
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
    nextStepNumber: (nextStepNumber: any) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoAthleteScreen);