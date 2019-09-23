import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import connectTeam from './connectTeam.style';
import * as actions from '../../../../../redux/actions/auth.actions';

interface Props {
    nextStepNumber: (data: any) => void,
    sendCode: (code: string) => void,
}

interface State {
    groupCode: string,
}



class SuccessRegisterScreen extends Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            groupCode: ''
        }
    }

    private setGroupCode = async (code: string) => {
        await this.setState({ groupCode: code });
    }

    private sendCode = (value: string) =>{
        this.props.sendCode(value);
        this.props.nextStepNumber({});

    }

    render() {

        return (
            <View style={connectTeam.pageWrapper}>
                <View>
                    <Text style={connectTeam.title}>
                        Connect to your team
                    </Text>
                    <Text style={connectTeam.subtitle}>
                        If you’r part of a team and got a team code from your coach, please type it below
                    </Text>
                    <TextInput
                        style={connectTeam.input}
                        onChangeText={(value) => this.setGroupCode(value)}
                    >
                    </TextInput>
                    <View style={connectTeam.personalNextBtnWrapper}>
                        <TouchableOpacity 
                        style={connectTeam.skipWrapper}
                        onPress={() =>this.sendCode('')}
                        >
                            <Text style={{ fontFamily: 'Roboto-Regular' }}>Skip ></Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={connectTeam.nextBtn} 
                        onPress={() =>this.sendCode(this.state.groupCode)}
                        >
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
    nextStepNumber: (data: any) => dispatch(actions.changeStep(data)),
    sendCode: (code: string) => dispatch(actions.sendCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessRegisterScreen);