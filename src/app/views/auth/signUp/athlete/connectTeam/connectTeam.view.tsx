import { Component, Fragment } from "react";
import { connect } from "react-redux";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import connectTeam from './connectTeam.style';
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
            <View style ={connectTeam.pageWrapper}>
                <View>
                    <Text style={connectTeam.title}>
                        Connect to your team
                    </Text>
                    <Text style={connectTeam.subtitle}>
                        If you’r part of a team and got a team code from your coach, please type it below
                    </Text>
                    <TextInput style={connectTeam.input}>

                    </TextInput>
                    <View style={connectTeam.personalNextBtnWrapper}>
                    <TouchableOpacity style={connectTeam.skipWrapper}>
                        <Text style={{fontFamily: 'Roboto-Regular'}}>Skip ></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={connectTeam.nextBtn} onPress={() => this.props.nextStepNumber(1)}>
                        <Text style={connectTeam.nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        )    
}
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (nextStepNumber: number) => dispatch(actions.changeStep(nextStepNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessRegisterScreen);