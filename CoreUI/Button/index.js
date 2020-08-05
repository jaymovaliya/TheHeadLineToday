import React, { memo } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onBtnClick}>
        <View style={{...styles.buttonContainer, width: windowWidth*0.85}}>
          <Text style={styles.buttontext}>{props.text}</Text>
        </View>
      </TouchableOpacity>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 2
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular'
  }
});

export default memo(Button)
