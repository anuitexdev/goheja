import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { View, Text } from 'react-native';

import styles from './styles';
import TranslateService from '../../../../../services/translation.service';

interface Props {
    state: any,
}

interface State {
    translateMethod: (str: string) => string;
}

class SuccessRegisterScreen extends Component<Props, State> {


    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)
        this.state = {
            translateMethod: (str: string) => '',
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.setState({
                translateMethod: res,
            })
        });

    }

    componentWillUnmount = () => {
        this.languageSubscription.unsubscribe();
    }

    render() {

        return (
            <View style={styles.pageWrapper}>
                <View style={styles.backgroundCheck}><View style={styles.check}></View></View>
                <Text style={styles.welcome}>{this.state.translateMethod('translation.common.WelcomeToGoHeja')}</Text>
                <Text style={styles.approve}>{this.state.translateMethod('translation.common.confirmMessage')}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
    state: state

});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessRegisterScreen);