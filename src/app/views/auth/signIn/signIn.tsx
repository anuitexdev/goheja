import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Button } from "react-native";
import React from "react";
import styles from './style';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import { TouchableOpacity } from "react-native-gesture-handler";

interface State {
    email: string,
    password: string,
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

class SignInScreen extends Component<Props,State> {
    // constructor(props: any) {
    //     super(props);
    // }


    private onSubmit(){

    }

    render() {
        return (
            <View style ={styles.container}>
                <Text style ={styles.screenTitle}>Login</Text>
                <View style={styles.formField}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                    placeholder='Type your email address...'
                    style={styles.input}
                    ></TextInput>
                </View>
                <View style={styles.formField}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                    placeholder='Type your email address...'
                    style={styles.input}
                    ></TextInput>
                </View>
                <View style={styles.links}>
                <Text style={styles.forgotPasswordLink} onPress={this.forgotPasswordRedirect}>Forgot your password?</Text>
                <TouchableOpacity style={styles.signInBtn}>
                <Text style={styles.signInText}>Login</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.signUpRedirect}>
                <Text style={styles.haveAccount}>Don’t have a Go-heja account?</Text>
                <Text style={styles.signUpLink} onPress={this.signUpRedirect}>Signup for free</Text>
                </View>
            </View>
            
        )
    }

    public signUpRedirect = () =>{        
        this.props.navigation.navigate('signUp');
    }

    public forgotPasswordRedirect = () =>{
        this.props.navigation.navigate('forgotPassword');
    }
}
const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);