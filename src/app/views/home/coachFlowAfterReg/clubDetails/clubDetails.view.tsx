import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Alert, Keyboard } from 'react-native';
import clubDetails from './clubDetails.style';
import * as actions from '../../../../redux/actions/createGroup.actions';
import { TextInputMask } from 'react-native-masked-text';
import TranslateService from '../../../../services/translation.service';
import * as translationReplaceHelper from '../../../../shared/helpers/translationReplace.helper';
import ClubDataModel from '../../../../shared/models/clubData.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface State {
  arrayOfDays: any[];
  weekWorkDays: any[];
  openTime: string;
  closeTime: string;
  isFocused: boolean;
  error: any;
  keyboardIsOpen: boolean;
  translateMethod: (str: string) => string;
}

interface Props {
  nextStepNumber: (clubData: any) => void;
  registerGroup: (clubRegisterData: ClubDataModel) => void;
  clubName: string;
  clubDTO: any;
}

class ClubDetailsView extends Component<Props, State> {

  private destroyed: any;
  public keyboardDidShowListener: any;
  public keyboardDidHideListener: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);
    this.translationService = new TranslateService();

    this.state = {
      arrayOfDays: [
        { key: 'S', value: 1 },
        { key: 'M', value: 2 },
        { key: 'T', value: 3 },
        { key: 'W', value: 4 },
        { key: 'T', value: 5 },
        { key: 'F', value: 6 },
        { key: 'S', value: 7 },
      ],
      weekWorkDays: [],
      openTime: '',
      closeTime: '',
      isFocused: false,
      keyboardIsOpen: false,
      translateMethod: (str: string) => '',
      error: {
        openTimeError: '',
      }
    };
  }

  componentWillMount() {
    this.destroyed = new Subject();
    this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
      this.setState({
        translateMethod: res,
      })
    });
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }




  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    this.destroyed.next();
    this.destroyed.complete();
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
  public setWorkTime = (time: string) => {
    return (+time.substr(0,2) * 60) + (+time.substr(3,5));
  }
  public onSubmit = (value: any) => {

    Alert.alert('end of the flow');
    const clubTime = {
      startOfDay: this.state.openTime,
      endOfDay: this.state.closeTime,
      weekWorkDays: this.state.weekWorkDays,
    }

    const re = /^0[0-9]|1[0-9]|2[0-3]:[0-5][0-9]$/;
    if (re.test(value)) {
      const clubData = {
        name: this.props.clubDTO.name,
        code: "st",
        lat: this.props.clubDTO.lat,
        lng: this.props.clubDTO.lng,
        radius: this.props.clubDTO.radius,
        imgPath: this.props.clubDTO.imgPath,
        weekWorkDays: this.state.weekWorkDays,
        startOfDay: this.setWorkTime(this.state.openTime),
        endOfDay: this.setWorkTime(this.state.closeTime),
        firstDayInWeek: Math.min.apply(Math, this.state.weekWorkDays)
      }
      this.props.registerGroup(clubData);
      this.props.nextStepNumber(clubTime);
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
    if (this.state.weekWorkDays.indexOf(item) !== -1) {
      let newWeekForDays = this.state.weekWorkDays;
      newWeekForDays.splice(this.state.weekWorkDays.indexOf(item), 1);
      this.setState({
        weekWorkDays: newWeekForDays,
      })
      return;
    } else {
      let newWeekForDays = this.state.weekWorkDays;
      newWeekForDays.push(item);
      await this.setState({
        weekWorkDays: newWeekForDays
      });
    }

  };

  render() {
    return (
      <View style={{ position: 'relative' }}>
        <Text style={clubDetails.title}>Club Details</Text>
        <View style={clubDetails.clubDetailsWrapper}>
          <Text style={clubDetails.titleTime}>  {translationReplaceHelper.translationReplace(this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubWorkingDays'), this.props.clubName)} </Text>
          <View style={clubDetails.workingDaysWrapper}>
            {this.state.arrayOfDays.map((item, index) => (
              <TouchableOpacity
                style={
                  this.state.weekWorkDays.indexOf(item.value) == -1
                    ? clubDetails.daysBtnDefault
                    : clubDetails.daysBtnSelected
                }
                onPress={() => this.selectWorkingDays(item.value)}
                key={index}>
                <Text
                  style={
                    this.state.weekWorkDays.indexOf(item.value) == -1
                      ? clubDetails.daysBtnTextDefault
                      : clubDetails.daysBtnTextSelected
                  }>
                  {item.key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={clubDetails.titleTime}>{translationReplaceHelper.translationReplace(this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubWorkingHours'), this.props.clubName)}</Text>
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
              <Text style={{ color: 'red' }}>
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
            <TouchableOpacity
              style={clubDetails.nextBtn}
              onPress={() => this.onSubmit(this.state.openTime)}
            >
              <Text style={clubDetails.nextBtnText}>Next</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  clubName: state.CreateGroupReducer.clubDTO.name,
  clubData: state.CreateGroupReducer.clubDTO,
  clubDTO: state.CreateGroupReducer.clubDTO,
});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (clubData: any) => dispatch(actions.changeStep(clubData)),
  registerGroup: (clubRegisterData: ClubDataModel) => dispatch(actions.registerGroup(clubRegisterData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClubDetailsView);
