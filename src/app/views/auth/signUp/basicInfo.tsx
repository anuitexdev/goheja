import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../redux/actions/auth.actions';
import UserSignUpData from '../../../shared/models/userSignUpData';

interface State {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    showPassword: boolean,
}

interface Props {
    signUp: (user: UserSignUpData) => void
}

class BasicInfoScreen extends Component<Props, State> {


    constructor(props: any) {
        super(props);

        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            showPassword: true,
        }
    }

    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
    }

    private onSubmit = async () => {
        const {showPassword, ...userDto} = this.state;
        await this.props.signUp(userDto);
    }
    
    render(){
        return(
      
            <View style ={styles.container}>
            <Text style ={styles.screenTitle}>Your basic info</Text>
            <View style={styles.formField}>
                <Text style={styles.label}>First Name</Text>
                <TextInput 
                placeholder='Type your first name...'
                style={styles.input}
                onChangeText={(firstName: string) => {
                    this.setState({ firstName });
                }}
                ></TextInput>
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput 
                placeholder='Type your last name...'
                style={styles.input}
                onChangeText={(lastName: string) => {
                    this.setState({ lastName });
                }}
                // onChange={(e) => this.handleChange(e)}
                ></TextInput>
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                placeholder='Type your email address...'
                style={styles.input}
                onChangeText={(email: string) => {
                    this.setState({ email });
                }}
                // onChange={(e) => this.handleChange(e)}
                ></TextInput>
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                placeholder='Type your password...'
                secureTextEntry={this.state.showPassword}
                // onChange={(e) => this.handleChange(e)}
                style={styles.input}
                onChangeText={(password: string) => {
                    this.setState({ password });
                }}

                />
                <Icon 
                style={ styles.showPassword } 
                size={25} 
                name={'ios-eye'} 
                onPress={this.toggleSwitch}
                />  
            </View>
            <View style={styles.nextBtnWrapper}>
                <TouchableOpacity style={styles.nextBtn} onPress={this.onSubmit}>
                    <Text style={styles.nextBtnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}




const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (userData: UserSignUpData) => dispatch(actions.signIn(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoScreen);