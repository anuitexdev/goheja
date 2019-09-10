import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from '../styles';
import  WelcomeScreen  from './welcome';
import  BasicInfoScreen  from './basicInfo';
import Header from '../../../components/header';
import UserSignUpData from "src/app/shared/models/userSignUpData";
class SignUpScreen extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
           <Fragment>
            <ScrollView>
                <Header/>
                
                <BasicInfoScreen signUp={this.props.signUp}/>
            </ScrollView>
           </Fragment>
        )
    }
}

// <WelcomeScreen navigation={this.props.navigation}/>



const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);