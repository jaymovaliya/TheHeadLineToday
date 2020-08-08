import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import QuotePage from './Pages/QuotePage';
import AboutPage from './Pages/AboutPage';
import SettingsPage from './Pages/SettingsPage';
import FeedbackPage from './Pages/FeedbackPage';
import SplashPage from './Pages/SplashPage';
import InspiredPage from './Pages/InspiredPage';
import LanguagePage from './Pages/LanguagePage';
import AdminPage from './Pages/AdminPage';
import AddNews from './Pages/AddNews';
import AddSlogan from './Pages/AddSlogan';
import CreateAd from './Pages/CreateAd';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('#FFFFFF');
  const [dividerColor, setDividerColor] = useState('rgba(0,0,0,0.14)');
  const [initialRoute, setInitialRoute] = useState('SplashPage');
  const [modalHeaderBackground, setModalHeaderBackground] = useState('#999999');
  const [colorIndex, setColorIndex] = useState(0);

  const changeThemeColor = (color, i) => {
    setBackgroundColor(color.color)
    setHeaderBackgroundColor(color.headerColor);
    setDividerColor(color.dividerColor);
    setModalHeaderBackground(color.darkColor);
    setInitialRoute('SettingsPage');
    setColorIndex(i);
  }

  const RootStack = createStackNavigator(
    {
      QuotePage: {
        screen: props => <QuotePage {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      AboutPage: {
        screen: props => <AboutPage {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
          modalHeaderBackground={modalHeaderBackground}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      SettingsPage: {
        screen: props => <SettingsPage {...props}
          changeThemeColor={changeThemeColor}
          backgroundColor={backgroundColor}
          colorIndex={colorIndex}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
          modalHeaderBackground={modalHeaderBackground}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      FeedbackPage: {
        screen: props => <FeedbackPage {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      SplashPage: {
        screen: props => <SplashPage {...props}
          backgroundColor={backgroundColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      InspiredPage: {
        screen: props => <InspiredPage {...props} backgroundColor={backgroundColor} />,
        navigationOptions: {
          headerShown: false,
        },
      },
      LanguagePage: {
        screen: props => <LanguagePage {...props} backgroundColor={backgroundColor} />,
        navigationOptions: {
          headerShown: false,
        },
      },
      AdminPage: {
        screen: props => <AdminPage {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      AddNews: {
        screen: props => <AddNews {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      AddSlogan: {
        screen: props => <AddSlogan {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
      CreateAd: {
        screen: props => <CreateAd {...props}
          backgroundColor={backgroundColor}
          headerBackgroundColor={headerBackgroundColor}
          dividerColor={dividerColor}
        />,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: initialRoute,
    },
  );
  const AppContainer = createAppContainer(RootStack);
  return <AppContainer />;
}
