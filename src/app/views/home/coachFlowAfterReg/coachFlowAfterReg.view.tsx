import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import CreateClubView from './createClub/createClub.view';
import CoachClubLogoView from './coachClubLogo/coachClubLogo.view'
import coachFlowAfterReg from './coachFlowAfterReg.style';
import Wizard from "../../../components/wizard/wizard.view";
import CoachLocationAreaView from './coachLocationArea/coachLocationArea.view';
import ClubDetailsView from './clubDetails/clubDetails.view';
interface State {

}

interface Props {
    currentGroupStep: any
}

class CoachFlowAfterRegView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(this.props.currentGroupStep);
    
  }

  render() {
    return (
      <View>
        {
          this.props.currentGroupStep === 1 ? 
          <View style={coachFlowAfterReg.titles}>
            <Text style={coachFlowAfterReg.welcome}>
              Hi Alona & Welcome to Go-Heja
            </Text>
            <Text style={coachFlowAfterReg.createClub}>Let's create your Club</Text>
            <Text style={coachFlowAfterReg.pleaseFill}>
              Please fill the form below for the{'\n'}
              best Personalisation and team spirit
            </Text>
          </View> :
          null
        }
        <View style={coachFlowAfterReg.clubPage}>
            <Wizard 
            title="Create your Club"
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
    currentGroupStep: state.CreateGroupReducer.currentGroupStep
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachFlowAfterRegView);
