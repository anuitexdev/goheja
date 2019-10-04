import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions/modal.actions';
import {Text, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import threshold from './threshold.style';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

interface State {
  activeInputNumber: number;
  thresholdValue: string;
  unitsOfSeconds: string;
  unitsOfMinutes: string;
  dozentsOfSeconds: string;
  dozentsOfMinutes: string;
}

interface Props {
  modalClose: () => void;
  modalOpen: () => void;
  changeModal: (value: {threshold: string}) => void;
  state: any;
}

class ThresholdView extends Component<Props, State> {
    private inputDozentsOfMinutes: any;
    private inputUnitsOfMinutes: any;
    private inputDozentsOfSeconds: any;
    private inputUnitsOfSeconds: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      activeInputNumber: 0,
      thresholdValue: '',
      unitsOfMinutes: '0',
      unitsOfSeconds: '0',
      dozentsOfMinutes: '0',
      dozentsOfSeconds: '0',
    };
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
    const fullTime = moment(value, 'mmss');
    const formatTime = fullTime.format('mm:ss');
    return formatTime;
  }

  public setValue = async (input: any, value: any) => {
    await this.setState({
      ...value,
    });
    input.focus();

    const summaryValue = String(
        this.state.dozentsOfMinutes +
        this.state.unitsOfMinutes +
        this.state.dozentsOfSeconds +
        this.state.unitsOfSeconds,
    );

    this.setState({
      thresholdValue: this.formatPaceTime(summaryValue),
    });
  };

  public hideModal = () => {
    this.props.modalClose();
  };

  public changeModal = () => {
    this.props.changeModal({threshold: this.state.thresholdValue});
  };

  render() {
    return (
      <View style={threshold.backDrop}>
        <TouchableWithoutFeedback onPress={this.hideModal}>
          <Icon style={threshold.showBtn} size={50} name={'ios-close'} />
        </TouchableWithoutFeedback>
        <View style={threshold.modalPage}>
          <TouchableWithoutFeedback onPress={this.hideModal}>
            <Text style={threshold.backBtn}>Back</Text>
          </TouchableWithoutFeedback>
          <Text style={threshold.title}>
            What’s your{'\n'}
            Swimming Threshold Pace
          </Text>
          <View style={threshold.fullComponent}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref={ref => (this.inputDozentsOfMinutes = ref)}
                  placeholder="0"
                  onFocus={() => this.changeFocus(1)}
                  keyboardType={'number-pad'}
                  maxLength={1}
                  style={
                    this.state.activeInputNumber === 1
                      ? threshold.focusInput
                      : threshold.infoInput
                  }
                  onChangeText={dozentsOfMinutes =>
                    this.setValue(this.inputUnitsOfMinutes, {dozentsOfMinutes})
                  }></TextInput>
                <TextInput
                  placeholder="0"
                  ref={ref => (this.inputUnitsOfMinutes = ref)}
                  maxLength={1}
                  keyboardType={'number-pad'}
                  onFocus={() => this.changeFocus(2)}
                  onChangeText={unitsOfMinutes =>
                    this.setValue(this.inputDozentsOfSeconds, {unitsOfMinutes})
                  }
                  style={[
                    this.state.activeInputNumber === 2
                      ? threshold.focusInput
                      : threshold.infoInput,
                    {marginRight: 8},
                  ]}></TextInput>
              </View>
              <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13}}>
                Min
              </Text>
            </View>
            <View style={threshold.colonWrapper}>
              <Text style={threshold.colon}>:</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref={ref => (this.inputDozentsOfSeconds = ref)}
                  style={[
                    this.state.activeInputNumber === 3
                      ? threshold.focusInput
                      : threshold.infoInput,
                    {marginLeft: 8},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  keyboardType={'number-pad'}
                  onChangeText={dozentsOfSeconds =>
                    this.setValue(this.inputUnitsOfSeconds, {dozentsOfSeconds})
                  }
                  onFocus={() => this.changeFocus(3)}></TextInput>
                <TextInput
                  ref={ref => (this.inputUnitsOfSeconds = ref)}
                  style={[
                    this.state.activeInputNumber === 4
                      ? threshold.focusInput
                      : threshold.infoInput,
                    {marginRight: 0},
                  ]}
                  placeholder="0"
                  keyboardType={'number-pad'}
                  maxLength={1}
                  onChangeText={unitsOfSeconds =>
                    this.setValue(this.inputUnitsOfSeconds, {unitsOfSeconds})
                  }
                  onFocus={() => this.changeFocus(4)}></TextInput>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>/100m</Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#99a8af',
                  marginTop: 13,
                  marginRight: 24,
                }}>
                Sec
              </Text>
            </View>
          </View>

          <View style={threshold.footerBtns}>
            <TouchableWithoutFeedback onPress={this.changeModal}>
              <Text style={threshold.skipBtn}>Skip ></Text>
            </TouchableWithoutFeedback>
            {this.state.thresholdValue === '' ? (
              <TouchableWithoutFeedback onPress={this.changeModal}>
              <View style={threshold.nextBtn}>
                <Text style={threshold.nextBtnText}>I don't know</Text>
              </View>
            </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={this.changeModal}>
                <View style={threshold.nextBtn}>
                  <Text style={threshold.nextBtnText}>Next</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  state: state.ModalReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
  modalClose: () => dispatch(actions.modalClose()),
  modalOpen: () => dispatch(actions.modalOpen()),
  changeModal: (value: {threshold: string}) =>
    dispatch(actions.changeSwimmingModal(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThresholdView);
