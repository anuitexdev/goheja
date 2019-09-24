import {Component} from 'react';
import {connect} from 'react-redux';
import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Picker} from 'react-native';
import styles from './styles';
import IconIon from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../redux/actions/auth.actions';
import UserSignUpData from '../../../../../shared/models/userSignUpData.model';
import RNPickerSelect from 'react-native-picker-select';
import window from '../../../../../theme/variables';
import IconMat from 'react-native-vector-icons/MaterialIcons';
interface State {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  updatedPhoneValue: string;
}

interface Props {
  signUp: (user: UserSignUpData) => void;
  changeCoachStep: (data: any) => void;
}

class CoachBasicInfoScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      showPassword: true,
      updatedPhoneValue: ''
    };
  }

  private toggleSwitch = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  private onSubmit = async () => {
    const {showPassword, ...userDto} = this.state;
    await this.props.changeCoachStep(userDto);
  };

  private handleChange = (data: any) => {
    this.setState(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Your basic info</Text>
        <View style={styles.formField}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            placeholder="Type your first name..."
            style={styles.input}
            onChangeText={firstName =>
              this.handleChange({firstName})
            }></TextInput>
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            placeholder="Type your last name..."
            style={styles.input}
            onChangeText={lastName =>
              this.handleChange({lastName})
            }></TextInput>
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Type your email address..."
            style={styles.input}
            onChangeText={email => this.handleChange({email})}></TextInput>
        </View>
        <Text style={styles.label}>Phone No.</Text>
        <View style={styles.formField}>
          <View style={styles.phoneInput}>
            <RNPickerSelect
              onValueChange={value => this.setState({updatedPhoneValue: value})}
              items={[
                { label: "Uzbekistan", value: "+998", code: "UZ" },
                { label: "United Arab Emirates", value: "+971", code: "AE" },
                { label: "United States", value: "+1", code: "US" },
                { label: "Russia", value: "+7", code: "RU" },
                { label: "Kazakhstan", value: "+77", code: "KZ" },
                { label: "Israel", value: "+972", code: "IL" },
                { label: "Afghanistan", value: "+93", code: "AF" },
                { label: "Albania", value: "+355", code: "AL" },
                { label: "Algeria", value: "+213", code: "DZ" },
                { label: "Andorra", value: "+376", code: "AD" },
                { label: "Angola", value: "+244", code: "AO" },
                { label: "Antigua and Barbuda", value: "+1268", code: "AG" },
                { label: "Argentina", value: "+54", code: "AR" },
                { label: "Armenia", value: "+374", code: "AM" },
                { label: "Australia", value: "+61", code: "AU" },
                { label: "Austria", value: "+43", code: "AT" },
                { label: "Azerbaijan", value: "+994", code: "AZ" },
                { label: "Bahamas", value: "+1 242", code: "BS" },
                { label: "Bahrain", value: "+973", code: "BH" },
                { label: "Bangladesh", value: "+880", code: "BD" },
                { label: "Barbados", value: "+1 246", code: "BB" },
                { label: "Belarus", value: "+375", code: "BY" },
                { label: "Belgium", value: "+32", code: "BE" },
                { label: "Belize", value: "+501", code: "BZ" },
                { label: "Benin", value: "+229", code: "BJ" },
                { label: "Bhutan", value: "+975", code: "BT" },
                { label: "Bosnia and Herzegovina", value: "+387", code: "BA" },
                { label: "Botswana", value: "+267", code: "BW" },
                { label: "Brazil", value: "+55", code: "BR" },
                { label: "Bulgaria", value: "+359", code: "BG" },
                { label: "Burkina Faso", value: "+226", code: "BF" },
                { label: "Burundi", value: "+257", code: "BI" },
                { label: "Cambodia", value: "+855", code: "KH" },
                { label: "Cameroon", value: "+237", code: "CM" },
                { label: "Canada", value: "+1", code: "CA" },
                { label: "Cape Verde", value: "+238", code: "CV" },
                { label: "Central African Republic", value: "+236", code: "CF" },
                { label: "Chad", value: "+235", code: "TD" },
                { label: "Chile", value: "+56", code: "CL" },
                { label: "China", value: "+86", code: "CN" },
                { label: "Colombia", value: "+57", code: "CO" },
                { label: "Comoros", value: "+269", code: "KM" },
                { label: "Congo", value: "+242", code: "CG" },
                { label: "Costa Rica", value: "+506", code: "CR" },
                { label: "Croatia", value: "+385", code: "HR" },
                { label: "Cuba", value: "+53", code: "CU" },
                { label: "Cyprus", value: "+537", code: "CY" },
                { label: "Czech Republic", value: "+420", code: "CZ" },
                { label: "Denmark", value: "+45", code: "DK" },
                { label: "Djibouti", value: "+253", code: "DJ" },
                { label: "Dominica", value: "+1 767", code: "DM" },
                { label: "Dominican Republic", value: "+1 849", code: "DO" },
                { label: "Ecuador", value: "+593", code: "EC" },
                { label: "Egypt", value: "+20", code: "EG" },
                { label: "El Salvador", value: "+503", code: "SV" },
                { label: "Equatorial Guinea", value: "+240", code: "GQ" },
                { label: "Eritrea", value: "+291", code: "ER" },
                { label: "Estonia", value: "+372", code: "EE" },
                { label: "Ethiopia", value: "+251", code: "ET" },
                { label: "Fiji", value: "+679", code: "FJ" },
                { label: "Finland", value: "+358", code: "FI" },
                { label: "France", value: "+33", code: "FR" },
                { label: "Gabon", value: "+241", code: "GA" },
                { label: "Gambia", value: "+220", code: "GM" },
                { label: "Georgia", value: "+995", code: "GE" },
                { label: "Germany", value: "+49", code: "DE" },
                { label: "Ghana", value: "+233", code: "GH" },
                { label: "Greece", value: "+30", code: "GR" },
                { label: "Grenada", value: "+1 473", code: "GD" },
                { label: "Guatemala", value: "+502", code: "GT" },
                { label: "Guinea", value: "+224", code: "GN" },
                { label: "Guinea-Bissau", value: "+245", code: "GW" },
                { label: "Guyana", value: "+595", code: "GY" },
                { label: "Haiti", value: "+509", code: "HT" },
                { label: "Honduras", value: "+504", code: "HN" },
                { label: "Hungary", value: "+36", code: "HU" },
                { label: "Iceland", value: "+354", code: "IS" },
                { label: "India", value: "+91", code: "IN" },
                { label: "Indonesia", value: "+62", code: "ID" },
                { label: "Iraq", value: "+964", code: "IQ" },
                { label: "Ireland", value: "+353", code: "IE" },
                { label: "Israel", value: "+972", code: "IL" },
                { label: "Italy", value: "+39", code: "IT" },
                { label: "Jamaica", value: "+1 876", code: "JM" },
                { label: "Japan", value: "+81", code: "JP" },
                { label: "Jordan", value: "+962", code: "JO" },
                { label: "Kenya", value: "+254", code: "KE" },
                { label: "Kiribati", value: "+686", code: "KI" },
                { label: "Kuwait", value: "+965", code: "KW" },
                { label: "Kyrgyzstan", value: "+996", code: "KG" },
                { label: "Latvia", value: "+371", code: "LV" },
                { label: "Lebanon", value: "+961", code: "LB" },
                { label: "Lesotho", value: "+266", code: "LS" },
                { label: "Liberia", value: "+231", code: "LR" },
                { label: "Liechtenstein", value: "+423", code: "LI" },
                { label: "Lithuania", value: "+370", code: "LT" },
                { label: "Luxembourg", value: "+352", code: "LU" },
                { label: "Madagascar", value: "+261", code: "MG" },
                { label: "Malawi", value: "+265", code: "MW" },
                { label: "Malaysia", value: "+60", code: "MY" },
                { label: "Maldives", value: "+960", code: "MV" },
                { label: "Mali", value: "+223", code: "ML" },
                { label: "Malta", value: "+356", code: "MT" },
                { label: "Marshall Islands", value: "+692", code: "MH" },
                { label: "Mauritania", value: "+222", code: "MR" },
                { label: "Mauritius", value: "+230", code: "MU" },
                { label: "Mayotte", value: "+262", code: "YT" },
                { label: "Mexico", value: "+52", code: "MX" },
                { label: "Monaco", value: "+377", code: "MC" },
                { label: "Mongolia", value: "+976", code: "MN" },
                { label: "Montenegro", value: "+382", code: "ME" },
                { label: "Morocco", value: "+212", code: "MA" },
                { label: "Myanmar", value: "+95", code: "MM" },
                { label: "Namibia", value: "+264", code: "NA" },
                { label: "Nauru", value: "+674", code: "NR" },
                { label: "Nepal", value: "+977", code: "NP" },
                { label: "Netherlands", value: "+31", code: "NL" },
                { label: "New Zealand", value: "+64", code: "NZ" },
                { label: "Nicaragua", value: "+505", code: "NI" },
                { label: "Niger", value: "+227", code: "NE" },
                { label: "Nigeria", value: "+234", code: "NG" },
                { label: "Norway", value: "+47", code: "NO" },
                { label: "Oman", value: "+968", code: "OM" },
                { label: "Pakistan", value: "+92", code: "PK" },
                { label: "Palau", value: "+680", code: "PW" },
                { label: "Panama", value: "+507", code: "PA" },
                { label: "Papua New Guinea", value: "+675", code: "PG" },
                { label: "Paraguay", value: "+595", code: "PY" },
                { label: "Peru", value: "+51", code: "PE" },
                { label: "Philippines", value: "+63", code: "PH" },
                { label: "Poland", value: "+48", code: "PL" },
                { label: "Portugal", value: "+351", code: "PT" },
                { label: "Qatar", value: "+974", code: "QA" },
                { label: "Romania", value: "+40", code: "RO" },
                { label: "Rwanda", value: "+250", code: "RW" },
                { label: "Samoa", value: "+685", code: "WS" },
                { label: "San Marino", value: "+378", code: "SM" },
                { label: "Saudi Arabia", value: "+966", code: "SA" },
                { label: "Senegal", value: "+221", code: "SN" },
                { label: "Serbia", value: "+381", code: "RS" },
                { label: "Seychelles", value: "+248", code: "SC" },
                { label: "Sierra Leone", value: "+232", code: "SL" },
                { label: "Singapore", value: "+65", code: "SG" },
                { label: "Slovakia", value: "+421", code: "SK" },
                { label: "Slovenia", value: "+386", code: "SI" },
                { label: "Solomon Islands", value: "+677", code: "SB" },
                { label: "South Africa", value: "+27", code: "ZA" },
                { label: "Spain", value: "+34", code: "ES" },
                { label: "Sri Lanka", value: "+94", code: "LK" },
                { label: "Sudan", value: "+249", code: "SD" },
                { label: "Surilabel", value: "+597", code: "SR" },
                { label: "Swaziland", value: "+268", code: "SZ" },
                { label: "Sweden", value: "+46", code: "SE" },
                { label: "Switzerland", value: "+41", code: "CH" },
                { label: "Tajikistan", value: "+992", code: "TJ" },
                { label: "Thailand", value: "+66", code: "TH" },
                { label: "Togo", value: "+228", code: "TG" },
                { label: "Tonga", value: "+676", code: "TO" },
                { label: "Trinidad and Tobago", value: "+1 868", code: "TT" },
                { label: "Tunisia", value: "+216", code: "TN" },
                { label: "Turkey", value: "+90", code: "TR" },
                { label: "Turkmenistan", value: "+993", code: "TM" },
                { label: "Tuvalu", value: "+688", code: "TV" },
                { label: "Uganda", value: "+256", code: "UG" },
                { label: "Ukraine", value: "+380", code: "UA" },
                { label: "United Arab Emirates", value: "+971", code: "AE" },
                { label: "United Kingdom", value: "+44", code: "GB" },
                { label: "Uruguay", value: "+598", code: "UY" },
                { label: "Vanuatu", value: "+678", code: "VU" },
                { label: "Yemen", value: "+967", code: "YE" },
                { label: "Zambia", value: "+260", code: "ZM" },
                { label: "Zimbabwe", value: "+263", code: "ZW" },
                { label: "Bolivia, Plurinational State of", value: "+591", code: "BO" },
                { label: "Brunei Darussalam", value: "+673", code: "BN" },
                { label: "Congo, The Democratic Republic of the", value: "+243", code: "CD" },
                { label: "Cote d'Ivoire", value: "+225", code: "CI" },
                { label: "Holy See (Vatican City State)", value: "+379", code: "VA" },
                { label: "Iran, Islamic Republic of", value: "+98", code: "IR" },
                { label: "Korea, Democratic People's Republic of", value: "+850", code: "KP" },
                { label: "Korea, Republic of", value: "+82", code: "KR" },
                { label: "Lao People's Democratic Republic", value: "+856", code: "LA" },
                { label: "Libyan Arab Jamahiriya", value: "+218", code: "LY" },
                { label: "Macedonia, The Former Yugoslav Republic of", value: "+389", code: "MK" },
                { label: "Micronesia, Federated States of", value: "+691", code: "FM" },
                { label: "Moldova, Republic of", value: "+373", code: "MD" },
                { label: "Mozambique", value: "+258", code: "MZ" },
                { label: "Saint Kitts and Nevis", value: "+1 869", code: "KN" },
                { label: "Saint Lucia", value: "+1 758", code: "LC" },
                { label: "Saint Vincent and the Grenadines", value: "+1 784", code: "VC" },
                { label: "Sao Tome and Principe", value: "+239", code: "ST" },
                { label: "Somalia", value: "+252", code: "SO" },
                { label: "Syrian Arab Republic", value: "+963", code: "SY" },
                { label: "Taiwan, Province of China", value: "+886", code: "TW" },
                { label: "Tanzania, United Republic of", value: "+255", code: "TZ" },
                { label: "Timor-Leste", value: "+670", code: "TL" },
                { label: "Venezuela, Bolivarian Republic of", value: "+58", code: "VE" },
                { label: "Viet Nam", value: "+84", code: "VN" },
              ]}
              >
              <View
              style={styles.phoneSelect}>
                <Text style={{color: '#282E44'}}>
                  {this.state.updatedPhoneValue}
                </Text>
                <IconMat
                        style={styles.arrowDropDown}
                        size={30}
                        name={'arrow-drop-down'}
                    />
              </View>
            </RNPickerSelect>
            <Text style={{fontSize: 24}}>{'\u00A0'}-{'\u00A0'}</Text>
            <TextInput
              placeholder="Type your phone no..."
              keyboardType={'number-pad'}
              style={[styles.input, {width: window.width - 160}]}
              onChangeText={phone => this.handleChange({phone})}></TextInput>
          </View>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Type your password..."
            secureTextEntry={this.state.showPassword}
            style={styles.input}
            onChangeText={password => this.handleChange({password})}
          />
          <IconIon
            style={styles.showPassword}
            size={25}
            name={'ios-eye'}
            onPress={this.toggleSwitch}
          />
        </View>
        <View style={styles.formField}>
          <Text style={styles.label}>Password Confirmation</Text>
          <TextInput
            placeholder="Type your password..."
            secureTextEntry={this.state.showPassword}
            style={styles.input}
            onChangeText={confirmPassword =>
              this.handleChange({confirmPassword})
            }
          />
          <IconIon
            style={styles.showPassword}
            size={25}
            name={'ios-eye'}
            onPress={this.toggleSwitch}
          />
        </View>
        <View style={styles.nextBtnWrapper}>
          <TouchableOpacity style={styles.nextBtn} onPress={this.onSubmit}>
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (userData: UserSignUpData) => dispatch(actions.signUp(userData)),
  changeCoachStep: (data: any) => dispatch(actions.changeCoachStep(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachBasicInfoScreen);
