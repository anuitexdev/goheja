import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../views/home/homeScreen';
// comming soon routing 
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { View } from 'react-native';
import FullLayoutScreen from '../views/home/fullLayout/fullLayout.view';



// comming soon routing
const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: FullLayoutScreen,
    navigationOptions: {
      // tabBarLabel: '',
      labeled: false,
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),

    }
  },
  Home1: {
    screen: FullLayoutScreen,
    navigationOptions: {
      // tabBarLabel: '',
      labeled: false,
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  },
  Home2: {
    screen: FullLayoutScreen,
    navigationOptions: {
      // tabBarLabel: '',
      labeled: false,
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  },  
  Home3: {
    screen: FullLayoutScreen,
    navigationOptions: {
      // tabBarLabel: '',
      labeled: false,
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  },  
  Home4: {
    screen: FullLayoutScreen,
    navigationOptions: {
      tabBarLabel: '',
      labeled: false,
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  },  
},
{
  barStyle: { backgroundColor: '#D8D8D8' },
})


// const LoggedInNavigation   = createDrawerNavigator({
//   TestH: {
//     navigationOptions: {
//       headerMode: 'screen',
//       headerTitle: 'Second Screen Header',
//       drawerIcon: ({ tintColor }) => (
//         <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />),
//       drawerLabel: "Home"
//     },
//     screen: TabNavigator
//   },
// },
//   {
//     drawerBackgroundColor: '#455A64',
//     drawerLabel: 'Hello',
//     contentOptions: {
//       activeTintColor: '#4C5960',
//       activeBackgroundColor: '#B3C4CB',
//       itemsContainerStyle: {
//         marginVertical: 0,
//       },
//       iconContainerStyle: {
//         opacity: 1
//       }
//     }
//   }
// );

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen ,
    fullLayout: TabNavigator
  },
  {
    headerMode: 'none'
  }
);


// export default LoggedInNavigation;
export default AppNavigator;




