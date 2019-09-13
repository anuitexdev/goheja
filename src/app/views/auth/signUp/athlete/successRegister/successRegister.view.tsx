import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { ScrollView, View } from 'react-native';

import styles from './styles';
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (nextStepNumber: number) => void
}

interface State {

}

class SuccessRegisterScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

    }

    render() {

        return (
            <Fragment>
                <ScrollView>
                <View style ={styles.pageWrapper}>
                    <View style={styles.container}>

        
                    
                    </View>
                    </View>
         
                </ScrollView>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepNumber: number) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessRegisterScreen);