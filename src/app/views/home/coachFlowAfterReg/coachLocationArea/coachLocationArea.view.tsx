import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import coachLocationArea from './coachLocationArea.style';
import MapView, { PROVIDER_GOOGLE, Circle, Marker } from 'react-native-maps';
import * as actions from '../../../../redux/actions/createGroup.actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import AddAddressModal from '../../../../components/modals/addAddress/addAddress.modal';
import axiosInstance from '../../../../shared/interceptors/axios.interceptor';
import Slider from 'react-native-slider';
import Geolocation from '@react-native-community/geolocation';
import TranslateService from '../../../../services/translation.service';
import * as translationReplaceHelper from '../../../../shared/helpers/translationReplace.helper';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Config from 'react-native-config';

interface State {
  avatarSource: any;
  toggleAddressModal: boolean;
  region: any;
  rangeValue: number;
  marker: any;
  editLocation: boolean;
  translateMethod: (str: string) => string;
  location: string;
}

interface Props {
  location: string;
  nextStepNumber: (data: any) => void;
  clubName: string;
  clubDTO: any;
}

export let request_location_runtime_permission = async () => { };

class CoachLocationAreaView extends Component<Props, State> {
  private destroyed: any;
  private circle: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);
    this.state = {
      avatarSource: '',
      toggleAddressModal: false,
      region: {
        latitude: this.props.clubDTO.lat,
        longitude: this.props.clubDTO.lng,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      translateMethod: (str: string) => '',
      marker: {
        latitude: this.props.clubDTO.lat,
        longitude: this.props.clubDTO.lng,
      },
      rangeValue: 20,
      editLocation: false,
      location: this.props.location
    };
  }

  componentWillMount() {
    Geolocation.getCurrentPosition(position => {
      if (Platform.OS === 'android') {
        this.setState({
          ...this.state,
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
        });
      } else {
        this.setState({
          ...this.state,
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
        }, () => {
          this.circle.setNativeProps({ fillColor: 'rgba(136,197,254,.5)', strokeColor: 'rgba(136,197,254,.5)' });
        });
      }
    });
    this.translationService = new TranslateService();
    this.destroyed = new Subject();
    this.translationService
      .getTranslateMethod()
      .pipe(takeUntil(this.destroyed))
      .subscribe(res => {
        this.setState({
          translateMethod: res,
        });
      });
  }
  componentWillUnmount() {
    this.destroyed.next();
    this.destroyed.complete();
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
    this.props.nextStepNumber({
      lat: this.state.region.latitude,
      lng: this.state.region.longitude,
      radius: this.state.rangeValue
    });
  };

  public getLatLong = async (lat: any, long: any) => {
    await axiosInstance
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${Config.GOOGLE_MAPS_API_KEY}`,
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

  request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getCurrentLocation();
      } else {
        Alert.alert('Location Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  getCurrentLocation = async () => {
    await Geolocation.getCurrentPosition(
      async position => {
        if (Platform.OS === 'android') {
          this.setState({
            marker: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            },
          });
        } else {
          this.setState({
            marker: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            },
          }, () => {
            this.circle.setNativeProps({ fillColor: 'rgba(136,197,254,.5)', strokeColor: 'rgba(136,197,254,.5)' });
          });
        }

        await this.getLatLong(
          this.state.region.latitude,
          this.state.region.longitude,
        );
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 30000 },
    );
  };
  setCurrentLocation = async () => {
    if (Platform.OS === 'ios') {
      this.getCurrentLocation();;
    } else {
      await this.request_location_runtime_permission();
    }
  };
  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (Platform.OS === 'android') {
      this.setState({
        ...this.state,
        region: {
          ...this.state.region,
          latitude: nextProps.clubDTO.lat,
          longitude: nextProps.clubDTO.lng,
        },
        marker: {
          latitude: nextProps.clubDTO.lat,
          longitude: nextProps.clubDTO.lng,
        }
      })
    } else {
      this.setState({
        ...this.state,
        region: {
          ...this.state.region,
          latitude: nextProps.clubDTO.lat,
          longitude: nextProps.clubDTO.lng,
        },
        marker: {
          latitude: nextProps.clubDTO.lat,
          longitude: nextProps.clubDTO.lng,
        }
      }, async () => {
        await this.circle.setNativeProps({ fillColor: 'rgba(136,197,254,.5)', strokeColor: 'rgba(136,197,254,.5)' });
      })
    }
  }

  render() {
    return (
      <View style={!this.state.editLocation ? coachLocationArea.mapPageWrapper : coachLocationArea.fullScreenMapPage}>
        {
          this.state.editLocation === false
            ? <Text style={coachLocationArea.title}>
              {translationReplaceHelper.translationReplace(
                this.state.translateMethod(
                  'translation.exposeIDE.views.regestrationNewClub.WhereusuallyTeamsAreTraninig',
                ),
                this.props.clubName,
              )}
            </Text>
            : null
        }
        <View style={coachLocationArea.mapWrapper}>
          {this.state.region.latitude !== null
            ? <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={coachLocationArea.map}
              region={this.state.region}
              onPress={e => {
                this.setState({
                  ...this.state,
                  region: {
                    ...this.state.region,
                    longitude: e.nativeEvent.coordinate.longitude,
                    latitude: e.nativeEvent.coordinate.latitude
                  },
                  marker: {
                    longitude: e.nativeEvent.coordinate.longitude,
                    latitude: e.nativeEvent.coordinate.latitude
                  }
                })
              }}

            >
              {
                !this.state.editLocation
                  ? <Marker
                    coordinate={{
                      latitude: this.state.marker.latitude,
                      longitude: this.state.marker.longitude
                    }}
                    title={'test'}
                    description={'test2'}
                  />
                  : <Marker
                    coordinate={{
                      latitude: this.state.marker.latitude,
                      longitude: this.state.marker.longitude
                    }}
                    title={'test'}
                    description={'test2'}
                    draggable
                    onDragEnd={(e) => this.setState({
                      region: {
                        ...this.state.region,
                        longitude: e.nativeEvent.coordinate.longitude,
                        latitude: e.nativeEvent.coordinate.latitude
                      }
                    })}
                  />
              }

              {
                Platform.OS === 'android' ?
                  <Circle
                    ref={ref => { this.circle = ref }}
                    radius={0 + this.state.rangeValue * 10}
                    center={this.state.region}
                    fillColor={'rgba(136,197,254,.5)'}
                    strokeColor={'rgba(136,197,254,.5)'}
                  />
                  : <Circle
                    ref={ref => { this.circle = ref }}
                    radius={0 + this.state.rangeValue * 10}
                    center={this.state.region}
                  />
              }


            </MapView>
            : null}

          {this.props.location == '' ?
            <TouchableOpacity
              style={coachLocationArea.currentLocationBtn}
              onPress={this.setCurrentLocation}>
              <Icon
                style={{ color: '#707B7F' }}
                size={25}
                name={'location-arrow'}
              />
              <Text style={coachLocationArea.currentLocationBtnText}>
                {this.state.translateMethod(
                  'translation.exposeIDE.views.regestrationNewClub.useMyCurrentLocationArea',
                )}
              </Text>
            </TouchableOpacity>
            : null}
          {
            this.state.editLocation
              ? <Text style={coachLocationArea.dragMap}>
                Drag map to choose location
              </Text>
              : null
          }
          {this.props.location != '' ?
            <View style={coachLocationArea.finalLocation}>
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  style={{ color: '#707B7F' }}
                  size={25}
                  name={'location-arrow'}
                />
                <Text style={coachLocationArea.finalLocationText}>
                  {this.props.location}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ editLocation: !this.state.editLocation })
                }>
                {this.state.editLocation == false ?
                  <IconFeather
                    style={{ color: '#707B7F' }}
                    size={24}
                    name={'edit-2'}
                  />
                  :
                  <Text style={coachLocationArea.doneBtn}>Done</Text>
                }
              </TouchableOpacity>
            </View>
            : null}
        </View>
        {this.props.location == '' ?
          <View style={coachLocationArea.addAddress}>
            <TouchableOpacity
              style={coachLocationArea.addressBtn}
              onPress={this.showAddressModal}>
              <Text style={coachLocationArea.addressBtnText}>
                {this.state.translateMethod(
                  'translation.exposeIDE.views.regestrationNewClub.addAddressManually',
                )}
              </Text>
            </TouchableOpacity>
            {<TouchableOpacity style={coachLocationArea.skipBtn} onPress={() => this.props.nextStepNumber({})}>
              <Text style={coachLocationArea.skipBtnText}>
                {this.state.translateMethod('translation.common.skip')}
              </Text>
            </TouchableOpacity> }
          </View>
          :   <TouchableOpacity
          style={coachLocationArea.nextBtn}
          onPress={this.onSubmit}>
          <Text style={coachLocationArea.nextBtnText}>
            {this.state.translateMethod('translation.common.next')}
          </Text>
        </TouchableOpacity>}
     

        {this.state.editLocation == true ?
          <View style={coachLocationArea.range}>
            <Text style={coachLocationArea.radiusText}>
              {this.state.translateMethod(
                'translation.exposeIDE.views.regestrationNewClub.radiusFromSelectedLocation',
              )}
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
                  this.setState({ rangeValue: value })
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
                  shadowOffset: { width: 4, height: 4 },
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
          : null}
       
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
  clubName: state.CreateGroupReducer.clubData.clubName,
  clubDTO: state.CreateGroupReducer.clubDTO
});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (data: any) => dispatch(actions.changeStep(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachLocationAreaView);
