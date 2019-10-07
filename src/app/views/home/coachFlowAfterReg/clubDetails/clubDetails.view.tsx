import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Keyboard } from 'react-native';
import clubDetails from './clubDetails.style';
import * as actions from '../../../../redux/actions/createGroup.actions';
import { TextInputMask } from 'react-native-masked-text';
import TranslateService from '../../../../services/translation.service';

interface State {
  arrayOfDays: any[];
  newArr: any[];
  openTime: string;
  closeTime: string;
  isFocused: boolean;
  error: any,
  keyboardIsOpen: boolean
}

interface Props {
  nextStepNumber: (step: number) => void;
}

class ClubDetailsView extends Component<Props, State> {
  private translateMethod: any;
  private languageSubscription: any;
  public keyboardDidShowListener: any;
  public keyboardDidHideListener: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);
    this.translationService = new TranslateService();
    this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
      this.forceUpdate();
      this.translateMethod = res
    });
    this.state = {
      arrayOfDays: [
        { key: 'S', value: 'Sunday' },
        { key: 'M', value: 'Monday' },
        { key: 'T', value: 'Tuesday' },
        { key: 'W', value: 'Wednesday' },
        { key: 'T', value: 'Thursday' },
        { key: 'F', value: 'Friday' },
        { key: 'S', value: 'Saturday' },
      ],
      newArr: [],
      openTime: '',
      closeTime: '',
      isFocused: false,
      keyboardIsOpen: false,
      error: {
        openTimeError: '',
      }
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }




componentWillUnmount () {
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();
  this.languageSubscription.unsubscribe();
}

_keyboardDidShow = () => {
  this.setState({
    keyboardIsOpen: true
  })
}

_keyboardDidHide = () => {
  this.setState({
    keyboardIsOpen: false
  })
}


  public onSubmit = (value: any) => {
    const re=/^0[0-9]|1[0-9]|2[0-3]:[0-5][0-9]$/;
    if(re.test(value)) {
      this.props.nextStepNumber(4);
    } else {
      this.setState({
        error: {
          openTimeError: 'Has error'
        }
      })
    }
  };

  changeFocus = () => {
    this.setState({
      isFocused: !this.state.isFocused
    })
  }

  public selectWorkingDays = async (item: any) => {
    if (this.state.newArr.indexOf(item) !== -1) {
      return;
    } else {
      await this.setState(({ newArr }) => {
        newArr: newArr.push(item);
      });
    }
    this.forceUpdate();
  };

  render() {
    return (
      <View style={ {position: 'relative' }}>
        <Text style={clubDetails.title}>Club Details</Text>
        <View style={this.state.keyboardIsOpen == true ? clubDetails.keyboard : clubDetails.clubDetailsWrapper}>
          <Text style={clubDetails.titleTime}>  {this.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubWorkingDays')} </Text>
          <View style={clubDetails.workingDaysWrapper}>
            {this.state.arrayOfDays.map((item, index) => (
              <TouchableOpacity
                style={
                  this.state.newArr.indexOf(item.value) == -1
                    ? clubDetails.daysBtnDefault
                    : clubDetails.daysBtnSelected
                }
                onPress={() => this.selectWorkingDays(item.value)}
                key={index}>
                <Text
                  style={
                    this.state.newArr.indexOf(item.value) == -1
                      ? clubDetails.daysBtnTextDefault
                      : clubDetails.daysBtnTextSelected
                  }>
                  {item.key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={clubDetails.titleTime}>{this.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubWorkingHours')}</Text>
          <View style={clubDetails.inputsWrapper}>
            <View style={clubDetails.inputWidth}>
              <Text style={clubDetails.inputLabel}>Opening time</Text>
              <TextInputMask
                onSubmitEditing={Keyboard.dismiss}
                type={'datetime'}
                style={this.state.isFocused ? clubDetails.inputTimeFocused : clubDetails.inputTime}
                options={{
                  format: 'HH:mm'
                }}
                onFocus={this.changeFocus}
                value={this.state.openTime}
                onChangeText={(time) => this.setState({ openTime: time })}
              />
              <Text style={{color: 'red'}}>
                {this.state.error.openTimeError}
              </Text>
            </View>
            <View style={[clubDetails.inputWidth, { marginRight: 0 }]}>
              <Text style={clubDetails.inputLabel}>Closing time</Text>
              <TextInputMask
                type={'datetime'}
                style={this.state.isFocused ? clubDetails.inputTimeFocused : clubDetails.inputTime}
                onFocus={this.changeFocus}
                options={{
                  format: 'HH:mm'
                }}
                value={this.state.closeTime}
                onChangeText={(time) => this.setState({ closeTime: time })}
              />
            </View>
          </View>

          <View style={clubDetails.wrapperBtn}>
            <TouchableHighlight
              style={clubDetails.nextBtn}
              onPress={() => this.onSubmit(this.state.openTime)}
            >
              <Text style={clubDetails.nextBtnText}>Next</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (step: number) => dispatch(actions.changeStep(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClubDetailsView);
