import {StyleSheet} from 'react-native';
import window from '../../../../theme/variables';

export default StyleSheet.create({
  clubDetailsWrapper: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 9999,
    width: window.width,
    height: window.height,
  },
  title: {
    fontSize: 20,
    color: '#272D43',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  titleTime: {
    color: '#272D43',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
  },
  workingDaysWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    width: window.width - 10,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#CFD8DD',
  },
  daysBtnSelected: {
    height: 40,
    width: 40,
    backgroundColor: '#88959B',
    borderRadius: 3,
    marginRight: 7,
    marginLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysBtnTextSelected: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysBtnDefault: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#88959B',
    borderRadius: 3,
    marginRight: 7,
    marginLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysBtnTextDefault: {
    color: '#88959B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputTime: {
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#cfd8dc',
    paddingLeft: 20
  },
  inputTimeFocused: {
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#8A969C',
    paddingLeft: 20
  },
  inputsWrapper: {
      flexDirection: 'row',
  },
  inputWidth: {
      width: window.width/2 - 35,
      marginRight: 20
  },
  inputLabel: {
      color: '#272E43',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
  },
  wrapperBtn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 50
},
nextBtnText: {
  color: 'white',
  fontSize: 16
},
nextBtn: {
  backgroundColor: '#4d5a5f',
  borderRadius: 2,
  paddingRight: 20,
  paddingLeft: 20,
  paddingBottom: 12,
  paddingTop: 12,
  marginLeft: 15,
  
},
});
