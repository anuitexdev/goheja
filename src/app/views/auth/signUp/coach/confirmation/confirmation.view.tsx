import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './confirmation.style';
import * as actions from '../../../../../redux/actions/auth.actions';
import TranslateService from '../../../../../services/translation.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

interface Props {
    changeCoachStep: (data: any) => void,
    email: string,

}

interface State {
    translateMethod: (str: string) => string,

}

class ConfirmationScreen extends Component<Props, State> {

    private destroyed: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)
        this.state = {
            translateMethod: (str: string) => '',
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.destroyed = new Subject();
        this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe((res: any) => {
            this.setState({
                translateMethod: res,
            })
        });
    }

    componentWillUnmount = () => {
        this.destroyed.next();
        this.destroyed.complete();
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
                                <Text style={styles.sendText}>{this.state.translateMethod('translation.common.send')}</Text>
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
});

const mapDispatchToProps = (dispatch: any) => ({
    changeCoachStep: (data: any) => dispatch(actions.changeCoachStep(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen);