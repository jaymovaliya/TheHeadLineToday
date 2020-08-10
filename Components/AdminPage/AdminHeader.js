import React, { memo, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Modal, ScrollView, TouchableHighlight } from 'react-native';
import { AppHeader } from '../../CoreUI';
import Menu from '../../assets/menu.svg';
import Settings from '../../assets/settings.svg';
import Plus from '../../assets/Plus.svg'
import { getDimensions } from '../../Hooks/useDeviceWidthHeight';
const { width, height } = getDimensions();

const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);
function AdminHeader(props) {

  const [openSingle, setOpenSingle] = useState(false);
  return (
    <View>
      <AppHeader>
        <View style={{ ...styles.headerView, backgroundColor: props.headerBackgroundColor }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('AboutPage')}>
            <View>
              <Menu />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.titleText}>Admin</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SettingsPage')}>
            <View style={styles.rightSelection}>
              <TouchableOpacity onPress={() => setOpenSingle(true)}>
                <Plus style={{ marginRight: 20 }} />
              </TouchableOpacity>
              <Settings />
            </View>
          </TouchableOpacity>
        </View>
      </AppHeader>
      <Modal
        transparent={true}
        visible={openSingle}
        onRequestClose={() => setOpenSingle(false)}
      >
        <TouchableHighlight onPress={() => setOpenSingle(false)}>
          <View style={styles.singlePickerModalContainer} onPress={() => setOpenSingle(false)}>
            <View style={{ flex: 1, }} />
            <TouchableHighlight style={styles.singlePickerModal} onPress={() => null}>
              <View>
                <View style={styles.modalSubContainer}>
                  <Text onPress={() => setOpenSingle(false)} style={styles.pageTitle}>Create</Text>
                </View>
                <View style={styles.modalSubContainer}>
                  <Text onPress={() => { props.navigation.navigate('AddNews'), setOpenSingle(false) }} style={styles.rightTitleHeader}>News</Text>
                </View>
                <View style={styles.modalSubContainer}>

                  <Text onPress={() => { props.navigation.navigate('AddSlogan'), setOpenSingle(false) }} style={styles.rightTitleHeader}>Slogan</Text>
                </View>
                <View style={styles.modalSubContainer}>

                  <Text onPress={() => { props.navigation.navigate('CreateAd'), setOpenSingle(false) }} style={styles.rightTitleHeader}>Ad</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </TouchableHighlight>

      </Modal>
    </View >
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
    paddingRight: 20,
    paddingTop: 20
  },
  modalSubContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    borderBottomColor: '#dcdbdb',
    borderBottomWidth: 1
  },
  titleText: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: height * 0.025,
    marginLeft: 40
  },
  rightSelection: {
    display: 'flex',
    flexDirection: 'row'
  },
  singlePickerModal: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20
  },
  singlePickerModalContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
    backgroundColor: '#00000099'
  },
  pageTitle: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight * 0.025,
  },
  rightTitleHeader: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight * 0.017,
  },
});

export default memo(AdminHeader)
