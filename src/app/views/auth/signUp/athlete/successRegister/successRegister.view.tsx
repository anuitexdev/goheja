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

}

class SuccessRegisterScreen extends Component<Props, State> {

    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props,  private translationService: TranslateService) {
        super(props)
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
          this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res});   
            
    }

    componentWillUnmount =() => {
        this.languageSubscription.unsubscribe();
    }

    render() {

        return (
            <View style ={styles.pageWrapper}>
                <View style={styles.backgroundCheck}><View style={styles.check}></View></View>
                <Text style={styles.welcome}>{this.translateMethod('translation.common.WelcomeToGoHeja')}</Text>
                <Text style={styles.approve}>{this.translateMethod('translation.common.confirmMessage')}</Text>
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