import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import awsome from './awsome.style';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import TranslateService from '../../../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
interface State {
  activeInputNumber: number;
  unitsOfHours: string;
  unitsOfSeconds: string;
  unitsOfMinutes: string;
  dozentsOfHours: string;
  dozentsOfSeconds: string;
  dozentsOfMinutes: string;
  awesomeValue: string;
}

interface Props {
  modalVisible: boolean;
  modalNumber: number;
  modalClose: () => void;
  modalOpen: () => void;
  changeModal: (value: { awesome: string }) => void;
  state: any
}

class AwsomeView extends Component<Props, State> {
  private inputDozentsOfHours: any;
  private inputUnitsOfHours: any;
  private inputDozentsOfMinutes: any;
  private inputUnitsOfMinutes: any;
  private inputDozentsOfSeconds: any;
  private inputUnitsOfSeconds: any;
  public translateMethod: any;
  private destroyed: any;

  constructor(props: Props, public translationService: TranslateService) {
    super(props);
    this.state = {
      activeInputNumber: 0,
      unitsOfHours: '0',
      unitsOfSeconds: '0',
      unitsOfMinutes: '0',
      dozentsOfHours: '0',
      dozentsOfSeconds: '0',
      dozentsOfMinutes: '0',
      awesomeValue: ''
    };
    this.translationService = new TranslateService();
    this.destroyed = new Subject();
    this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
      this.forceUpdate();
      this.translateMethod = res
    });
  }

  componentWillUnmount() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  public setModalVisible = () => {
    this.props.modalOpen();
  };

  public changeFocus = (activeInputNumber: number) => {
    this.setState({
      activeInputNumber: activeInputNumber,
    });
  };

  public formatPaceTime(value: string) {
    const fullTime = moment(value, 'HHmmss');
    const formatTime = fullTime.format('HH:mm:ss')
    return formatTime;
  }


  public setValue = async (input: any, value: any) => {
    await this.setState({
      ...value,
    });
    input.focus();

    const summaryValue = String(
      this.state.dozentsOfHours + this.state.unitsOfHours + this.state.dozentsOfMinutes + this.state.unitsOfMinutes + this.state.dozentsOfSeconds + this.state.unitsOfSeconds,
    );


    this.setState({
      awesomeValue: this.formatPaceTime(summaryValue),
    });
  };

  public hideModal = () => {
    this.props.modalClose();
  };

  public changeModal = () => {
    this.props.changeModal({ awesome: this.state.awesomeValue });
  };

  render() {
    return (
      <View style={awsome.backDrop}>
        <TouchableWithoutFeedback onPress={this.hideModal}>
          <Icon style={awsome.showBtn} size={50} name={'ios-close'} />
        </TouchableWithoutFeedback>
        <View style={awsome.modalPage}>
          <TouchableWithoutFeedback onPress={this.hideModal}>
            <Text style={awsome.backBtn}> {this.translateMethod('translation.common.back')}</Text>
          </TouchableWithoutFeedback>
          <Text style={awsome.title}>
            {this.translateMethod('translation.common.wow')}!{'\n'}
            {this.translateMethod('translation.common.thatIsAwsome')}
          </Text>
          <Text style={awsome.subtitle}>

            {this.translateMethod('translation.exposeIDE.views.userSetSports.howLongDidtheHalfMarathonTookYou')}
          </Text>

          <View style={awsome.fullComponent}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  placeholderTextColor={'#393838'}
                  ref={ref => (this.inputDozentsOfHours = ref)}
                  placeholder="0"
                  onFocus={() => this.changeFocus(1)}
                  maxLength={1}
                  keyboardType={"number-pad"}
                  style={
                    this.state.activeInputNumber === 1
                      ? awsome.focusInput
                      : awsome.infoInput
                  }
                  onChangeText={(dozentsOfHours) => this.setValue(this.inputUnitsOfHours, { dozentsOfHours })}
                >
                </TextInput>
                <TextInput
                  placeholderTextColor={'#393838'}
                  placeholder="0"
                  ref={ref => (this.inputUnitsOfHours = ref)}
                  maxLength={1}
                  keyboardType={"number-pad"}
                  onFocus={() => this.changeFocus(2)}
                  onChangeText={(unitsOfHours) => this.setValue(this.inputDozentsOfMinutes, { unitsOfHours })}
                  style={[
                    this.state.activeInputNumber === 2
                      ? awsome.focusInput
                      : awsome.infoInput,
                    { marginRight: 8 },
                  ]}>
                </TextInput>
              </View>
              <Text style={{ fontSize: 20, color: '#99a8af', marginTop: 13 }}>
                H
                    </Text>
            </View>
            <View style={awsome.colonWrapper}>
              <Text style={awsome.colon}>:</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  placeholderTextColor={'#393838'}
                  ref={ref => (this.inputDozentsOfMinutes = ref)}
                  style={[
                    this.state.activeInputNumber === 3
                      ? awsome.focusInput
                      : awsome.infoInput,
                    { marginLeft: 8 },
                  ]}
                  placeholder="0"
                  maxLength={1}
                  keyboardType={"number-pad"}
                  onChangeText={(dozentsOfMinutes) => this.setValue(this.inputUnitsOfMinutes, { dozentsOfMinutes })}
                  onFocus={() => this.changeFocus(3)}>
                </TextInput>
                <TextInput
                  placeholderTextColor={'#393838'}
                  ref={ref => (this.inputUnitsOfMinutes = ref)}
                  style={[
                    this.state.activeInputNumber === 4
                      ? awsome.focusInput
                      : awsome.infoInput,
                    { marginRight: 0 },
                  ]}
                  placeholder="0"
                  maxLength={1}
                  keyboardType={"number-pad"}
                  onChangeText={(unitsOfMinutes) => this.setValue(this.inputDozentsOfSeconds, { unitsOfMinutes })}
                  onFocus={() => this.changeFocus(4)}>
                </TextInput>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#99a8af',
                  marginTop: 13,
                  marginRight: 24,
                }}>
                {this.translateMethod('translation.common.min')}
              </Text>
            </View>
            <View style={awsome.colonWrapper}>
              <Text style={awsome.colon}>:</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  placeholderTextColor={'#393838'}
                  ref={ref => (this.inputDozentsOfSeconds = ref)}
                  style={[
                    this.state.activeInputNumber === 5
                      ? awsome.focusInput
                      : awsome.infoInput,
                    { marginLeft: 8 },
                  ]}
                  placeholder="0"
                  maxLength={1}
                  keyboardType={"number-pad"}
                  onChangeText={(dozentsOfSeconds) => this.setValue(this.inputUnitsOfSeconds, { dozentsOfSeconds })}
                  onFocus={() => this.changeFocus(5)}>
                </TextInput>
                <TextInput
                  placeholderTextColor={'#393838'}
                  ref={ref => (this.inputUnitsOfSeconds = ref)}
                  style={[
                    this.state.activeInputNumber === 6
                      ? awsome.focusInput
                      : awsome.infoInput,
                    { marginRight: 0 },
                  ]}
                  placeholder="0"
                  onChangeText={(unitsOfSeconds) => this.setValue(this.inputUnitsOfSeconds, { unitsOfSeconds })}
                  maxLength={1}
                  keyboardType={"number-pad"}
                  onFocus={() => this.changeFocus(6)}>
                </TextInput>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#99a8af',
                  marginTop: 13,
                  marginRight: 24,
                }}>
                {this.translateMethod('translation.common.sec')}
              </Text>
            </View>
          </View>

          <View style={awsome.footerBtns}>
            <TouchableWithoutFeedback onPress={this.changeModal}>
              <Text style={awsome.skipBtn}> {this.translateMethod('translation.common.skip')} ></Text>
            </TouchableWithoutFeedback>
            {
              this.state.awesomeValue === '' ?
                (<TouchableWithoutFeedback onPress={this.changeModal}>
                  <View style={awsome.nextBtn}>
                    <Text style={awsome.nextBtnText}>{this.translateMethod('translation.common.iDontKnow')}</Text>
                  </View>
                </TouchableWithoutFeedback>)
                :
                (<TouchableWithoutFeedback onPress={this.changeModal}>
                  <View style={awsome.nextBtn}>
                    <Text style={awsome.nextBtnText}>{this.translateMethod('translation.common.next')}</Text>
                  </View>
                </TouchableWithoutFeedback>)}
          </View>
        </View>
      </View>
    );
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
  changeModal: (value: { awesome: string }) => dispatch(actions.changeRunningModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AwsomeView);
