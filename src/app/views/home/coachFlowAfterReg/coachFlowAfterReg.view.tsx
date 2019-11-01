import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import CreateClubView from './createClub/createClub.view';
import CoachClubLogoView from './coachClubLogo/coachClubLogo.view'
import coachFlowAfterReg from './coachFlowAfterReg.style';
import Wizard from "../../../components/wizard/wizard.view";
import CoachLocationAreaView from './coachLocationArea/coachLocationArea.view';
import ClubDetailsView from './clubDetails/clubDetails.view';
import TranslateService from '../../../services/translation.service';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
interface State {
  translateMethod: (str: string) => string;
}

interface Props {
  currentGroupStep: number,
  userName: string,
  navigation:  NavigationScreenProp<NavigationState, NavigationParams>
}

class CoachFlowAfterRegView extends Component<Props, State> {
  private destroyed: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);
    this.state = {
      translateMethod: (str: string) => '',
    }
  }

  componentWillMount() {
    this.translationService = new TranslateService();
    this.destroyed = new Subject();
    this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
      this.setState({
        translateMethod: res,
      })
    });
  }



  componentWillUnmount() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  render() {
    return (
      <View>
        {
          this.props.currentGroupStep === 1 ?
            <View style={coachFlowAfterReg.titles}>
              <Text style={coachFlowAfterReg.welcome}>
                {this.state.translateMethod('translation.common.hi')} {this.props.userName} & {this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.welcome')}
              </Text>
              <Text style={coachFlowAfterReg.createClub}>{this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.title')}</Text>
              <Text style={coachFlowAfterReg.pleaseFill}>
                {this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.text')}
              </Text>
            </View> :
            null
        }
        <View style={coachFlowAfterReg.clubPage}>
          <Wizard
            title={this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.actionText')}
            numberOfSteps={4}
            currentStep={this.props.currentGroupStep}

          />
          {
            this.props.currentGroupStep === 1 ? <CreateClubView /> :
              this.props.currentGroupStep === 2 ? <CoachClubLogoView /> :
                this.props.currentGroupStep === 3 ? <CoachLocationAreaView /> :
                  this.props.currentGroupStep === 4 ? <ClubDetailsView /> :
                    null
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentGroupStep: state.CreateGroupReducer.currentGroupStep,
  userName: state.AuthReducer.userData.userName,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachFlowAfterRegView);
