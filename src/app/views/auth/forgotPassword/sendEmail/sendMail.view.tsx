import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import  styles from './sendMail.style';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import TranslateService from '../../../../services/translation.service';

interface State{
    email: string
}

interface Props{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    changeScreen: (screenNumber: number) => void,
}

class SendMailScreen extends Component<Props,State> {

    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService){
        super(props)

        this.state = {
            email: '',
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res});   
    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
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
                <Text style={styles.title}>  {this.translateMethod('translation.exposeIDE.views.forgot-password.title')}  </Text>
                <Text style = {styles.subTitle}>
                {this.translateMethod('translation.exposeIDE.views.forgot-password.text')}
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
                        <Text style={styles.resetPasswordText}>{this.translateMethod('translation.common.reset')} {this.translateMethod('translation.exposeIDE.views.Login.password')}</Text>
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