import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {font} from '../theme';
import {normalize} from '../utils/formatter';

// Main
import {HomeScreen} from '../screen';
import {SplashScreen} from '../screen/SplashScreen';

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
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
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
