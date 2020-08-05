import React, { memo } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AppHeader } from '../../CoreUI';
import Menu from '../../assets/menu.svg';
import Title from '../../assets/title.svg'
import Settings from '../../assets/settings.svg';

function QuoteHeader(props) {
  return (
    <View style={styles.container}>
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
});

export default memo(QuoteHeader)
