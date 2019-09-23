import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from './resetPassword.style';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

interface State {
    password: string,
    confirmPassword: string,
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
        }
    }



    private handleChange = async (data: any) => {
        await this.setState({
            ...data,
        })
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
                            style={styles.input}
                            onChangeText={(password) => this.handleChange({ password })}
                        ></TextInput>
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.label}>New Password (again)</Text>
                        <TextInput
                            placeholder='Type your new password (again)...'
                            style={styles.input}
                            onChangeText={(confirmPassword) => this.handleChange({ confirmPassword })}
                        ></TextInput>
                    </View>

                </View>

                <View style={styles.links}>

                    <TouchableOpacity
                        onPress={this.onSubmit}
                        style={styles.nextBtn}
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