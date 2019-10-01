import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './confirmation.style';
import * as actions from '../../../../../redux/actions/auth.actions';
import TranslateService from '../../../../../services/translation.service';

interface Props {
    changeCoachStep: (data: any) => void,
    email: string,
    state: any

}

interface State {

}

class ConfirmationScreen extends Component<Props, State> {

    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)      
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

    render() {

        return (
            <Fragment>
                <ScrollView>

                    <View style={styles.container}>
                        <Text style={styles.pageHeader}>We`we Sent you a {'\n'} confirmation email to </Text>
                        <View>
                            <Text style={styles.email}>{this.props.email || ''}</Text>
                        </View>

                        <Text style={styles.check}>Please check your email and approve your {'\n'} password reset</Text>

                        <View style={styles.links}>
                            <Text > Wrong email?</Text>
                            <TouchableOpacity
                                style={styles.nextBtn}
                            >
                                <Text style={styles.sendText}>{this.translateMethod('translation.common.send')}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    email: state.AuthReducer.coachSignUpData.auth,
    state: state.AuthReducer.coachSignUpData
});

const mapDispatchToProps = (dispatch: any) => ({
    changeCoachStep: (data: any) => dispatch(actions.changeCoachStep(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen);