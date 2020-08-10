/* @flow weak */

import React, { memo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
  StatusBar
} from 'react-native';
import { AppHeader, Button, TextArea, Toast } from '../CoreUI';
import LeftArrow from '../assets/leftarrow.svg';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);

function FeedbackPage(props) {
  const [value, onChangeText] = useState('');
  const [toast, setToast] = useState(false);
  const onBtnClick = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 1000)
    props.navigation.navigate('AboutPage');
  }


  return (
    <View style={{ ...styles.container, backgroundColor: props.backgroundColor }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F2F2F2" />
      {
        toast && (<Toast
          message={"Thanks for your Feedback"}
        />)
      }
      <AppHeader>
        <View style={{ ...styles.headerView, backgroundColor: props.headerBackgroundColor }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('AboutPage')}>
            <View>
              <LeftArrow />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.pageTitle}>Feedback</Text>
          </View>
          <View></View>
        </View>
      </AppHeader>
      <View style={styles.textAreaContainer}>
        <TextArea
          value={value}
          onChangeText={(text) => { onChangeText(text) }}
          backgroundColor={props.headerBackgroundColor}
          placeholder={'Write your feedback or message'}
          numberOfLines={7}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={"Submit"}
          onBtnClick={onBtnClick}
        >
        </Button>
      </View>
    </View>
  )
}

export default memo(FeedbackPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  pageTitle: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight * 0.025,
    marginLeft: -20
  },
  textAreaContainer: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30
  }
});
