import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import cyclingStyles from './cyclingFtp.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
    activeInputNumber: number,
    hundreds: string,
    dozens: string,
    units: string,
    ftpValue: number;
}

interface Props {
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: number) => void,
}

class CyclingFtpView extends Component<Props, State> {

    private input1: any;
    private input2: any;
    private input3: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            activeInputNumber: 0,
            hundreds: '',
            dozens: '',
            units: '',
            ftpValue: 0,
        }
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
        this.props.changeModal(2);
    }

    public setValue = async (type: string, value: string) => {

        if (type === 'hundreds') {
            await this.setState({
                hundreds: value
            })
            this.input2.focus();
        }

        if (type === 'dozens') {
            await this.setState({
                dozens: value
            })
            this.input3.focus();
        }

        if (type === 'units') {
            await this.setState({
                units: value
            })
        }

        const summaryValue = Number(this.state.hundreds + this.state.dozens + this.state.units);

        this.setState({
            ftpValue: summaryValue,
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
                            Back
                            </Text>
                    </TouchableWithoutFeedback>
                    <Text style={cyclingStyles.subtitle}>
                        What’s your
                        </Text>
                    <Text style={cyclingStyles.title}>
                        Cycling FTP
                        </Text>

                    <View style={cyclingStyles.fullComponent}>
                        <TextInput
                            ref={(ref) => this.input1 = ref}
                            placeholder="0"
                            onFocus={() => this.changeFocus(1)}
                            maxLength={1}
                            style={this.state.activeInputNumber === 1 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                            onChangeText={(value) => this.setValue('hundreds', value)}
                        >
                        </TextInput>
                        <TextInput
                            placeholder="0"
                            ref={(ref) => this.input2 = ref}
                            maxLength={1}
                            onFocus={() => this.changeFocus(2)}
                            onChangeText={(value) => this.setValue('dozens', value)}
                            style={this.state.activeInputNumber === 2 ? cyclingStyles.focusInput : cyclingStyles.infoInput}
                        >
                        </TextInput>
                        <TextInput
                            ref={(ref) => this.input3 = ref}
                            style={[this.state.activeInputNumber === 3 ? cyclingStyles.focusInput : cyclingStyles.infoInput, { marginRight: 0 }]}
                            placeholder="0"
                            maxLength={1}
                            onFocus={() => this.changeFocus(3)}
                            onChangeText={(value) => this.setValue('units', value)}
                        >
                        </TextInput>
                    </View>

                    <View style={cyclingStyles.footerBtns}>
                        <TouchableOpacity>
                            <Text style={cyclingStyles.skipBtn}>
                                Skip >
                                </Text>
                        </TouchableOpacity>
                        {this.state.ftpValue === 0 ? <TouchableOpacity style={cyclingStyles.nextBtn}>
                            <Text style={cyclingStyles.nextBtnText}>
                                I don't know
                                    </Text>
                        </TouchableOpacity> :
                            <TouchableWithoutFeedback onPress={this.changeModal}>
                                <View style={cyclingStyles.nextBtn}>
                                    <Text style={cyclingStyles.nextBtnText}>
                                        Next
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>}
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
    changeModal: (value: number) => dispatch(actions.changeCyclingModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CyclingFtpView);
