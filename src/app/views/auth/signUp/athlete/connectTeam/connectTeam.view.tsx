import { Component } from "react";
import { connect } from "react-redux";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import connectTeam from './connectTeam.style';
import * as actions from '../../../../../redux/actions/auth.actions';
import TranslateService from '../../../../../services/translation.service';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

interface Props {
    nextStepNumber: (data: any) => void,
    sendCode: (code: string) => void,
}

interface State {
    groupCode: string,
    translateMethod: (str: string) => string;
}



class SuccessRegisterScreen extends Component<Props, State> {

    private destroyed:any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)
        this.state = {
            groupCode: '',
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

    private setGroupCode = async (code: string) => {
        await this.setState({ groupCode: code });
    }

    private sendCode = (value: string) => {
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
                        placeholderTextColor={'#393838'}
                        style={connectTeam.input}
                        onChangeText={(value) => this.setGroupCode(value)}
                    >
                    </TextInput>
                    <View style={connectTeam.personalNextBtnWrapper}>
                        <TouchableOpacity
                            style={connectTeam.skipWrapper}
                            onPress={() => this.sendCode('')}
                        >
                            <Text>{this.state.translateMethod('translation.common.skip')} ></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={connectTeam.nextBtn}
                            onPress={() => this.sendCode(this.state.groupCode)}
                        >
                            <Text style={connectTeam.nextBtnText}>{this.state.translateMethod('translation.common.next')}</Text>
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