import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions/modal.actions';
import {Text, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import awsome from './awsome.style';
import Icon from 'react-native-vector-icons/Ionicons';

interface State {
  activeInputNumber: number;
}

interface Props {
  modalVisible: boolean;
  modalNumber: number;
  modalClose: () => void;
  modalOpen: () => void;
  changeModal: (value: number) => void;
}

class AwsomeView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeInputNumber: 0,
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

  public hideModal = () => {
    this.props.modalClose();
  };

  public changeModal = () => {
    console.log('test');

    this.props.changeModal(5);
  };

  render() {
    return (
      <View
        style={awsome.backDrop}>
        <TouchableWithoutFeedback onPress={this.hideModal}>
          <Icon style={awsome.showBtn} size={50} name={'ios-close'} />
        </TouchableWithoutFeedback>
        <View style={awsome.modalPage}>
          <TouchableWithoutFeedback onPress={this.hideModal}>
            <Text style={awsome.backBtn}>Back</Text>
          </TouchableWithoutFeedback>
          <Text style={awsome.title}>
            WOW!{'\n'}
            That’s awsome!
          </Text>
          <Text style={awsome.subtitle}>
            How long did the ½ Marathon took you?
          </Text>

          <View style={awsome.fullComponent}>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref="input1"
                  placeholder="0"
                  onFocus={() => this.changeFocus(1)}
                  maxLength={1}
                  style={
                    this.state.activeInputNumber === 1
                      ? awsome.focusInput
                      : awsome.infoInput
                  }
                  onChangeText={() => this.refs['input2'].focus()}></TextInput>
                <TextInput
                  placeholder="0"
                  ref="input2"
                  maxLength={1}
                  onFocus={() => this.changeFocus(2)}
                  onChangeText={() => this.refs['input3'].focus()}
                  style={[
                    this.state.activeInputNumber === 2
                      ? awsome.focusInput
                      : awsome.infoInput,
                    {marginRight: 8},
                  ]}></TextInput>
              </View>
              <Text style={{fontSize: 20, color: '#99a8af', marginTop: 13}}>
                H
              </Text>
            </View>
            <View style={awsome.colonWrapper}>
              <Text style={awsome.colon}>:</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref="input3"
                  style={[
                    this.state.activeInputNumber === 3
                      ? awsome.focusInput
                      : awsome.infoInput,
                    {marginLeft: 8},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onChangeText={() => this.refs['input4'].focus()}
                  onFocus={() => this.changeFocus(3)}></TextInput>
                <TextInput
                  ref="input4"
                  style={[
                    this.state.activeInputNumber === 3
                      ? awsome.focusInput
                      : awsome.infoInput,
                    {marginRight: 0},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onFocus={() => this.changeFocus(3)}></TextInput>
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
                Min
              </Text>
            </View>
            <View style={awsome.colonWrapper}>
              <Text style={awsome.colon}>:</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  ref="input3"
                  style={[
                    this.state.activeInputNumber === 3
                      ? awsome.focusInput
                      : awsome.infoInput,
                    {marginLeft: 8},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onChangeText={() => this.refs['input4'].focus()}
                  onFocus={() => this.changeFocus(3)}></TextInput>
                <TextInput
                  ref="input4"
                  style={[
                    this.state.activeInputNumber === 3
                      ? awsome.focusInput
                      : awsome.infoInput,
                    {marginRight: 0},
                  ]}
                  placeholder="0"
                  maxLength={1}
                  onFocus={() => this.changeFocus(3)}></TextInput>
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

          <View style={awsome.footerBtns}>
            <TouchableOpacity>
              <Text style={awsome.skipBtn}>Skip ></Text>
            </TouchableOpacity>
            {false ? (
              <TouchableOpacity style={awsome.nextBtn}>
                <Text style={awsome.nextBtnText}>I don't know</Text>
              </TouchableOpacity>
            ) : (
              <TouchableWithoutFeedback onPress={this.changeModal}>
                <View style={awsome.nextBtn}>
                  <Text style={awsome.nextBtnText}>Next</Text>
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
  modalVisible: state.ModalReducer.openModal,
  modalNumber: state.ModalReducer.runningModalNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
  modalClose: () => dispatch(actions.modalClose()),
  modalOpen: () => dispatch(actions.modalOpen()),
  changeModal: (value: number) => dispatch(actions.changeRunningModal(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AwsomeView);
