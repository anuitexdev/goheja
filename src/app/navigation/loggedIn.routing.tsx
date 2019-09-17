import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../views/home/homeScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { View } from 'react-native';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  }
);

const TabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  },
  Home1: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  },
  Home2: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        </View>),
    }
  }
}
)

const LoggedInNavigation   = createDrawerNavigator({
  TestH: {
    navigationOptions: {
      headerMode: 'screen',
      headerTitle: 'Second Screen Header',
      drawerIcon: ({ tintColor }) => (
        <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />),
      drawerLabel: "Home"
    },
    screen: TabNavigator
  },
},
  {
    drawerBackgroundColor: '#455A64',
    drawerLabel: 'Hello',
    contentOptions: {
      activeTintColor: '#4C5960',
      activeBackgroundColor: '#B3C4CB',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);



export default LoggedInNavigation;




