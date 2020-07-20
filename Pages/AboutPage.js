import React, { memo } from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';

function AboutPage(props) {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
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

export default memo(AboutPage)
