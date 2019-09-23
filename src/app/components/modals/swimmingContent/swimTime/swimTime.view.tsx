import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions/modal.actions';
import {Text, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import swimtime from './swimTime.style';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalReducer from '../../../../redux/reducers/modal.reducer';

interface State {
  activeInputNumber: number;
  swimTimeValue: string;
  unitsOfSeconds: string;
  unitsOfMinutes: string;
  dozentsOfSeconds: string;
  dozentsOfMinutes: string;
}

interface Props {
  modalClose: () => void;
  modalOpen: () => void;
  changeModal: (value: {swimTime: string}) => void;
  state: any;
}

class SwimTimeView extends Component<Props, State> {
    private inputDozentsOfMinutes: any;
    private inputUnitsOfMinutes: any;
    private inputDozentsOfSeconds: any;
    private inputUnitsOfSeconds: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      activeInputNumber: 0,
      swimTimeValue: '',
      unitsOfSeconds: '0',
      unitsOfMinutes: '0',
      dozentsOfSeconds: '0',
      dozentsOfMinutes: '0',
    };

    console.log(this.props.state);
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
      swimTimeValue: this.formatPaceTime(summaryValue),
    });
  };

  public changeModal = () => {
    this.props.changeModal({swimTime: this.state.swimTimeValue});
  };

  render() {
    return (
      <View style={swimtime.backDrop}>
        <TouchableWithoutFeedback onPress={this.hideModal}>
          <Icon style={swimtime.showBtn} size={50} name={'ios-close'} />
        </TouchableWithoutFeedback>
        <View style={swimtime.modalPage}>
          <TouchableWithoutFeedback onPress={this.hideModal}>
            <Text style={swimtime.backBtn}>Back</Text>
          </TouchableWithoutFeedback>
          <Text style={swimtime.title}>
            What’s your best{'\n'}
            1000m Swim time?
          </Text>

          <View style={swimtime.fullComponent}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref={ref => (this.input1 = ref)}
                  placeholder="0"
                  onFocus={() => this.changeFocus(1)}
                  maxLength={1}
                  style={
                    this.state.activeInputNumber === 1
                      ? swimtime.focusInput
                      : swimtime.infoInput
                  }
                  onChangeText={(dozentsOfMinutes) =>
                    this.setValue(this.input2, {dozentsOfMinutes})
                  }></TextInput>
                <TextInput
                  placeholder="0"
                  ref={ref => (this.input2 = ref)}
                  maxLength={1}
                  onFocus={() => this.changeFocus(2)}
                  onChangeText={(unitsOfMinutes) =>
                    this.setValue(this.input3, {unitsOfMinutes})
                  }
                  style={[
                    this.state.activeInputNumber === 2
                      ? swimtime.focusInput
                      : swimtime.infoInput,
                    {marginRight: 8},
                  ]}></TextInput>
              </View>
              <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13}}>
                Min
              </Text>
            </View>
            <View style={swimtime.colonWrapper}>
              <Text style={swimtime.colon}>:</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref={ref => (this.input3 = ref)}
                  style={[
                    this.state.activeInputNumber === 3
                      ? swimtime.focusInput
                      : swimtime.infoInput,
                    {marginLeft: 8},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onChangeText={(dozentsOfSeconds) =>
                    this.setValue(this.input4, {dozentsOfSeconds})
                  }
                  keyboardType={'number-pad'}
                  onFocus={() => this.changeFocus(3)}></TextInput>
                <TextInput
                  ref={ref => (this.input4 = ref)}
                  style={[
                    this.state.activeInputNumber === 4
                      ? swimtime.focusInput
                      : swimtime.infoInput,
                    {marginRight: 0},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onChangeText={(unitsOfSeconds) =>
                    this.setValue(this.input4, {unitsOfSeconds})
                  }
                  keyboardType={'number-pad'}
                  onFocus={() => this.changeFocus(4)}></TextInput>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}></View>
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

          <View style={swimtime.footerBtns}>
            <TouchableOpacity>
              <Text style={swimtime.skipBtn}>Skip ></Text>
            </TouchableOpacity>
            {false ? (
              <TouchableOpacity style={swimtime.nextBtn}>
                <Text style={swimtime.nextBtnText}>I don't know</Text>
              </TouchableOpacity>
            ) : (
              <TouchableWithoutFeedback onPress={this.hideModal}>
                <View style={swimtime.nextBtn}>
                  <Text style={swimtime.nextBtnText}>Next</Text>
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
  changeModal: (value: {swimTime: string}) =>
    dispatch(actions.changeSwimmingModal(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwimTimeView);
