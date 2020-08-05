import React, { memo } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getDimensions } from '../../Hooks/useDeviceWidthHeight';
import Share from '../../assets/share.svg';
import QuoteHeader from './QuoteHeader.js';
const { width, height } = getDimensions();


function QuoteContent(props) {
  return (
    <View style={styles.container}>
    <ScrollView
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onMomentumScrollBegin={() => props.enableHeader(false)}
      snapToInterval={height}
      decelerationRate={"fast"}
      snapToAlignment={"center"}
      >
      <View>
        {
          !props.header && <QuoteHeader/>
        }
        {
          props.quotes.map((d,i)=>{
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default memo(QuoteContent)
