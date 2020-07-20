import React, { memo, useState } from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AppHeader } from '../components';
import Menu from '../assets/menu.svg';
import Title from '../assets/title.svg'
import Settings from '../assets/settings.svg';
import Share from '../assets/share.svg';
import Scroll from '../assets/scroll.svg';
const windowHeight = Dimensions.get('window').height;
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';

const quotes = [
  {
    time: "Today",
    quote: "We started this initiative to simplify news to deliver rich experience to reader."
  },
  {
    time: "Yesterday",
    quote: "Act as if what you do makes a difference. It does."
  },
  {
    time: "Yesterday",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.."
  },
  {
    time: "18 Jul' 20",
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye."
  },
  {
    time: "16 Jul' 20",
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals."
  }
]

function QuotePage(props) {
  const [index, setIndex] = useState(0)
  const swipeUp = () => {
    if(index < quotes.length - 1){
      setIndex(index + 1);
    }
  }

  const swipeDown = () => {
    if(index > 0){
      setIndex(index - 1);
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('AboutPage')}>
            <View>
              <Menu/>
            </View>
          </TouchableOpacity>
          <View>
            <Title/>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SettingsPage')}>
            <View>
              <Settings/>
            </View>
          </TouchableOpacity>
        </View>
      </AppHeader>
      <GestureRecognizer
        onSwipeUp={swipeUp}
        onSwipeDown={swipeDown}
      >
      <View style={styles.mainContent}>
        <View style={styles.timeBox}>
          <Text style={{color: '#A1A1A1', fontSize: 14}}>{quotes[index].time}</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainText}>{quotes[index].quote}</Text>
        </View>
        <View style={styles.shareIcon}>
          <Share/>
        </View>
        <View style={styles.footerView}>
          <View>
          </View>
          <Text style={{color: '#A1A1A1', fontSize: 14}}>Scroll to read more news...</Text>
          <View>
            <Scroll/>
          </View>
        </View>
      </View>
      </GestureRecognizer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  mainContent: {
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 5
  },
  mainText: {
    height: windowHeight * 0.7,
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  footerView: {
    margin: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default memo(QuotePage)
