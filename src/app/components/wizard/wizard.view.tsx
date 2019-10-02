import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import wizard from './wizard.style';

interface State {}

interface Props {
  currentStep: number;
  title: string;
  numberOfSteps: number;
}

class Wizard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
  }

  render() {
    const renderArray =[...Array(this.props.numberOfSteps).keys()];
    return (

      <View style={wizard.wizardWrapper}>
        <View style={wizard.fullWrapper}>
          <Text style={wizard.titleNew}>{this.props.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>

          {renderArray.map((item, index) =>
            <View style={wizard.dotWrapper} key={++index}>
            <View
              style={
                this.props.currentStep ===  index
                  ? wizard.activeDot
                  : this.props.currentStep >index
                  ? wizard.successDot
                  : wizard.nextDot
              }></View>
          </View>)}

          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wizard);
