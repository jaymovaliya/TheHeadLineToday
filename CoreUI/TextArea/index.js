import React, { memo, useState } from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

function TextArea(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={{...styles.textArea, width: windowWidth*0.85, backgroundColor: props.backgroundColor}}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
        placeholder={"Write your feedback or message"}
        placeholderTextColor={"#000000"}
        textAlignVertical={'top'}
        multiline
        numberOfLines={7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  textArea: {
    padding: 15,
    elevation: 1
  }
});

export default memo(TextArea)
