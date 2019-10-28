import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import addAddress from './addAddress.style';
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import * as actions from '../../../redux/actions/createGroup.actions';
import {countriesList} from '../../../shared/helpers/countries.list';
import axiosInstance from '../../../shared/interceptors/axios.interceptor';
import Config from 'react-native-config';

interface State {
  selectedCountry: string;
  selectedAddress: string;
  fullAddress: string;
  allCountries: any;
}

interface Props {
  toggleAddressModal: boolean;
  hideAddressModal: (visible: boolean) => void;
  getLocation: (value: string) => void;
  getLocationName: (value:string) => void;
}

class AddAddressModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCountry: '',
      selectedAddress: '',
      fullAddress: '',
      allCountries: [],
    };
  }

  componentWillMount() {
    this.getCountriesList();
  }

  public getCoordsFromCountry = async (address: any) => {
    await axiosInstance
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${Config.GOOGLE_MAPS_API_KEY}`,
      )
      .then(response => {
        console.log(response);
        return response
      })
      .catch(error => {
        console.log(error);
        return error
      });
  };

  public getLocation = async () => {
    let loc = this.state.selectedCountry + ', ' + this.state.selectedAddress;
    await this.setState({
      fullAddress: loc,
    });
    this.getCoordsFromCountry(this.state.selectedAddress);
    this.props.hideAddressModal(false);
    this.props.getLocation(loc);
    this.props.getLocationName(loc);
  };

  getCountriesList = async () => {
    let filteredCountries;
    filteredCountries = countriesList.map(item => {
      item.code = item.name;
      item['value'] = item.name;
      delete item.name;
      item['label'] = item.code;
      delete item.code;
      return item;
    });
    await this.setState({
      allCountries: filteredCountries,
    });
  };

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.toggleAddressModal}>
          <View style={addAddress.backDrop}>
            <View style={addAddress.modalWrapper}>
              <TouchableWithoutFeedback
                onPress={() => this.props.hideAddressModal(false)}>
                <Icon style={addAddress.close} size={30} name={'ios-close'} />
              </TouchableWithoutFeedback>
              <View>
                <Text style={addAddress.title}>Add Address Manually</Text>
                <View style={addAddress.formField}>
                  <Text style={addAddress.label}>Country</Text>
                  <RNPickerSelect
                    onValueChange={value =>
                      this.setState({selectedCountry: value})
                    }
                    items={this.state.allCountries}>
                    <View style={addAddress.selectCountry}>
                      <Text>{this.state.selectedCountry}</Text>
                      <IconMat
                        style={addAddress.arrowDropDown}
                        size={30}
                        name={'arrow-drop-down'}
                      />
                    </View>
                  </RNPickerSelect>
                </View>
                <View style={addAddress.formField}>
                  <Text style={addAddress.label}>Address</Text>
                  <TextInput
                    placeholder="Street name..."
                    style={addAddress.input}
                    onChangeText={value =>
                      this.setState({selectedAddress: value})
                    }></TextInput>
                </View>
              </View>
              <View style={addAddress.locateBtnWrapper}>
                <TouchableOpacity
                  onPress={this.getLocation}
                  style={this.state.selectedAddress!== '' && this.state.selectedCountry!== '' ? addAddress.locateBtnActive : addAddress.locateBtn}>
                  <Text style={addAddress.locateBtnText}>Locate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  getLocation: (value: string) => dispatch(actions.googleLocation(value)),
  getLocationName: (value: string) => dispatch(actions.getLocationName(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddAddressModal);
