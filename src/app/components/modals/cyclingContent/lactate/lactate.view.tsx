import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import cyclingStyles from './lactate.style';
import Icon from 'react-native-vector-icons/Ionicons';
import TranslateService from '../../../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface State {
    activeInputNumber: number,
    hundreds: string,
    dozens: string,
    units: string,
    thresholdValue: number;
    translateMethod: (str: string) => string;
}

interface Props {
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: { threshold: number }) => void,
}

class CyclingLactateView extends Component<Props, State> {
    private inputHundreds: any;
    private inputDozens: any;
    private inputUnits: any;
    private destroyed: any;
    constructor(props: Props, private translationService: TranslateService) {
        super(props);
        this.state = {
            activeInputNumber: 0,
            hundreds: '0',
            dozens: '0',
            units: '0',
            thresholdValue: 0,
            translateMethod: (str: string) => '',
        }
    }

    componentWillMount = () => {
        this.translationService = new TranslateService();
        this.destroyed = new Subject();
        this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
            this.setState({
                translateMethod: res,
            })
        });

    }

    componentWillUnmount = () => {
        this.destroyed.next();
        this.destroyed.complete();
    }

    public setModalVisible = () => {
        this.props.modalOpen();
    }

    public changeFocus = (activeInputNumber: number) => {
        this.setState({
            activeInputNumber: activeInputNumber
        })
    }

    public hideModal = () => {
        this.props.modalClose();
    }

    public changeModal = () => {
        this.props.changeModal({ threshold: this.state.thresholdValue });
    }

    public setValue = async (input: any, value: any) => {
        await this.setState({
            ...value,
        })
        input.focus();

        const summaryValue = Number(this.state.hundreds + this.state.dozens + this.state.units);

        this.setState({
            thresholdValue: summaryValue,
        });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(42, 50, 54, 0.3)'
            }}>
                <TouchableWithoutFeedback onPress={this.hideModal}>
                    <Icon
                        style={cyclingStyles.showBtn}
                        size={50}
                        name={'ios-close'}
                    />
                </TouchableWithoutFeedback>
                <View style={cyclingStyles.modalPage}>
                    <TouchableWithoutFeedback onPress={this.hideModal}>
                        <Text style={cyclingStyles.backBtn}>
                        {this.state.translateMethod('translation.common.back')}
                            </Text>
                    </TouchableWithoutFeedback>

                    <Text style={cyclingStyles.subtitle}>
                    {this.state.translateMethod('translation.common.whatsYour')}
                    </Text>

                    <Text style={cyclingStyles.title}>
                    {this.state.translateMethod('translation.exposeIDE.views.userSetSports.cyclingLacatetThreshold')} 
                    </Text>
                    <View style={cyclingStyles.fullComponent}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                placeholderTextColor={'#393838'}
                                ref={(ref) => { this.inputHundreds = ref; }}
                                placeholder="0"
                                onFocus={() => this.changeFocus(1)}
                                maxLength={1}
                                style={this.state.activeInputNumber === 1 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                                onChangeText={(hundreds) => this.setValue(this.inputDozens, { hundreds })}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                            <TextInput
                                placeholderTextColor={'#393838'}
                                placeholder="0"
                                ref={(ref) => { this.inputDozens = ref; }}
                                maxLength={1}
                                onFocus={() => this.changeFocus(2)}
                                onChangeText={(dozens) => this.setValue(this.inputUnits, { dozens })}
                                style={this.state.activeInputNumber === 2 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                            <TextInput
                                placeholderTextColor={'#393838'}
                                ref={(ref) => { this.inputUnits = ref; }}
                                style={[this.state.activeInputNumber === 3 ? cyclingStyles.focusInput : cyclingStyles.infoInput, { marginRight: 0 }]}
                                placeholder="0"
                                maxLength={1}
                                onFocus={() => this.changeFocus(3)}
                                onChangeText={(units) => this.setValue(this.inputUnits, { units })}
                                keyboardType={"number-pad"}
                            >
                            </TextInput>
                        </View>
                        <Text
                            style={{
                                fontSize: 20,
                                color: '#99a8af',
                                marginTop: 13
                            }}
                        >
                            bpm
                        </Text>
                    </View>

                    <View style={cyclingStyles.footerBtns}>
                        <TouchableWithoutFeedback
                            onPress={this.changeModal}
                        >
                            <Text style={cyclingStyles.skipBtn}>
                            {this.state.translateMethod('translation.common.skip')}  >
                                </Text>
                        </TouchableWithoutFeedback>
                        {
                            this.state.thresholdValue === 0 ?
                                <TouchableWithoutFeedback onPress={this.changeModal}>
                                    <View style={cyclingStyles.nextBtn}>
                                        <Text style={cyclingStyles.nextBtnText}>
                                        {this.state.translateMethod('translation.common.iDontKnow')} 
                            </Text>
                                    </View>
                                </TouchableWithoutFeedback> :
                                <TouchableWithoutFeedback onPress={this.changeModal}>
                                    <View style={cyclingStyles.nextBtn}>
                                        <Text style={cyclingStyles.nextBtnText}>
                                        {this.state.translateMethod('translation.common.next')}
                            </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),
    changeModal: (value: { threshold: number }) => dispatch(actions.changeCyclingModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CyclingLactateView);
