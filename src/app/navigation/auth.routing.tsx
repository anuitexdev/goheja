
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../views/auth/signIn/signIn';
import SignUpScreen from '../views/auth/signUp/signUp';
import ForgotPasswordScreen from '../views/auth/forgotPassword/forgotPassword';
import WelcomeScreen from '../views/auth/signUp/welcome';
import YourSelfAthleteScreen from '../views/auth/signUp/athlete/yourselfAthlete';
import UnitsAthleteScreen from '../views/auth/signUp/athlete/units';
import PersonalInfoScreen from '../views/auth/signUp/athlete/personalInfo';
const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
    welcome: WelcomeScreen,
    forgotPassword: ForgotPasswordScreen,
    yourSelfAthlete: YourSelfAthleteScreen,
    unitsAthlete: UnitsAthleteScreen,
    personalInfoScreen: PersonalInfoScreen,
  },
  {
    initialRouteName: 'signIn',
    headerMode: "none"
  },
);

export default AppNavigator;
