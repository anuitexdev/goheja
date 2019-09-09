
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './signIn/signIn';
import SignUpScreen from './signUp/signUp';

const AppNavigator = createStackNavigator(
  {
    Home: SignInScreen,
    signUp: SignUpScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: "none"
  },
);

export default AppNavigator;
