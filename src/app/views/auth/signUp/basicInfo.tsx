import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, Button, TouchableOpacity, TextInput, Switch } from "react-native";
import styles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';

class BasicInfoScreen extends Component {


    constructor(props) {
        super(props);

        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.state = {
            showPassword: true,
        }
    }

    toggleSwitch() {
        this.setState({ showPassword: !this.state.showPassword });
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
                ></TextInput>
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput 
                placeholder='Type your last name...'
                style={styles.input}
                ></TextInput>
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                placeholder='Type your email address...'
                style={styles.input}
                ></TextInput>
            </View>
            <View style={styles.formField}>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                placeholder='Type your password...'
                secureTextEntry={this.state.showPassword}
                onChangeText={(password) => this.setState({ password })}
                style={styles.input}
                />
                <Icon 
                style={ styles.showPassword } 
                size={25} 
                name={'ios-eye'} 
                onPress={this.toggleSwitch}
                value={!this.state.showPassword}/>  
            </View>
            <View style={styles.nextBtnWrapper}>
                <TouchableOpacity style={styles.nextBtn}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoScreen);