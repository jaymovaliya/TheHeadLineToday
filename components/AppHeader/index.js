import React, { memo } from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';

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
    height: '8%',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.14)'
  },
});

export default memo(AppHeader)
