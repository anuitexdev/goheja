import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from '../styles';
import  WelcomeScreen  from './welcome';
import  BasicInfoScreen  from './basicInfo';
import Header from '../../../components/header';
class SignUpScreen extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
           <Fragment>
            <ScrollView>
                <Header/>
                <WelcomeScreen  navigation={this.props.navigation}/>
                <BasicInfoScreen/>
            </ScrollView>
           </Fragment>
        )
    }
}





const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);