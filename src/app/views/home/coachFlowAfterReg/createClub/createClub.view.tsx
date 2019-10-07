import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from 'react-native';
import createClubStyle from "./createClub.style";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import * as actions from '../../../../redux/actions/createGroup.actions';
import TranslateService from '../../../../services/translation.service';
interface State {
    clubName: string;
}

interface Props {
    nextStepNumber: (step: { clubName: string }) => void
}

class CreateClubView extends Component<Props, State> {

    private translateMethod: any;
    private languageSubscription: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)
        this.state = {
            clubName: ''
        }
    }

    componentWillMount() {
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
            this.forceUpdate();
            this.translateMethod = res
        });
    }

    componentWillUnmount() {
        this.languageSubscription.unsubscribe();
    }

    public onSubmit() {
        this.props.nextStepNumber(this.state)
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={createClubStyle.clubNameInput}>
                            <Text style={createClubStyle.titleName}>{this.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubName')}</Text>
                            <View style={createClubStyle.inputWrapper}>
                                <TextInput
                                    style={[this.state.clubName.length == 0 ? { fontStyle: 'italic' } : { fontStyle: 'normal' }, createClubStyle.inputClub]}
                                    placeholder={this.translateMethod('translation.exposeIDE.views.regestrationNewClub.caption')}
                                    onChangeText={(txt) => this.setState({ clubName: txt })}
                                    value={this.state.clubName}
                                >
                                </TextInput>
                                <TouchableOpacity
                                    style={createClubStyle.nextBtn}
                                    onPress={() => this.onSubmit()}
                                >
                                    <Text style={createClubStyle.nextBtnText}>
                                        {this.translateMethod('translation.common.next')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({

    nextStepNumber: (step: { clubName: string }) => dispatch(actions.changeStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateClubView);
