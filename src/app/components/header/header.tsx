import { Component } from 'react';
import { Text, View, Picker, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import header from './header.style';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth.actions';

interface Props {
  changeLanguage: (data: string) => void,
  getAllLanguages: () => void,
  language: string,
  languagesList: any
}

interface State {
  language: string;
  dropDownIsVisible: boolean;
}
class Header extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: 'English',
      dropDownIsVisible: false
    };
  }

  componentWillMount = () => {
    this.props.getAllLanguages();
  }

  private changeLanguage = (value: string) => {
    this.setState({
      language: value,
    })
    // this.props.changeLanguage(value);
  }

  private toggleDropDown = () => {
    this.setState({ dropDownIsVisible: !this.state.dropDownIsVisible })
  }

  render() {
    const languages = [];
    for (let key in this.props.languagesList) {
      languages.push(
        <TouchableOpacity
          key={key}
          onPress={() => this.changeLanguage(this.props.languagesList[key])}>
          <View style={header.languageItemWrapper}  >
            <View style={this.state.language === this.props.languagesList[key] ? header.languageItemActive : header.languageItem}>
              <Text>{this.props.languagesList[key]}</Text>
              <Text style={header.abbreviation}>{key}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    return (

      <View
        style={{
          height: 80,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Go Heja
        </Text>
        <View style={{ position: 'relative' }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => this.toggleDropDown()}
          >
            <Icon
              size={25}
              name={'language'}
              style={{ color: '#C5CACE', marginRight: 7 }}
            />
            <Text style={{ color: '#C5CACE', fontWeight: 'bold' }}>{this.props.language}</Text>
            <IconMat
              size={30}
              name={'arrow-drop-down'}
              style={{ color: '#C5CACE' }}
            />
          </TouchableOpacity>
          {
            this.state.dropDownIsVisible ?
              <View style={header.languageDropDown}>
                <TouchableOpacity style={header.languageItemHeader} onPress={() => this.toggleDropDown()}>
                  <Icon
                    size={25}
                    name={'language'}
                    style={{ color: '#C5CACE', marginRight: 7 }}
                  />
                  <Text style={{ color: '#C5CACE', fontWeight: 'bold' }}>
                    {this.props.language}
                  </Text>
                  <IconMat
                    size={30}
                    name={'arrow-drop-up'}
                    style={{ color: '#C5CACE' }}
                  />
                </TouchableOpacity>
                {languages}
              </View> : null}

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  language: state.AuthReducer.language,
  languagesList: state.AuthReducer.languagesList
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage: (data: string) => dispatch(actions.changeLang(data)),
  getAllLanguages: () => dispatch(actions.getAllLanguages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
