import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import QuotePage from './Pages/QuotePage';
import AboutPage from './Pages/AboutPage';
import SettingsPage from './Pages/SettingsPage';

const RootStack = createStackNavigator(
  {
    QuotePage: {
      screen: QuotePage,
      navigationOptions: {
        headerShown: false,
      },
    },
    AboutPage: {
      screen: AboutPage,
      navigationOptions: {
        headerShown: false,
      },
    },
    SettingsPage: {
      screen: SettingsPage,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'QuotePage',
  },
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}
