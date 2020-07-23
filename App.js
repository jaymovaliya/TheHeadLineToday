import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import QuotePage from './Pages/QuotePage';
import AboutPage from './Pages/AboutPage';
import SettingsPage from './Pages/SettingsPage';
import FeedbackPage from './Pages/FeedbackPage';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [initialRoute, setInitialRoute] = useState('QuotePage');
  const [colorIndex, setColorIndex] = useState(0);

  const changeThemeColor = (color, i) => {
    setBackgroundColor(color)
    setInitialRoute('SettingsPage')
    setColorIndex(i)
  }

  const RootStack = createStackNavigator(
    {
      QuotePage: {
        screen: props => <QuotePage {...props} backgroundColor={backgroundColor}/>,
        navigationOptions: {
          headerShown: false,
        },
      },
      AboutPage: {
        screen: props => <AboutPage {...props} backgroundColor={backgroundColor}/>,
        navigationOptions: {
          headerShown: false,
        },
      },
      SettingsPage: {
        screen: props => <SettingsPage {...props}
                            changeThemeColor={changeThemeColor}
                            backgroundColor={backgroundColor}
                            colorIndex={colorIndex}
                          />,
        navigationOptions: {
          headerShown: false,
        },
      },
      FeedbackPage: {
        screen: props => <FeedbackPage {...props} backgroundColor={backgroundColor}/>,
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
