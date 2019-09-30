import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableHighlight} from 'react-native';
import coachClubLogo from './coachClubLogo.style';
import {Image} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import * as actions from '../../../../redux/actions/createGroup.actions';
interface State {
    avatarSource: any
}

interface Props {
    nextStepNumber: (step: number) => void
}


class CoachClubLogoView extends Component<Props, State> {
    
  constructor(props: Props) {
    super(props);
    this.state = {
        avatarSource: ''
    }
  }

  public onSubmit = () => {
      this.props.nextStepNumber(3)
  }

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  private test = (options: any) => {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: source,
          });
        }
      });
  }

  

  render() {
    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

    return (
      <View style={coachClubLogo.photoWrapper}>
        <Text style={coachClubLogo.titleLogo}>Add Zen Club Logo</Text>
        {
            this.state.avatarSource == '' ?
            <TouchableHighlight 
            onPress={() => this.test(options)}
            style={coachClubLogo.photoPicker}
            >
                <Text style={coachClubLogo.photoBtnTitle}>Upload Zen's Logo</Text>
            </TouchableHighlight> :
            <View style={coachClubLogo.newPhoto}>
                <Image source={this.state.avatarSource} style={coachClubLogo.pickedPhoto}/>
                <TouchableHighlight 
                    onPress={() => this.test(options)}
                    >
                    <Text style={coachClubLogo.photoBtnTitle}>Upload a diferent logo</Text>
                </TouchableHighlight>
            </View>
        }
        <View style={coachClubLogo.wrapperBtn}>
            <TouchableHighlight 
                style={coachClubLogo.nextBtn}
                onPress={this.onSubmit}
                >
                <Text style={coachClubLogo.nextBtnText}>Next</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
    nextStepNumber: (step: number) => dispatch(actions.changeStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachClubLogoView);
