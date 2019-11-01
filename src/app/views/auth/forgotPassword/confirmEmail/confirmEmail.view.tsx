import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './confirmEmail.style';
import TranslateService from '../../../../services/translation.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

interface Props {
    email: string,
    changeScreen: (screenNumber: number) => void,

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

    private changeStep =() =>{
        this.props.changeScreen(3)
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

                        <TouchableOpacity
                        onPress={this.changeStep}
                        >
                        <Text style={{borderWidth: 1, borderColor: '#000', width: 100}}>Go to the next step</Text></TouchableOpacity>

                    </View>
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({
    email: state.AuthReducer.resetPasswordData.email,
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen);