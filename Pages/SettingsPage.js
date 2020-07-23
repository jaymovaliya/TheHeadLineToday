import React, { memo, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Switch, Modal, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { AppHeader } from '../components';
import LeftArrow from '../assets/leftarrow.svg';
const windowHeight = Dimensions.get('window').height;

function SettingsPage(props) {
  const [ selected, setSelected ] = useState(true);
  const [ colors, setColors] = useState([
    {
      color: '#FFFFFF',
      darkColor: '#999999',
      selected: true
    },
    {
      color: '#FFEDDA',
      darkColor: '#CCBDAE',
      selected: false
    },
    {
      color: '#FFE4E6',
      darkColor: '#CCB6B8',
      selected: false
    },
    {
      color: '#E9F5EA',
      darkColor: '#BAC4BB',
      selected: false
    }
  ]);

  const [ modal, setModal ] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  useEffect(()=>{
    const oldColors = colors.map(d => {
      d.selected = false;
      return d;
    })
    oldColors[props.colorIndex].selected = true;
    setColors(oldColors)
  },[])

  const handleSwitch = () => {
    setSelected(!selected)
  }

  const changeThemeColor = (i) => {
    const oldColors = colors.map(d => {
      d.selected = false;
      return d;
    })
    oldColors[i].selected = true;
    setColors(oldColors)
    props.changeThemeColor(oldColors[i].color, i)
  }

  const changeLanguage = () => {

  }

  return (
    <View style={{...styles.container, backgroundColor: modal ? 'rgba(0,0,0,0.6)' : props.backgroundColor}}>
      <AppHeader>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('QuotePage')}>
            <View>
              <LeftArrow/>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.pageTitle}>Settings</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </AppHeader>
      <View style={styles.notificationContainer}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Push Notifications</Text>
        <Switch
         onValueChange = {handleSwitch}
         value = {selected}
         thumbColor={'#333333'}
         trackColor={{false: '#888888', true: '#888888'}}
        />
      </View>
      <View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Login with Google (Optional)</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Language</Text>
          <View>
            <Picker
              selectedValue={"English"}
              style={{height: 25, width: 130}}
              onValueChange={(itemValue, itemIndex) =>{}}
              >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="Hindi" value="Hindi" />
              <Picker.Item label="Gujarati" value="Gujarati" />
            </Picker>
          </View>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Interests</Text>
            <View>
              <Picker
                selectedValue={"sport"}
                style={{height: 25, width: 130}}
                onValueChange={(itemValue, itemIndex) =>{}}>
                <Picker.Item label="Sport" value="sport" />
                <Picker.Item label="Music" value="music" />
              </Picker>
            </View>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Calm Read</Text>
          <View style={styles.colorSelector}>
            {
              colors.map((d,i) => {
                return (
                  <TouchableOpacity
                    onPress={() => changeThemeColor(i)}
                    key={i}
                    >
                    <View
                      style={{...styles.colorBubble, backgroundColor: modal ? d.darkColor : d.color, borderWidth: d.selected ? 2 : 0}}
                      key={i}
                    />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Terms & Conditions</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Version - 2.0 </Text>
        <TouchableOpacity
          onPress={openModal}
          >
          <View>
            <Text style={{fontSize: 18, color: modal ? '#003c00' : '#128807'}}>Check for Update </Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      {
        modal && (
          <View style={styles.modalContainer}>
            <Modal
              transparent = {true}
              visible = {true}>
              <View style={{...styles.modal, height: windowHeight*0.30}}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>New Update is Available</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={closeModal}>
                    <View style={styles.modalContent}>
                      <Text style={styles.modalContentText}>Yes, Update Now</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={closeModal}>
                    <View style={styles.modalContent}>
                      <Text style={styles.modalContentText}>Remind me Later</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        )
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
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -20
  },
  notificationContainer: {
    backgroundColor: 'rgba(0,0,0,0.14)',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  navItems: {
    padding: 15,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.14)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorSelector: {
    display: 'flex',
    flexDirection: 'row',
  },
  colorBubble: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginLeft: 10
  },
  modal: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: '130%',
    marginBottom: 30,
    backgroundColor: '#FFFFFF'
  },
  modalHeader: {
    padding: 30
  },
  modalHeaderText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  modalContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.14)',
    padding: 20
  },
  modalContentText: {
    fontSize: 18
  }
});

export default memo(SettingsPage)
