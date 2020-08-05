/* @flow weak */

import React, {memo, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar
} from 'react-native';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);
import SplashIcon from '../assets/splashicon.svg';
import India from '../assets/india.svg';
import AsyncStorage from '@react-native-community/async-storage';

function SplashPage(props){

  useEffect(()=>{
    setTimeout(async ()=>{
      const isExisting = await AsyncStorage.getItem('EXISTING');
      if(!isExisting){
        props.navigation.navigate('InspiredPage');
      }
      else {
        props.navigation.navigate('AdminPage');
      }
    },2000)
  },[])

  return (
    <View style={{...styles.container, backgroundColor: props.backgroundColor }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F2F2F2"/>
      <View style={{height: windowHeight*0.015, backgroundColor: '#FF9933'}}>
      </View>
      <View style={{...styles.mainScreen, height: windowHeight*0.90}}>
        <SplashIcon/>
      </View>
      <View style={{...styles.mainScreen, height: windowHeight*0.07}}>
        <India/>
      </View>
      <View style={{height: windowHeight*0.015, backgroundColor: '#128807'}}>
      </View>
    </View>
  )
}

export default memo(SplashPage);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
