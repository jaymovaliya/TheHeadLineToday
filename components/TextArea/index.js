import React, { memo, useState } from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

function TextArea(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={{...styles.textArea, width: windowWidth*0.85 }}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
        placeholder={"Write your feedback or message"}
        placeholderTextColor={"#000000"}
        multiline
        numberOfLines={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textArea: {
    borderColor: 'rgba(0,0,0,0.14)',
    borderWidth: 1,
    padding: 15,
  }
});

export default memo(TextArea)
