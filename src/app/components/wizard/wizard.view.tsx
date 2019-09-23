import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import wizard from './wizard.style';

interface State {}

interface Props {
  currentStep: number;
  title: string;
}

class Wizard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  public elements = ['one', 'two', 'three'];

  render() {
    return (
      // <View style={wizard.steps}>

      //     <View style={wizard.stepsLine}></View>

      //     <View style={this.props.currentStep === 1 ? wizard.activeStep : this.props.currentStep !== 1 ? wizard.completeStep : wizard.step}>
      //         {
      //             this.props.currentStep > 1 ?
      //             <View style={wizard.check}>
      //             </View> :
      //             <Text style={wizard.text}>
      //             1
      //             </Text>
      //         }
      //     </View>

      //     <View style={this.props.currentStep === 2 ? wizard.activeStep : this.props.currentStep >= 3 ? wizard.completeStep : wizard.step}>
      //         {
      //             this.props.currentStep > 2 ?
      //             <View style={wizard.check}>
      //             </View> :
      //             <Text style={wizard.text}>
      //             2
      //             </Text>
      //         }
      //     </View>

      //     <View style={this.props.currentStep === 3 ? wizard.activeStep : this.props.currentStep >= 4 ? wizard.completeStep : wizard.step}>
      //         {
      //             this.props.currentStep > 3 ?
      //             <View style={wizard.check}>
      //             </View> :
      //             <Text style={wizard.text}>
      //             3
      //             </Text>
      //         }
      //     </View>

      //     <View style={this.props.currentStep === 4 ? wizard.activeStep : this.props.currentStep === 5 ? wizard.completeStep : wizard.step}>
      //         {
      //             this.props.currentStep > 4 ?
      //             <View style={wizard.check}>
      //             </View> :
      //             <Text
      //             style={wizard.text}>
      //             4
      //             </Text>
      //         }
      //     </View>
      // </View>

      <View style={wizard.wizardWrapper}>
        <View style={wizard.fullWrapper}>
          <Text style={wizard.titleNew}>{this.props.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={wizard.dotWrapper}>
              <View
                style={
                  this.props.currentStep === 1
                    ? wizard.activeDot
                    : this.props.currentStep > 1
                    ? wizard.successDot
                    : wizard.nextDot
                }></View>
            </View>

            <View style={wizard.dotWrapper}>
              <View
                style={
                  this.props.currentStep === 2
                    ? wizard.activeDot
                    : this.props.currentStep > 2
                    ? wizard.successDot
                    : wizard.nextDot
                }></View>
            </View>

            <View style={wizard.dotWrapper}>
              <View
                style={
                  this.props.currentStep === 3
                    ? wizard.activeDot
                    : this.props.currentStep > 3
                    ? wizard.successDot
                    : wizard.nextDot
                }></View>
            </View>

            <View style={wizard.dotWrapper}>
              <View
                style={
                  this.props.currentStep === 4
                    ? wizard.activeDot
                    : this.props.currentStep > 4
                    ? wizard.successDot
                    : wizard.nextDot
                }></View>
            </View>

            <View style={[wizard.dotWrapper, {marginRight: 0}]}>
              <View
                style={
                  this.props.currentStep === 5
                    ? wizard.activeDot
                    : this.props.currentStep > 5
                    ? wizard.successDot
                    : wizard.nextDot
                }></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentStep: state.AuthReducer.currentStep,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wizard);
