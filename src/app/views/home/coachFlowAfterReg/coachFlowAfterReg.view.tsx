import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, Keyboard} from 'react-native';
import CreateClubView from './createClub/createClub.view';
import CoachClubLogoView from './coachClubLogo/coachClubLogo.view'
import coachFlowAfterReg from './coachFlowAfterReg.style';
import Wizard from "../../../components/wizard/wizard.view";
import CoachLocationAreaView from './coachLocationArea/coachLocationArea.view';
import ClubDetailsView from './clubDetails/clubDetails.view';
import TranslateService from '../../../services/translation.service';
interface State {

}

interface Props {
    currentGroupStep: any,
    userName: string,
}

class CoachFlowAfterRegView extends Component<Props, State> {
  private languageSubscription: any;
  private translateMethod: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);    
  }

  componentWillMount() {
    this.translationService = new TranslateService();
    this.languageSubscription = this.translationService.getTranslateMethod().subscribe(res => {
    this.forceUpdate();
    this.translateMethod = res
    });
}



componentWillUnmount () {
  this.languageSubscription.unsubscribe();
}

  render() {
    return (
      <View>
       {
        this.props.currentGroupStep === 1 ? 
        <View style={coachFlowAfterReg.titles}>
          <Text style={coachFlowAfterReg.welcome}>
          {this.translateMethod('translation.common.hi')} {this.props.userName} & {this.translateMethod('translation.exposeIDE.views.regestrationNewClub.welcome')}
          </Text>
          <Text style={coachFlowAfterReg.createClub}>{this.translateMethod('translation.exposeIDE.views.regestrationNewClub.title')}</Text>
          <Text style={coachFlowAfterReg.pleaseFill}>
          {this.translateMethod('translation.exposeIDE.views.regestrationNewClub.text')}
          </Text>
        </View> :
        null
      }
      <View style={coachFlowAfterReg.clubPage}>
          <Wizard 
          title={this.translateMethod('translation.exposeIDE.views.regestrationNewClub.actionText')}
          numberOfSteps={4}
          currentStep={this.props.currentGroupStep}

          />
          {
              this.props.currentGroupStep === 1 ? <CreateClubView /> :
              this.props.currentGroupStep === 2 ? <CoachClubLogoView/> : 
              this.props.currentGroupStep === 3 ? <CoachLocationAreaView/> :
              this.props.currentGroupStep === 4 ? <ClubDetailsView/> :
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
