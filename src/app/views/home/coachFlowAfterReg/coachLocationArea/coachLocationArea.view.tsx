import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import coachLocationArea from './coachLocationArea.style';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import * as actions from '../../../../redux/actions/createGroup.actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddAddressModal from '../../../../components/modals/addAddress/addAddress.modal';

interface State {
  avatarSource: any;
  toggleAddressModal: boolean
}

interface Props {
    location: string,
    nextStepNumber: (step: number) => void,
    currentGroupStep: number
}

class CoachLocationAreaView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    debugger;
    this.state = {
      avatarSource: '',
      toggleAddressModal: false
    };
  }

  public showAddressModal = () => {
    this.setState({
        toggleAddressModal: !this.state.toggleAddressModal
    })
  }

  public hideAddressModal = (visible: boolean) => {
    this.setState({
        toggleAddressModal: visible,
    });
};

  public onSubmit = () => {
    this.props.nextStepNumber(4);
  };

  render() {
    return (
      <View style={coachLocationArea.mapPageWrapper}>
        <Text style={coachLocationArea.title}>Where usually Zen's teams{"\n"} are training ?</Text>
        <Text>
          {
            this.props.location
          }
        </Text>
       <View style={coachLocationArea.mapWrapper}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={coachLocationArea.map}
              region={{
                latitude: 49.993500,
                longitude: 36.230385,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              
              </MapView>
                <TouchableOpacity style={coachLocationArea.currentLocationBtn}>
                    <Icon   
                        style={{color: '#707B7F'}}
                        size={25}
                        name={'location-arrow'}
                    />
                    <Text style={coachLocationArea.currentLocationBtnText}>
                        Use my current location area
                    </Text>
                </TouchableOpacity>
       </View>
       <View style={coachLocationArea.addAddress}>
             <TouchableOpacity 
             style={coachLocationArea.addressBtn}
             onPress={this.showAddressModal}
             >
                <Text style={coachLocationArea.addressBtnText}>
                    Add Address Manually
                </Text>
             </TouchableOpacity> 
             <TouchableOpacity style={coachLocationArea.skipBtn}>
                <Text  style={coachLocationArea.skipBtnText}>
                    Skip
                </Text>
             </TouchableOpacity> 
       </View>
       <AddAddressModal 
            toggleAddressModal={this.state.toggleAddressModal}
            hideAddressModal={this.hideAddressModal}
            />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
    location: state.CreateGroupReducer.location,
    currentGroupStep: state.CreateGroupReducer.currentGroupStep
});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (step: number) => dispatch(actions.changeStep(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachLocationAreaView);
