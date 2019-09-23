import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import rock from './rock.style';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalReducer from '../../../../redux/reducers/modal.reducer';

interface State {
    activeInputNumber: number,
    hundreds: string,
    dozens: string,
    units: string,
    rockValue: number,
}

interface Props {
    modalVisible: boolean;
    modalNumber: number,
    state: any,
    modalClose: () => void,
    modalOpen: () => void,
    changeModal: (value: {rock: number}) => void,
}

class RockView extends Component<Props, State> {
    private input1: any;
    private input2: any;
    private input3: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            activeInputNumber: 0,
            hundreds: '0',
            dozens: '0',
            units: '0',
            rockValue: 0,
        }

        console.log(this.props.state);
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
        this.props.changeModal({rock: this.state.rockValue});
    }

    public setValue = async (input: any, value: any) => {
        await this.setState({
             ...value,
         })
         input.focus();
 
         const summaryValue = Number(this.state.hundreds + this.state.dozens + this.state.units);
         
         this.setState({
            rockValue: summaryValue,
         });     
     }

    render() {
        return (   

                    <View style={rock.backDrop}>
                        <TouchableWithoutFeedback onPress={this.hideModal}>
                            <Icon
                                style={rock.showBtn}
                                size={50}
                                name={'ios-close'}
                            />
                        </TouchableWithoutFeedback>
                        <View style={rock.modalPage}>
                            <TouchableWithoutFeedback onPress={this.hideModal}>
                                <Text style={rock.backBtn}>
                                    Back
                            </Text>
                            </TouchableWithoutFeedback>
                            <Text style={rock.title}>
                                {this.props.state.runningData.awesome}{"\n"}
                                You Rock!
                        </Text>
                            <Text style={rock.subtitle}>
                                What was your Avg. Heart Rate during that ½ Marathon?
                        </Text>

                            <View style={rock.fullComponent}>
                              <View style={{flexDirection: 'row'}}>
                                    <TextInput
                                        ref={(ref) => this.input1 = ref}
                                        placeholder="0"
                                        onFocus={() => this.changeFocus(1)}
                                        maxLength={1}
                                        style={this.state.activeInputNumber === 1 ? rock.focusInput : rock.infoInput}
                                        onChangeText={(hundreds) =>this.setValue(this.input2, {hundreds})}
                                        keyboardType={"number-pad"}
                                    >
                                    </TextInput>
                                    <TextInput
                                        placeholder="0"
                                        ref={(ref) => this.input2 = ref }
                                        maxLength={1}
                                        onFocus={() => this.changeFocus(2)}
                                        onChangeText={(dozens) =>this.setValue(this.input3, {dozens})}
                                        style={this.state.activeInputNumber === 2 ? rock.focusInput : rock.infoInput}
                                        keyboardType={"number-pad"}
                                    >
                                    </TextInput>
                                    <TextInput
                                        ref={(ref) => this.input3 = ref }
                                        style={[this.state.activeInputNumber === 3 ? rock.focusInput : rock.infoInput, { marginRight: 0 }]}
                                        placeholder="0"
                                        maxLength={1}
                                        onChangeText={(units) =>this.setValue(this.input3, {units})}
                                        onFocus={() => this.changeFocus(3)}
                                        keyboardType={"number-pad"}
                                    >
                                    </TextInput>
                              </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#99a8af',
                                    marginTop: 13,
                                }}
                            >
                              bpm
                            </Text>
                            </View>

                            <View style={rock.footerBtns}>
                                <TouchableOpacity>
                                    <Text style={rock.skipBtn}>
                                        Skip >
                                </Text>
                                </TouchableOpacity>
                                {
                                    this.state.rockValue === 0 ? 
                                    <TouchableOpacity style={rock.nextBtn}>
                                        <Text style={rock.nextBtnText}>
                                            I don't remmember
                                        </Text>
                                    </TouchableOpacity> :
                                    <TouchableWithoutFeedback onPress={this.hideModal}>
                                        <View style={rock.nextBtn}>
                                            <Text style={rock.nextBtnText}>
                                                Next
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
    modalVisible: state.ModalReducer.openModal,
    modalNumber: state.ModalReducer.runningModalNumber,
    state: state.ModalReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    modalClose: () => dispatch(actions.modalClose()),
    modalOpen: () => dispatch(actions.modalOpen()),
    changeModal: (value: {rock: number}) => dispatch(actions.changeRunningModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RockView);
