import React, { memo } from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';

function Button(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttontext}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#000000'
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 16
  }
});

export default memo(Button)
