import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import coachClubLogo from './coachClubLogo.style';
import { Image } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import * as actions from '../../../../redux/actions/createGroup.actions';
import TranslateService from '../../../../services/translation.service';
import * as translationReplaceHelper from '../../../../shared/helpers/translationReplace.helper';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface State {
  imgPath: any,
  translateMethod: (str: string) => string,
}

interface Props {
  nextStepNumber: (stepData: { imgPath: string }) => void,
  name: string,
}


class CoachClubLogoView extends Component<Props, State> {
  private destroyed: any;
  constructor(props: Props, private translationService: TranslateService) {
    super(props);
    this.state = {
      imgPath: '',
      translateMethod: (str: string) => '',
    }
  }

  componentWillMount() {
    this.translationService = new TranslateService();
    this.destroyed = new Subject();
    this.translationService.getTranslateMethod().pipe(takeUntil(this.destroyed)).subscribe(res => {
      this.setState({
        translateMethod: res,
      })
    });
  }

  componentWillUnmount() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  public onSubmit = () => {
    this.props.nextStepNumber(this.state)
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

  private chooseImage = (options: any) => {
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
          imgPath: source,
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
        <Text style={coachClubLogo.titleLogo}>{translationReplaceHelper.translationReplace(this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.addLogo'), this.props.name)}</Text>
        {
          this.state.imgPath == '' ?
            <TouchableHighlight
              onPress={() => this.chooseImage(options)}
              style={coachClubLogo.photoPicker}
            >
              <Text style={coachClubLogo.photoBtnTitle}>{translationReplaceHelper.translationReplace(this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.uploadClubLogo'), this.props.name)}</Text>
            </TouchableHighlight> :
            <View style={coachClubLogo.newPhoto}>
              <Image source={this.state.imgPath} style={coachClubLogo.pickedPhoto} />
              <TouchableHighlight
                onPress={() => this.chooseImage(options)}
              >

                <Text style={coachClubLogo.photoBtnTitle}>{this.state.translateMethod('translation.exposeIDE.views.regestrationNewClub.uploadDiffrentLogo')}</Text>
              </TouchableHighlight>
            </View>
        }
        <View style={coachClubLogo.wrapperBtn}>
          {
            this.state.imgPath !== '' ?
              <TouchableHighlight
                style={coachClubLogo.nextBtn}
                onPress={this.onSubmit}
              >
                <Text style={coachClubLogo.nextBtnText}> {this.state.translateMethod('translation.common.next')}</Text>
              </TouchableHighlight> :

              <TouchableHighlight
                style={coachClubLogo.skipBtn}
                onPress={this.onSubmit}
              >
                <Text style={coachClubLogo.skipBtnText}> {this.state.translateMethod('translation.common.skip')}</Text>
              </TouchableHighlight>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  name: state.CreateGroupReducer.clubDTO.name
});

const mapDispatchToProps = (dispatch: any) => ({
  nextStepNumber: (stepData: { imgPath: string }) => dispatch(actions.changeStep(stepData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoachClubLogoView);
