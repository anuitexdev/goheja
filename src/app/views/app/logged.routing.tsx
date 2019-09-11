

import { createStackNavigator } from 'react-navigation-stack';
import AppScreen from './appScreen';


const AppNavigator = createStackNavigator(
  {
    Home: AppScreen,

  },
);

export default AppNavigator;




