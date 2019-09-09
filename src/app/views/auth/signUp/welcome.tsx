import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from './styles';
import { NavigationScreenProp, NavigationParams, NavigationState } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}
class WelcomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Go-heja</Text>
                <Text style={styles.subTitle}>What type of account fits you the best</Text>
            
              <View style={styles.buttonVariants}>
                <TouchableOpacity
                style={styles.welcomeButtons}>
                <Text style={styles.buttonText}>I’m an Coach</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                style={styles.welcomeButtons}>
                    <Text style={styles.buttonText}>I’m an Athlete</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.haveAccount}>
                    Already got a Go-heja account?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.loginButton} onPress={this.signInRedirect}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }

    public signInRedirect = () => {
        this.props.navigation.navigate('signIn');
    }
}




const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);