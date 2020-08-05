import React, { memo } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { getDimensions } from '../../Hooks/useDeviceWidthHeight';
import Delete from '../../assets/delete.svg'
const { width, height } = getDimensions();

function AdminContent(props) {
  return (
    <View style={styles.contentContainer}>
      <ScrollView>
        {
          props.quotes && props.quotes.length > 0 && props.quotes.filter(d => d.status === props.status)
          .filter(d => !d.delete)
          .map((d,i) => {
            return (
              <View
                key={i}
                style={styles.newsContainer}
              >
                <View style={styles.textContainer}>
                  <Text  style={styles.newsText}>{d.title}</Text>
                </View>
                <TouchableOpacity onPress={() => props.deleteQuote(d.id)}>
                  <View style={styles.iconContainer}>
                    <Delete/>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
      {
        props.quotes && props.quotes.length === 0 && (
          <View>
            <Text>No more headlines</Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    height: height * 0.745
  },
  newsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.14)'
  },
  textContainer: {
    width: width * 0.8,
    paddingRight: 15
  },
  iconContainer: {
    marginLeft: 15,
    width: width * 0.2
  },
  newsText: {
    fontSize: 16
  }
});

export default memo(AdminContent)
