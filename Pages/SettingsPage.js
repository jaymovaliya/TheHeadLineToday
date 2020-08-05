import React, { memo, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Switch, Modal, Dimensions, StatusBar } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { AppHeader } from '../CoreUI';
import LeftArrow from '../assets/leftarrow.svg';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '223738430760-rs610386m3su11gjquoolgjt5k9vqq25.apps.googleusercontent.com'
});

function SettingsPage(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('0')
  const [ selected, setSelected ] = useState(true);
  const [ colors, setColors] = useState([
    {
      color: '#FFFFFF',
      darkColor: '#999999',
      headerColor: '#FFFFFF',
      dividerColor: '#F2F2F2',
      selected: true
    },
    {
      color: '#FFEDDA',
      darkColor: '#665E57',
      headerColor: '#FFF4E9',
      dividerColor: '#F7E0C9',
      selected: false
    },
    {
      color: '#FFE4E6',
      darkColor: '#665B5C',
      headerColor: '#FFECEC',
      dividerColor: '#FCD5D5',
      selected: false
    },
    {
      color: '#E9F5EA',
      darkColor: '#5d625d',
      headerColor: '#EDFAEE',
      dividerColor: '#D8F0DA',
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

  const onAuthStateChanged = (user) => {
    if(user){
      setLoggedIn(true);
      setEmail(user.email)
    } else {
      setLoggedIn(false);
      setEmail('');
    }
  }

  useEffect(()=>{
    const oldColors = colors.map(d => {
      d.selected = false;
      return d;
    })
    oldColors[props.colorIndex].selected = true;
    setColors(oldColors);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
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
    props.changeThemeColor(oldColors[i], i)
  }

  const changeLanguage = async (language) => {
    await AsyncStorage.setItem('LANGUAGE', language);
  }

  const onGoogleButtonPress = async () => {
    try{
      const { idToken } = await GoogleSignin.signIn();
      console.log(idToken);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log(googleCredential);
      return auth().signInWithCredential(googleCredential);
    } catch(err) {
      console.log("coming here....")
      console.error(err);
    }
  }

  return (
    <View style={{...styles.container, backgroundColor: modal ? props.modalHeaderBackground : props.backgroundColor }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F2F2F2"/>
      <AppHeader>
        <View style={{...styles.headerView, backgroundColor: modal ? props.modalHeaderBackground : props.headerBackgroundColor}}>
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
        <Text style={styles.pushNotfTxt}>Push Notifications</Text>
        <Switch
         onValueChange = {handleSwitch}
         value = {selected}
         thumbColor={'#333333'}
         trackColor={{false: '#888888', true: '#888888'}}
        />
      </View>
      <View>
        {
          loggedIn && (
            <TouchableOpacity
              onPress={() => auth().signOut().then(() => {})}
            >
              <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
                <Text style={styles.navText}>{`${email} - Log out`}</Text>
              </View>
            </TouchableOpacity>
          )
        }
        {
          !loggedIn && (
            <TouchableOpacity
              onPress={() => onGoogleButtonPress().then(() => {})}
            >
              <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
                <Text style={styles.navText}>Login with Google (Optional)</Text>
              </View>
            </TouchableOpacity>
          )
        }
        <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Language</Text>
          <View>
            <Picker
              selectedValue={"English"}
              style={{height: 25, width: 130}}
              onValueChange={changeLanguage}
              >
              <Picker.Item label="English" value="english" />
              <Picker.Item label="Gujarati" value="gujarati" />
            </Picker>
          </View>
        </View>
        <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Interests</Text>
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
        <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Calm Read</Text>
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
        <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Terms & Conditions</Text>
        </View>
        <View style={{...styles.navItems, borderBottomColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Version - 2.0 </Text>
        <TouchableOpacity
          onPress={openModal}
          >
          <View>
            <Text style={{fontSize: windowHeight*0.022, color: modal ? '#003c00' : '#128807', fontFamily: 'RobotoSlab-Regular'}}>Check for Update </Text>
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
              <View style={{...styles.modal, backgroundColor: props.headerBackgroundColor}}>
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
    flex: 1,
    overflow: 'hidden'
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
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight*0.025,
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
    padding: windowHeight * 0.016,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1
  },
  colorSelector: {
    display: 'flex',
    flexDirection: 'row',
  },
  colorBubble: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 10
  },
  modal: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: windowHeight * 0.7,
    marginBottom: 30,
    borderRadius: 2,
    elevation: 3
  },
  modalHeader: {
    padding: windowHeight * 0.035
  },
  modalHeaderText: {
    fontFamily: 'RobotoSlab-Medium',
    textAlign: 'center',
    fontSize: windowHeight*0.025,
  },
  modalContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.14)',
    padding: windowHeight*0.022
  },
  modalContentText: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: windowHeight*0.022
  },
  pushNotfTxt:{
    fontSize: windowHeight * 0.022,
    fontFamily: 'RobotoSlab-Medium',
  },
  navText:{
    fontSize: windowHeight * 0.022,
    fontFamily: 'RobotoSlab-Regular'
  },
});

export default memo(SettingsPage)
