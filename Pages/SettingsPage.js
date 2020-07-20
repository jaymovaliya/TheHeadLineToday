import React, { memo } from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';

function SettingsPage(props) {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default memo(SettingsPage)
