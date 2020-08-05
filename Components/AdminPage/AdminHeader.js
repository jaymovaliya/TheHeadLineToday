import React, { memo } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AppHeader } from '../../CoreUI';
import Menu from '../../assets/menu.svg';
import Settings from '../../assets/settings.svg';
import Plus from '../../assets/Plus.svg'
import { getDimensions } from '../../Hooks/useDeviceWidthHeight';
const { width, height } = getDimensions();

function AdminHeader(props) {
  return (
    <View>
      <AppHeader>
        <View style={{...styles.headerView, backgroundColor: props.headerBackgroundColor}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('AboutPage')}>
            <View>
              <Menu/>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.titleText}>Admin</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SettingsPage')}>
            <View style={styles.rightSelection}>
              <Plus style={{marginRight: 20}}/>
              <Settings/>
            </View>
          </TouchableOpacity>
        </View>
      </AppHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  titleText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: height*0.025,
    marginLeft: 40
  },
  rightSelection: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default memo(AdminHeader)
