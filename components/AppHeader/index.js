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
    borderBottomWidth: 2,
    borderBottomColor: '#D5D5D5'
  },
});

export default memo(AppHeader)
