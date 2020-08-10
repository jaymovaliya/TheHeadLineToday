import React, { memo, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

function TextArea(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ ...styles.textArea, width: windowWidth * 0.85, backgroundColor: props.backgroundColor, ...props.style }}
        onChangeText={text => props.onChangeText(text)}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={"#000000"}
        textAlignVertical={'top'}
        multiline
        numberOfLines={props.numberOfLines}
        returnKeyType={props.returnKeyType ? props.returnKeyType : "default"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  textArea: {
    padding: 15,
    elevation: 1
  }
});

export default memo(TextArea)
