import React, {Component} from 'react';
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import createClubStyle from './createClub.style';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import * as actions from '../../../../redux/actions/createGroup.actions';
import TranslateService from '../../../../services/translation.service';

interface State {
  placeholder: string;
}

interface Props {
  nextStepNumber: (step: number) => void;
}

class CreateClubView extends Component<Props, State> {
  private translateMethod: any;
  private languageSubscription: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);
    this.state = {
      placeholder: '',
    };
  }

  componentWillUnmount() {
    this.languageSubscription.unsubscribe();
  }

  componentWillMount() {
    this.translationService = new TranslateService();
    this.languageSubscription = this.translationService
      .getTranslateMethod()
      .subscribe(res => {
        this.forceUpdate();
        this.translateMethod = res;
      });
  }

  public onSubmit() {
    this.props.nextStepNumber(2);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={createClubStyle.clubNameInput}>
              <Text style={createClubStyle.titleName}>
                {this.translateMethod(
                  'translation.exposeIDE.views.regestrationNewClub.clubName',
                )}
              </Text>
              <View style={createClubStyle.inputWrapper}>
                <TextInput
                  style={[
                    this.state.placeholder.length == 0
                      ? {fontStyle: 'italic'}
                      : {fontStyle: 'normal'},
                    createClubStyle.inputClub,
                  ]}
                  placeholder={this.translateMethod(
                    'translation.exposeIDE.views.regestrationNewClub.caption',
                  )}
                  onChangeText={txt => this.setState({placeholder: txt})}
                  value={this.state.placeholder}></TextInput>
                <TouchableOpacity
                  style={createClubStyle.nextBtn}
                  onPress={() => this.onSubmit()}>
                  <Text style={createClubStyle.nextBtnText}>
                    {this.translateMethod('translation.common.next')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
)(CreateClubView);
