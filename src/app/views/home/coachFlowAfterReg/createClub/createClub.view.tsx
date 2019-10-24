import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import createClubStyle from './createClub.style';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import * as actions from '../../../../redux/actions/createGroup.actions';
import TranslateService from '../../../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface State {
    clubName: string;
    translateMethod: (str: string) => string;
}

interface Props {
    nextStepNumber: (step: { name: string }) => void
}

class CreateClubView extends Component<Props, State> {

    private languageSubscription: any;
    private destroyed: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props)
        this.state = {
            clubName: '',
            translateMethod: (str: string) => '',
        }
    }

    componentWillMount() {
        this.translationService = new TranslateService();
        this.destroyed = new Subject();
        this.languageSubscription = this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
            this.setState({
                translateMethod: res,
            })
        });
    }

    componentWillUnmount() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    public onSubmit() {
        this.props.nextStepNumber({ name: this.state.clubName })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={createClubStyle.clubNameInput}>
                            <Text style={createClubStyle.titleName}>{this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubName')}</Text>
                            <View style={createClubStyle.inputWrapper}>
                                <TextInput
                                    style={[this.state.clubName.length == 0 ? { fontStyle: 'italic' } : { fontStyle: 'normal' }, createClubStyle.inputClub]}
                                    placeholder={this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.caption')}
                                    onChangeText={(txt) => this.setState({ clubName: txt })}
                                    value={this.state.clubName}
                                >
                                </TextInput>
                                <TouchableOpacity
                                    style={createClubStyle.nextBtn}
                                    onPress={() => this.onSubmit()}
                                >
                                    <Text style={createClubStyle.nextBtnText}>
                                        {this.state.translateMethod('translation.common.next')}
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

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({

    nextStepNumber: (step: { clubName: string }) => dispatch(actions.changeStep(step))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateClubView);
