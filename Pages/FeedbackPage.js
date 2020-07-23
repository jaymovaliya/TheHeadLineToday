/* @flow weak */

import React, { memo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { AppHeader, Button, TextArea } from '../components';
import LeftArrow from '../assets/leftarrow.svg';

function FeedbackPage(props){
  const [value, onChangeText] = useState('');
  return(
    <View style={{...styles.container, backgroundColor: props.backgroundColor }}>
      <AppHeader>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('AboutPage')}>
            <View>
              <LeftArrow/>
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
          onChangeText={(text) => {onChangeText(text)}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text={"Submit"}></Button>
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
    fontSize: 20,
    fontWeight: 'bold',
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
