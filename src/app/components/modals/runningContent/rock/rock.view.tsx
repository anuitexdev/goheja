import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import rock from './rock.style';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalReducer from '../../../../redux/reducers/modal.reducer';
import TranslateService from '../../../../services/translation.service';

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
    private inputHundreds: any;
    private inputDozens: any;
    private inputUnits: any;
    public languageSubscription: any;
    public translateMethod: any;

    constructor(props: Props, public translationService: TranslateService) {
        super(props);
        this.state = {
            activeInputNumber: 0,
            hundreds: '0',
            dozens: '0',
            units: '0',
            rockValue: 0,
        }
        this.translationService = new TranslateService();
        this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
          this.forceUpdate();
          this.translateMethod = res
        });
    }
    
      componentWillUnmount() {
          this.languageSubscription.unsubscribe();
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
                                {this.translateMethod('translation.common.back')}
                            </Text>
                            </TouchableWithoutFeedback>
                            <Text style={rock.title}>
                                {this.props.state.runningData.awesome}{"\n"}
                                {this.translateMethod('translation.common.youRock')}
                        </Text>
                            <Text style={rock.subtitle}>
                            {this.translateMethod('translation.exposeIDE.views.userSetSports.whatWastheAvgHeartRateDyringThathalfMarathon')}
                        </Text>

                            <View style={rock.fullComponent}>
                              <View style={{flexDirection: 'row'}}>
                                    <TextInput
                                        ref={(ref) => this.inputHundreds = ref}
                                        placeholder="0"
                                        onFocus={() => this.changeFocus(1)}
                                        maxLength={1}
                                        style={this.state.activeInputNumber === 1 ? rock.focusInput : rock.infoInput}
                                        onChangeText={(hundreds) =>this.setValue(this.inputDozens, {hundreds})}
                                        keyboardType={"number-pad"}
                                    >
                                    </TextInput>
                                    <TextInput
                                        placeholder="0"
                                        ref={(ref) => this.inputDozens = ref }
                                        maxLength={1}
                                        onFocus={() => this.changeFocus(2)}
                                        onChangeText={(dozens) =>this.setValue(this.inputUnits, {dozens})}
                                        style={this.state.activeInputNumber === 2 ? rock.focusInput : rock.infoInput}
                                        keyboardType={"number-pad"}
                                    >
                                    </TextInput>
                                    <TextInput
                                        ref={(ref) => this.inputUnits = ref }
                                        style={[this.state.activeInputNumber === 3 ? rock.focusInput : rock.infoInput, { marginRight: 0 }]}
                                        placeholder="0"
                                        maxLength={1}
                                        onChangeText={(units) =>this.setValue(this.inputUnits, {units})}
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
                            {this.translateMethod('translation.common.bpm')}
                            </Text>
                            </View>

                            <View style={rock.footerBtns}>
                                <TouchableWithoutFeedback  onPress={this.changeModal}>
                                    <Text style={rock.skipBtn}>
                                    {this.translateMethod('translation.common.skip')} >
                                </Text>
                                </TouchableWithoutFeedback>
                                {
                                    this.state.rockValue === 0 ?    
                                    <TouchableWithoutFeedback onPress={this.hideModal}>
                                        <View style={rock.nextBtn}>
                                            <Text style={rock.nextBtnText}>
                                            I don't remmember
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback> :
                                    <TouchableWithoutFeedback onPress={this.hideModal}>
                                        <View style={rock.nextBtn}>
                                            <Text style={rock.nextBtnText}>
                                            {this.translateMethod('translation.common.next')}
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
