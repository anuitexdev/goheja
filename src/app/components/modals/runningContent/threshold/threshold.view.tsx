import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions/modal.actions';
import { Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import threshold from './threshold.style';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import TranslateService from '../../../../services/translation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface State {
  activeInputNumber: number;
  paceValue: string;
  unitsOfSeconds: string;
  unitsOfMinutes: string;
  dozentsOfSeconds: string;
  dozentsOfMinutes: string;
}

interface Props {
  modalClose: () => void;
  modalOpen: () => void;
  changeModal: (value: { pace: string }) => void;
}

class ThresholdView extends Component<Props, State> {
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
      paceValue: '',
      unitsOfMinutes: '0',
      unitsOfSeconds: '0',
      dozentsOfMinutes: '0',
      dozentsOfSeconds: '0',
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

  public hideModal = () => {
    this.props.modalClose();
  };

  public changeModal = () => {
    this.props.changeModal({ pace: this.state.paceValue });
  };

  public formatPaceTime(value: string) {
    const fullTime = moment(value, 'mmss');
    const formatTime = fullTime.format('mm:ss')
    return formatTime;
  }

  public setValue = async (input: any, value: any) => {
    await this.setState({
      ...value,
    });
    input.focus();

    const summaryValue = String(
      this.state.dozentsOfMinutes + this.state.unitsOfMinutes + this.state.dozentsOfSeconds + this.state.unitsOfSeconds,
    );


    this.setState({
      paceValue: this.formatPaceTime(summaryValue),
    });
  };

  render() {
    return (
      <View style={threshold.backDrop}>
        <TouchableWithoutFeedback onPress={this.hideModal}>
          <Icon style={threshold.showBtn} size={50} name={'ios-close'} />
        </TouchableWithoutFeedback>
        <View style={threshold.modalPage}>
          <TouchableWithoutFeedback onPress={this.hideModal}>
            <Text style={threshold.backBtn}> {this.translateMethod('translation.common.back')}</Text>
          </TouchableWithoutFeedback>
          <Text style={threshold.title}>
            {this.translateMethod('translation.exposeIDE.views.userSetSports.runningThresholdPace')}
          </Text>
          <Text style={threshold.subtitle}>
            {this.translateMethod('translation.exposeIDE.views.userSetSports.whatsYourRunningThresholdPace')}
          </Text>

          <View style={threshold.fullComponent}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  ref={ref => (this.inputDozentsOfMinutes = ref)}
                  placeholder="0"
                  keyboardType={'number-pad'}
                  onFocus={() => this.changeFocus(1)}
                  maxLength={1}
                  style={
                    this.state.activeInputNumber === 1
                      ? threshold.focusInput
                      : threshold.infoInput
                  }
                  onChangeText={(dozentsOfMinutes) => this.setValue(this.inputUnitsOfMinutes, { dozentsOfMinutes })}
                >
                </TextInput>
                <TextInput
                  placeholder="0"
                  ref={ref => (this.inputUnitsOfMinutes = ref)}
                  maxLength={1}
                  keyboardType={'number-pad'}
                  onFocus={() => this.changeFocus(2)}
                  onChangeText={(unitsOfMinutes) => this.setValue(this.inputDozentsOfSeconds, { unitsOfMinutes })}
                  style={[
                    this.state.activeInputNumber === 2
                      ? threshold.focusInput
                      : threshold.infoInput,
                    { marginRight: 8 },
                  ]}></TextInput>
              </View>
              <Text style={{ fontSize: 20, color: '#99a8af', marginTop: 13 }}>
                {this.translateMethod('translation.common.min')}
              </Text>
            </View>
            <View style={threshold.colonWrapper}>
              <Text style={threshold.colon}>:</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  ref={ref => (this.inputDozentsOfSeconds = ref)}
                  style={[
                    this.state.activeInputNumber === 3
                      ? threshold.focusInput
                      : threshold.infoInput,
                    { marginLeft: 8 },
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onChangeText={(dozentsOfSeconds) => this.setValue(this.inputUnitsOfSeconds, { dozentsOfSeconds })}
                  onFocus={() => this.changeFocus(3)}
                  keyboardType={'number-pad'}></TextInput>
                <TextInput
                  ref={ref => (this.inputUnitsOfSeconds = ref)}
                  style={[
                    this.state.activeInputNumber === 4
                      ? threshold.focusInput
                      : threshold.infoInput,
                    { marginRight: 0 },
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onChangeText={(unitsOfSeconds) => this.setValue(this.inputUnitsOfSeconds, { unitsOfSeconds })}
                  onFocus={() => this.changeFocus(4)}
                  keyboardType={'number-pad'}></TextInput>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{ fontWeight: 'bold' }}>/km</Text>
                </View>
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

          <View style={threshold.footerBtns}>
            <TouchableWithoutFeedback onPress={this.changeModal}>
              <Text style={threshold.skipBtn}>{this.translateMethod('translation.common.skip')} ></Text>
            </TouchableWithoutFeedback>
            {
              this.state.paceValue === '' ? (
                <TouchableWithoutFeedback onPress={this.changeModal}>
                  <View style={threshold.nextBtn}>
                    <Text style={threshold.nextBtnText}>  {this.translateMethod('translation.common.iDontKnow')}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                  <TouchableWithoutFeedback onPress={this.changeModal}>
                    <View style={threshold.nextBtn}>
                      <Text style={threshold.nextBtnText}>{this.translateMethod('translation.common.next')}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  modalClose: () => dispatch(actions.modalClose()),
  modalOpen: () => dispatch(actions.modalOpen()),
  changeModal: (value: { pace: string }) =>
    dispatch(actions.changeRunningModal(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThresholdView);
