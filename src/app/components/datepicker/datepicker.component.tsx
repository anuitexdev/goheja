import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import datePickerStyle from './datepicker.style';
import CalendarPicker from 'react-native-calendar-picker';

interface Props {
  toggleDatePicker: boolean;
  hideDatePicker: (isShow: boolean) => void;
}

interface State {
  isVisible: boolean;
  selectedStartDate: any;
  selectedEndDate: any;
}

class CustomDatePicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: this.props.toggleDatePicker,
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  public onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate =
      new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate(); // Today
    const maxDate =
      new Date().getFullYear() +
      100 +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate();
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    let customDatesStyles: [] = [];
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.props.toggleDatePicker}>
          <View>
            <View style={datePickerStyle.modalPage}>
            <View>
                  <View style={datePickerStyle.header}>
                    <Text style={datePickerStyle.headerTitle}>
                      Select your Birth Date
                    </Text>
                  </View>
                  <View>
                    <CalendarPicker
                      startFromMonday={true}
                      allowRangeSelection={false}
                      minDate={minDate}
                      maxDate={maxDate}
                      previousTitle="<"
                      nextTitle=">"
                      todayBackgroundColor="#ECEDF1"
                      selectedDayColor="#414A4F"
                      selectedDayTextColor="#FFFFFF"
                      customDatesStyles={customDatesStyles}
                      onDateChange={this.onDateChange}
                    />
                  </View>
            </View>
              <View style={datePickerStyle.footer}>
                <TouchableWithoutFeedback
                  onPress={() => this.props.hideDatePicker(false)}>
                  <View style={datePickerStyle.footerBtn}><Text style={datePickerStyle.footerText}>Done</Text></View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomDatePicker);
