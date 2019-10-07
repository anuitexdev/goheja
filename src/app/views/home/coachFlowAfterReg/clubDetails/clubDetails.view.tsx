import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, TouchableHighlight, TouchableOpacityBase, Alert } from 'react-native';
import clubDetails from './clubDetails.style';
import * as actions from '../../../../redux/actions/createGroup.actions';
import { TextInputMask } from 'react-native-masked-text';
import TranslateService from '../../../../services/translation.service';
import * as translationReplaceHelper from '../../../../shared/helpers/translationReplace.helper';

interface State {
  arrayOfDays: any[];
  weekWorkDays: any[];
  openTime: string;
  closeTime: string;
  isFocused: boolean;
}

interface Props {
  nextStepNumber: (clubData: any) => void;
  clubName: string;
}

class ClubDetailsView extends Component<Props, State> {
  private translateMethod: any;
  private languageSubscription: any;
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
      weekWorkDays: [],
      openTime: '',
      closeTime: '',
      isFocused: false
    };
  }

  componentWillUnmount() {
    this.languageSubscription.unsubscribe();
  }

  public onSubmit = () => {
    Alert.alert('end of the flow');
    const clubTime = {
      startOfDay: this.state.openTime,
      endOfDay: this.state.closeTime,
      weekWorkDays: this.state.weekWorkDays,
    }
    this.props.nextStepNumber(clubTime);
  };

  changeFocus = () => {
    this.setState({
      isFocused: !this.state.isFocused
    })
  }

  public selectWorkingDays = async (item: any) => {
    if (this.state.weekWorkDays.indexOf(item) !== -1) {
      return;
    } else {
      await this.setState(({ weekWorkDays }) => {
        weekWorkDays: weekWorkDays.push(item);
      });
    }
    this.forceUpdate();
  };

  render() {
    return (
      <View style={{ position: 'relative' }}>
        <Text style={clubDetails.title}>Club Details</Text>
        <View style={clubDetails.clubDetailsWrapper}>
          <Text style={clubDetails.titleTime}>  {translationReplaceHelper.translationReplace(this.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubWorkingDays'), this.props.clubName)} </Text>
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
          <Text style={clubDetails.titleTime}>{translationReplaceHelper.translationReplace(this.translateMethod('translation.exposeIDE.views.regestrationNewClub.clubWorkingHours'), this.props.clubName)}</Text>
          <View style={clubDetails.inputsWrapper}>
            <View style={clubDetails.inputWidth}>
              <Text style={clubDetails.inputLabel}>Opening time</Text>
              <TextInputMask

                type={'datetime'}
                style={this.state.isFocused ? clubDetails.inputTimeFocused : clubDetails.inputTime}
                options={{
                  format: 'HH:mm'
                }}
                onFocus={this.changeFocus}
                value={this.state.openTime}
                onChangeText={(time) => this.setState({ openTime: time })}
              />
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
              onPress={this.onSubmit}
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
  clubName: state.CreateGroupReducer.clubData.clubName,
});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (clubData: any) => dispatch(actions.changeStep(clubData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClubDetailsView);
