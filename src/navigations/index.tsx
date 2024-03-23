import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color, font} from '../theme';
import {normalize} from '../utils/formatter';

// Main
import {FeedScreen, HomeScreen} from '../screen';

// Screen
import {LoginScreen} from '../screen/Login';
import {SplashScreen} from '../screen/SplashScreen';
import DetailData from '../screen/DetailData';

// Icon
import {FeedIcon, HomeIcon, ProfileIcon, SearchIcon} from '../assets/icon';

// interface

export type RootStackParams = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  MainTab: undefined;
  DetailData: {id: number};
};

export type MainTabParams = {
  Feed: undefined;
  Home: undefined;
  AddEmployee: undefined;
};

const screenOption: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={screenOption}
    initialRouteName={'SplashScreen'}>
    <RootStack.Screen name="MainTab" component={HomeScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="DetailData" component={DetailData} />
  </RootStack.Navigator>
);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: font.InterMedium,
    fontSize: normalize(12),
    marginTop: 2,
  },
});
