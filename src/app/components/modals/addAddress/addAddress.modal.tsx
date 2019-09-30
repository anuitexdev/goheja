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

interface State {
    selectedCountry: string,
    selectedAddress: string,
    fullAddress: string
}

interface Props {
  toggleAddressModal: boolean;
  hideAddressModal: (visible: boolean) => void;
  getLocation: (value: string) => void;
}

class AddAddressModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        selectedCountry: '',
        selectedAddress: '',
        fullAddress: ''
    }
  }

  public getLocation = () => {
    let loc = this.state.selectedCountry + " " + this.state.selectedAddress;
    this.setState({
        fullAddress: loc
    })
    this.props.hideAddressModal(false);
    this.props.getLocation(this.state.fullAddress);
  }

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
                    onValueChange={value => this.setState({selectedCountry: value})}
                    items={[
                      {label: 'Football', value: 'football'},
                      {label: 'Baseball', value: 'baseball'},
                      {label: 'Hockey', value: 'hockey'},
                    ]}>
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
                    onChangeText={(value) => this.setState({selectedAddress: value})}></TextInput>
                </View>
              </View>
         <View style={addAddress.locateBtnWrapper}>
                  <TouchableOpacity
                    onPress={this.getLocation}
                    style={addAddress.locateBtn}>
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
    getLocation: (value: string) => dispatch(actions.getLocation(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddAddressModal);
