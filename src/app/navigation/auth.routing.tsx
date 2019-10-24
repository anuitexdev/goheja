
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../views/auth/signIn/signIn';
import SignUpScreen from '../views/auth/signUp/signUp';
import ForgotPasswordScreen from '../views/auth/forgotPassword/forgotPassword.view';
import WelcomeScreen from '../views/auth/signUp/welcome/welcome';
import ChartScreen from '../views/auth/chart/chart.view';
const AppNavigator = createStackNavigator(
  {
    signIn: SignInScreen,
    signUp: SignUpScreen,
    welcome: WelcomeScreen,
    forgotPassword: ForgotPasswordScreen,
    chart: ChartScreen,
  },
  {
    initialRouteName: 'signIn',
    headerMode: "none"
  },
);

export default AppNavigator;
