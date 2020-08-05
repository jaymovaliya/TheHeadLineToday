import React, { memo } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { getDimensions } from '../../Hooks/useDeviceWidthHeight';
const { width, height } = getDimensions();

function AdminSwitch(props) {
  return (
    <View style={styles.switchContainer}>
      <View style={{...styles.selection, borderBottomWidth: props.status === 'pending' ? 2 : 0}}>
        <TouchableOpacity
          onPress={() => props.setStatus('pending')}
          activeOpacity={1}
        >
          <View>
            <Text style={{...styles.switchText, color: props.status === 'pending' ? '#000000' : 'rgba(0,0,0,0.6)'}}>PENDING</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View  style={{...styles.selection, borderBottomWidth: props.status === 'live' ? 2 : 0}}>
        <TouchableOpacity
          onPress={() => props.setStatus('live')}
          activeOpacity={1}
        >
          <View>
            <Text style={{...styles.switchText, color: props.status === 'live' ? '#000000' : 'rgba(0,0,0,0.6)'}}>LIVE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: height * 0.075
  },
  selection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width*0.5,
    borderBottomColor: '#000000'
  },
  switchText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 16
  }
});

export default memo(AdminSwitch)
