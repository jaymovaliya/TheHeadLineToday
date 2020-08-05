/* @flow weak */

import React, {memo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);;
import Gandhi from '../assets/gandhi.svg';
import GandhiImage from '../assets/gandhi.png';
import Patel from '../assets/patel.svg';
import PatelImage from '../assets/patel.png';
import Ambedkar from '../assets/ambedkar.svg';
import AmbedkarImage from '../assets/ambedkar.png';

const quotes = [
  {
    quote: 'You must be the change you wish to see in the world.',
    person: '- M.k. Gandhi'
  },
  {
    quote: 'Manpower without Unity is not a strength unless it is harmonized and united properly, then it becomes a spiritual power.',
    person: '- Sardar Vallabhbhai Patel'
  },
  {
    quote: 'We are Indians, firstly and lastly.',
    person: '- Dr. B. R. Ambedkar'
  }
]

function InspiredPage(props){
  const [index, setIndex] = useState(0);
  const changePage = () => {
    if(index < 2)
      setIndex(index + 1)
    else {
      props.navigation.navigate('LanguagePage');
    }
  }
  return (
    <View style={{...styles.container, backgroundColor: props.backgroundColor }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F2F2F2"/>
      <View style={{height: windowHeight*0.015, backgroundColor: '#FF9933'}}>
      </View>
      <View style={{...styles.inspiredBy, height: windowHeight*0.15}}>
        <Text style={styles.inspiredByTxt}>Inspired By</Text>
      </View>
      <View style={{...styles.inspiredBy, height: windowHeight*0.37}}>
      {
        index === 0 && (
          <Image
            style={styles.personImage}
            source={GandhiImage}
          />
        )
      }
      {
        index === 1 && (
          <Image
            style={styles.personImage}
            source={PatelImage}
          />
        )
      }
      {
        index === 2 && (
          <Image
            style={styles.personImage}
            source={AmbedkarImage}
          />
        )
      }
      </View>
      <View style={{...styles.inspiredBy, height: windowHeight*0.25}}>
        <Text style={styles.sloganTxt}>{quotes[index].quote}</Text>
        <Text style={styles.sloganNameTxt}>{quotes[index].person}</Text>
      </View>
      <View style={{...styles.inspiredBy, height: windowHeight*0.2}}>
        <TouchableOpacity onPress={changePage}>
          <Text style={styles.sloganNameTxt}>{index < 2 ? 'Next' : 'Start'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: windowHeight*0.015, backgroundColor: '#128807'}}>
      </View>
    </View>
  )
}

export default memo(InspiredPage);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inspiredBy: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inspiredByTxt: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight*0.026,
  },
  sloganTxt: {
    fontFamily: 'RobotoSlab-Bold',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontSize: windowHeight*0.035,
  },
  sloganNameTxt:{
    fontFamily: 'RobotoSlab-Medium',
    marginTop: 10,
    fontSize: windowHeight*0.025
  },
  personImage: {
    width: windowHeight * 0.38,
    height: windowHeight * 0.38
  }
});
