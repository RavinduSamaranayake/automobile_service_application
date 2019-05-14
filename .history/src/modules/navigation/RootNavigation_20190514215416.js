import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {  createSwitchNavigator,createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import MapScreen from '../map/mapview';
import LoginScreen from '../login/LoginView';
import SplashScreen from '../splash/SplashView';


// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';
import ViewProfile from '../profile/ViewProfile';
import ChangeProfile from '../settingprofile/ChangeProfile';
import VehicleList from '../vehicle/VehicleList';
import Booking from '../booking/Booking';
import ServiceHistory from '../servicehistory/ServiceHistory';

import { colors, fonts } from '../../styles';

const headerBackground = require('../../../assets/images/topBarBg.png');

const stackNavigator = createStackNavigator(
  {

    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        title: 'Shan Automobile',
        headerLeft: null,
        headerBackground: (
          <Image
            style={{ flex: 1 }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },

    Profile: {
      screen: ViewProfile,
      navigationOptions: {
        title: 'Profile',
      },
    },
    ChangeProfile: {
      screen: ChangeProfile,
      navigationOptions: {
        title: 'Change profile',
      },
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        title: 'Road Side',
      },
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        title: 'Appointment',
        
      },
    },

    VehicleList: {
      screen: VehicleList,
      navigationOptions: {
        title: 'My Vehicles',
      },
    },
    Messages: {
      screen: AvailableInFullVersion,
      navigationOptions: {
        header: null,
      },
    },
    ServiceHistory: {
      screen: ServiceHistory,
      navigationOptions: {
        title: 'Booking',
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);


const AppSwitchNavigator = createSwitchNavigator({
  
  Splash: { screen: SplashScreen },
  Login: { screen: LoginScreen },
 
  // home: {screen: Home},
  // settings: {screen: Settings},
  // profile: {screen: Profile},
 // drawer: {screen: AppDrawerNavigator},
  Dashboard: { screen: stackNavigator },
  
});

export default createAppContainer(AppSwitchNavigator);
