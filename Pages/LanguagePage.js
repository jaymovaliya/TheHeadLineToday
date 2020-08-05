/* @flow weak */

import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import { AppHeader } from '../CoreUI';
import AsyncStorage from '@react-native-community/async-storage';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);

function LanguagePage(props) {
  const setLanguage = async (language) => {
    await AsyncStorage.setItem('EXISTING', "existing");
    await AsyncStorage.setItem('LANGUAGE', language);
    props.navigation.navigate('AdminPage');
  }

  return (
    <View style={{...styles.container, backgroundColor: props.backgroundColor }}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F2F2F2"/>
    <AppHeader>
      <View style={{...styles.headerView, backgroundColor: props.headerBackgroundColor}}>
        <Text style={styles.title}>Select Language</Text>
      </View>
    </AppHeader>
    <View style={styles.heading}>
      <Text style={styles.headingText}>Which Language you prefer to read headlines in?</Text>
    </View>
    <View style={styles.languageSelection}>
      <TouchableOpacity onPress={() => setLanguage('gujarati')}>
        <View style={styles.languageItem}>
            <Text style={styles.languageTxt}>ગુજરાતી</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage('english')}>
        <View style={{...styles.languageItem, borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.14)'}}>
            <Text style={styles.languageTxt}>English</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default memo(LanguagePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight*0.025
  },
  heading: {
    padding: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight * 0.035,
    textAlign: 'center'
  },
  languageItem: {
    padding: windowHeight * 0.016,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.14)'
  },
  languageTxt: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight * 0.022,
  }
});
