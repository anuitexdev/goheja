import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, PermissionsAndroid, Alert} from 'react-native';
import coachLocationArea from './coachLocationArea.style';
import MapView, {PROVIDER_GOOGLE, Circle} from 'react-native-maps';
import * as actions from '../../../../redux/actions/createGroup.actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import AddAddressModal from '../../../../components/modals/addAddress/addAddress.modal';
import axiosInstance from '../../../../shared/interceptors/axios.interceptor';
import environment from '../../../../environments/environment';
import Slider from 'react-native-slider';
import Geolocation from 'react-native-geolocation-service';

interface State {
  avatarSource: any;
  toggleAddressModal: boolean;
  region: any;
  rangeValue: number;
  marker: any;
  editLocation: boolean;
}

interface Props {
  location: string;
  nextStepNumber: (step: number) => void;
}


export let request_location_runtime_permission = async () => {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      Alert.alert("Location Permission Granted.");
    }
    else {

      Alert.alert("Location Permission Not Granted");

    }
  } catch (err) {
    console.warn(err)
  }
}

class CoachLocationAreaView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      avatarSource: '',
      toggleAddressModal: false,
      region: {
        latitude: 49.9935,
        longitude: 36.230385,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      marker: {
        latitude: 49.9935,
        longitude: 36.230385,
      },
      rangeValue: 20,
      editLocation: false,
    };
  }



  public showAddressModal = () => {
    this.setState({
      toggleAddressModal: !this.state.toggleAddressModal,
    });
  };

  public hideAddressModal = (visible: boolean) => {
    this.setState({
      toggleAddressModal: visible,
    });
  };

  public onSubmit = () => {
    this.props.nextStepNumber(4);
  };

  public getLatLong = async (lat, long) => {
    await axiosInstance
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${environment.API_KEY}`,
      )
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  getCurrentLocation = async () => {
    await request_location_runtime_permission();
    Geolocation.getCurrentPosition(
      async (position) => {
        console.log(position);
        await this.setState({ 
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }
        })
      },
      (error) => { console.log(error); },
      { enableHighAccuracy: true, timeout: 30000 }
    )
    this.getLatLong(this.state.region.latitude, this.state.region.longitude);
  }

  componentWillMount = async () => {
    this.getCurrentLocation();
  }

  render() {
    return (
      <View style={coachLocationArea.mapPageWrapper}>
        <Text style={coachLocationArea.title}>
          Where usually Zen's teams{'\n'} are training ?
        </Text>
        <View style={coachLocationArea.mapWrapper}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={coachLocationArea.map}
            region={this.state.region}>
            {this.props.location != '' ? (
              <Circle
                radius={0 + this.state.rangeValue * 10}
                center={this.state.region}
                strokeColor={'rgba(136,197,254,.5)'}
                fillColor={'rgba(136,197,254,.5)'}
              />
            ) : null}
          </MapView>

          {this.props.location == '' ? (
            <TouchableOpacity style={coachLocationArea.currentLocationBtn} onPress={this.getCurrentLocation}>
              <Icon
                style={{color: '#707B7F'}}
                size={25}
                name={'location-arrow'}
              />
              <Text style={coachLocationArea.currentLocationBtnText}>
                Use my current location area
              </Text>
            </TouchableOpacity>
          ) : null}

          {
            this.props.location != '' ?
            (
              <View style={coachLocationArea.finalLocation}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{color: '#707B7F'}}
                    size={25}
                    name={'location-arrow'}
                  />
                  <Text style={coachLocationArea.finalLocationText}>
                    {this.props.location}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({editLocation: !this.state.editLocation})
                  }>
                  {this.state.editLocation == false ? (
                    <IconFeather
                      style={{color: '#707B7F'}}
                      size={24}
                      name={'edit-2'}
                    />
                  ) : (
                    <Text style={coachLocationArea.doneBtn}>Done</Text>
                  )}
                </TouchableOpacity>
              </View>
            ) : null 
          }
        </View>

        {this.props.location == '' ? (
          <View style={coachLocationArea.addAddress}>
            <TouchableOpacity
              style={coachLocationArea.addressBtn}
              onPress={this.showAddressModal}>
              <Text style={coachLocationArea.addressBtnText}>
                Add Address Manually
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={coachLocationArea.skipBtn}>
              <Text style={coachLocationArea.skipBtnText}>Skip</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {
          this.props.location != '' ? (
            <TouchableOpacity
              style={coachLocationArea.nextBtn}
              onPress={this.onSubmit}>
              <Text style={coachLocationArea.nextBtnText}>Next</Text>
            </TouchableOpacity>
          ) : null
        }

        {this.state.editLocation == true ? (
          <View style={coachLocationArea.range}>
            <Text style={coachLocationArea.radiusText}>
              Radius from selected location
            </Text>
            <View style={coachLocationArea.sliderWrapper}>
              <Slider
                style={coachLocationArea.rangeSlider}
                minimumValue={0}
                maximumValue={40}
                minimumTrackTintColor="#007AFF"
                maximumTrackTintColor="#A3AAB4"
                step={1}
                value={this.state.rangeValue}
                onValueChange={(value: any) =>
                  this.setState({rangeValue: value})
                }
                thumbTintColor={'white'}
                thumbTouchSize={{
                  width: 50,
                  height: 50,
                }}
                thumbStyle={{
                  height: 50,
                  width: 50,
                  borderRadius: 1000,
                  shadowColor: 'black',
                  shadowOffset: {width: 4, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 6,
                  elevation: 30,
                }}
              />
              <Text style={coachLocationArea.changeValue}>
                {this.state.rangeValue} Km
              </Text>
            </View>
          </View>
        ) : null}

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
});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (step: number) => dispatch(actions.changeStep(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachLocationAreaView);
