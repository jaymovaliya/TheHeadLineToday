import React, { memo, useState, useEffect } from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, StatusBar, Alert } from 'react-native';
import { AppHeader, Toast } from '../CoreUI';
import Menu from '../assets/menu.svg';
import Title from '../assets/title.svg'
import Settings from '../assets/settings.svg';
import Share from '../assets/share.svg';
import Scroll from '../assets/scroll.svg';
import QuotesHeader from '../Components/QuotePage/QuoteHeader.js';
import { getDimensions } from '../Hooks/useDeviceWidthHeight';
const { width, height } = getDimensions();

const quotes = [
  {
    time: "Today",
    quote: "We started this initiative to simplify news to deliver rich experience to reader. ",
    language: "english"
  },
  {
    time: "Yesterday",
    quote: "Act as if what you do makes a difference. It does.",
    language: "english"
  },
  {
    time: "Yesterday",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts..",
    language: "english"
  },
  {
    time: "18 Jul' 20",
    quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    language: "english"
  },
  {
    time: "16 Jul' 20",
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    language: "english"
  },
  {
    time: "Today",
    quote: "કાંટા પર ચાલતી વ્યક્તિ ઝડપથી ટોચ સુધી પહોંચે છે કારણ કે... કાંટાઓ પગ ની ગતિ વધારે છે. ",
    language: "gujarati"
  },
  {
    time: "Yesterday",
    quote: "અશક્ય શબ્દનો ઉપયોગ ફક્ત કાયર કરે છે. બહાદુર અને બુદ્ધિશાળી વ્યક્તિ પોતાનો માર્ગ જાતેજ કરે છે.",
    language: "gujarati"
  },
  {
    time: "Yesterday",
    quote: "દરરોજ તમારી જાતને ગઈકાલ કરતા વધુ સારી બનાવો, એક દિવસ તમે સફળ થશો.",
    language: "gujarati"
  },
  {
    time: "18 Jul' 20",
    quote: "વિજેતાઓ એવા લોકો નથી જે ક્યારેય નિષ્ફળ ન થયા હોય પણ તેઓ એવા લોકો બની જાય છે જેણે ક્યારેય હાર નથી માનતા.",
    language: "gujarati"
  },
  {
    time: "16 Jul' 20",
    quote: "જેઓ યોગ્ય સમયે કામ કરતા નથી, તેઓ જીવનભર બીજાની ગુલામી કરે છે.",
    language: "gujarati"
  },
  {
    time: "Today",
    quote: "No more headlines",
    type: "end"
  }
]

function QuotePage(props) {
  const [header, enableHeader] = useState(true);

  return (
    <View style={{...styles.container, backgroundColor: props.backgroundColor }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F2F2F2"/>
      {header && (
        <AppHeader>
          <View style={{...styles.headerView, backgroundColor: props.headerBackgroundColor}}>
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
      )
      }
      {
        <ScrollView
          pagingEnabled
          showsVerticalScrollIndicator={false}
          onMomentumScrollBegin={() => enableHeader(false)}
          snapToInterval={height}
          decelerationRate={"fast"}
          snapToAlignment={"center"}
          >
          <View>
            {
              !header && (
                <AppHeader>
                <View style={{...styles.headerView, backgroundColor: props.headerBackgroundColor}}>
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
            )
            }
            {
              quotes.map((d,i)=>{
                return (
                  <TouchableOpacity
                    onPress={() => enableHeader(header => !header)}
                    key={i}
                    activeOpacity={1}
                    >
                    <View key={i} style={styles.quoteContent}>
                      <View style={styles.timeBoxContainer}>
                        <View style={{...styles.timeBox, backgroundColor: props.headerBackgroundColor}}>
                          <Text style={styles.timeText}>{d.time}</Text>
                        </View>
                      </View>
                      <View>
                        <Text style={{...styles.mainText, opacity: d.type === "end" ? 0.2 : 1, fontSize: d.type === "end" ? height*0.04 : height * 0.052}}>{d.quote}</Text>
                      </View>
                      { d.type !== "end" && (
                        <View style={styles.shareIcon}>
                          <Share/>
                        </View>
                      )
                      }
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      }
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
  quoteContent: {
    height: height,
    display: 'flex',
    alignItems: 'center'
  },
  timeBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: height*0.14,
    height: height*0.038,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'rgba(0,0,0,0.20)'
  },
  mainText: {
    fontFamily: 'RobotoSlab-Bold',
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25
  },
  timeText: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: height * 0.018,
    color: 'rgba(0,0,0,0.20)'
  },
  timeBoxContainer: {
    height: height * 0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    marginTop: 30
  }
});

export default memo(QuotePage)
