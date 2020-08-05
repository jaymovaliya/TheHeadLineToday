import React from 'react';
import { StyleSheet, View, Text, Modal, Dimensions, StatusBar } from 'react-native';
const statusBarHeight = StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);;

export default function Toast(props){
  return (
    <View style={styles.toastContainer}>
    <Modal
      transparent = {true}
      visible = {true}>
      <View style={{...styles.toastBox, backgroundColor: '#000000'}}>
        <Text style={styles.text}>{props.message}</Text>
      </View>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  toastContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  toastBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '60%',
    height: 46,
    backgroundColor: '#ffffff',
    borderRadius: 23,
    borderColor: '#ffffff',
    shadowColor: '#f1f1f1',
    elevation: 1,
    padding: 20,
    marginLeft: windowWidth*0.2,
    marginTop: windowHeight*0.8

  },
  text:{
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 14,
    color: '#ffffff',
  }
});
