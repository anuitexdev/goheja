import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import  styles from './success.style';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

interface State{

}

interface Props{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

class SuccessScreen extends Component<Props,State> {
    constructor(props: Props){
        super(props)
    }

    private redirectToLogin = () => {
        this.props.navigation.navigate('signIn');
    }
    

    render() {
        return (
            <Fragment>
                <View style={styles.titleContainer}>
                <View style={styles.checkWrapper}>
                <View style={styles.check}></View>
                </View>
                <Text style={styles.title}>New Password was </Text>
                <Text style={styles.title}> successfully created </Text>
                </View>
 
                     <View style= {styles.links}>
                    <TouchableOpacity
                        onPress={this.redirectToLogin}
                        style ={styles.nextBtn}
                    >
                        <Text style={styles.resetPasswordText}>Back to Login</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SuccessScreen);