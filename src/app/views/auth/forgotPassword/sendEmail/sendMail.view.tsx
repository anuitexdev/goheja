import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import  styles from './sendMail.style';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

interface State{
    email: string
}

interface Props{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    changeScreen: (screenNumber: number) => void,
}

class SendMailScreen extends Component<Props,State> {
    constructor(props: Props){
        super(props)

        this.state = {
            email: '',
        }
    }

    private redirectToLogin = () => {
        this.props.navigation.navigate('signIn');
    }

    private handleChange = async (email: string) => {
       await this.setState({
            email,
        })
    }

    private onSubmit = () => {
        this.props.changeScreen(2);
    }

    render() {
        return (
            <Fragment>
                <Text style={styles.title}>Did you forgot your{'\n'} password? </Text>
                <Text style = {styles.subTitle}>
                    Don`t worry, it will take you a few {'\n'} moments to reset it and get back on {'\n'} track.
            </Text>

                <View>
                    <Text style= {styles.label}> Your Email Address</Text>
                    <TextInput
                        placeholder='Alona@morning.agency'
                        style={styles.input}
                        onChangeText = {(email: string) => this.handleChange(email)}
                    />
                </View>

                <View style= {styles.links}>
                    <Text  
                    style={styles.loginLink}
                    onPress={this.redirectToLogin}
                    > {'<'} Back to login 
                    </Text>
                    <TouchableOpacity
                        onPress={this.onSubmit}
                        style ={styles.nextBtn}
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

export default connect(mapStateToProps, mapDispatchToProps)(SendMailScreen);