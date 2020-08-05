import React, { memo } from 'react';
import {Text, View, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);

function AppHeader(props) {
  return (
    <View style={styles.container}>
    { props.children }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: windowHeight*0.09,
    elevation: 2,
    backgroundColor: '#ffffff'
  },
});

export default memo(AppHeader)
