import React, { memo, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, ToastAndroid, StatusBar, ScrollView } from 'react-native';
import { AppHeader, Toast } from '../CoreUI';
import LeftArrow from '../assets/leftarrow.svg';
import Title from '../assets/title.svg';
import India from '../assets/india.svg';
import Great from '../assets/great.svg';
import Happy from '../assets/happy.svg';
import Feature from '../assets/feature.svg';
import Boaring from '../assets/boaring.svg';
import Improve from '../assets/improve.svg';
const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);
function AboutPage(props) {
  const [ modal, setModal ] = useState(false);
  const [ toast, setToast ] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  const openFeedback = () => {
    setModal(false);
    props.navigation.navigate('FeedbackPage');
  }

  const showfeedbackMsg = () => {
    setModal(false);
    setToast(true);
    setTimeout(()=>{
      setToast(false);
    },1000)
  }

  return (
    <View style={{...styles.container, backgroundColor: modal ? props.modalHeaderBackground : props.backgroundColor }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F2F2F2"/>
      {
        toast && (<Toast
          message={"Thanks for your Feedback"}
        />)
      }
      <AppHeader>
        <View style={{...styles.headerView, backgroundColor: modal ? props.modalHeaderBackground : props.headerBackgroundColor}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('QuotePage')}>
            <View>
              <LeftArrow/>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.pageTitle}>About</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </AppHeader>
      <ScrollView>
      <View>
      <View style={styles.mainContent}>
        <View><Title/></View>
        <View>
          <Text style={styles.mainText}>We started this initiative to simplify news to deliver a rich experience to the reader.</Text>
          <Text style={styles.mainText}>Help us to improve our services so we can continue contributing new features & other big change initiatives that make our society united & stronger. Share your valuable Feedback, Review, or Share the app in your circle. Thank you. </Text>
        </View>
        <View style={{marginTop: 15}}>
          <India/>
        </View>
      </View>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Share App</Text>
        </View>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navText}>Rate us on Playstore</Text>
        </View>
        <TouchableOpacity onPress={openModal}>
          <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
            <Text style={styles.navText}>Feedback/Contact</Text>
          </View>
        </TouchableOpacity>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navTextBlurred}>Become Editor (Coming Soon)</Text>
        </View>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navTextBlurred}>All Indian Languages (Coming Soon)</Text>
        </View>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navTextBlurred}>Interests (Coming Soon)</Text>
        </View>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navTextBlurred}>Become Partner (Coming Soon)</Text>
        </View>
        <View style={{...styles.navItems, borderTopColor: modal ? 'rgba(0,0,0,0.14)' : props.dividerColor}}>
          <Text style={styles.navTextBlurred}>Help & Support (Coming Soon)</Text>
        </View>
      </View>
      </ScrollView>
      {
        modal && (
          <View style={styles.modalContainer}>
            <Modal
              transparent = {true}
              visible = {true}>
              <View style={{...styles.modal, backgroundColor: props.headerBackgroundColor}}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Are you Happy with our Service?</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={showfeedbackMsg}>
                    <View style={styles.modalContent}>
                      <View style={styles.emoji}><Great/></View>
                      <Text style={styles.modalContentText}>Great, I Love it!</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={showfeedbackMsg}>
                    <View style={styles.modalContent}>
                      <View style={styles.emoji}><Happy/></View>
                      <Text style={styles.modalContentText}>Very Happy</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={openFeedback}>
                    <View style={styles.modalContent}>
                      <View style={styles.emoji}><Feature/></View>
                      <Text style={styles.modalContentText}>Need More Features</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={openFeedback}>
                    <View style={styles.modalContent}>
                      <View style={styles.emoji}><Boaring/></View>
                      <Text style={styles.modalContentText}>It’s boaring App</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={openFeedback}>
                    <View style={styles.modalContent}>
                      <View style={styles.emoji}><Improve/></View>
                      <Text style={styles.modalContentText}>Please Improve</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={closeModal}>
                    <View style={{...styles.modalContent, justifyContent: 'center'}}>
                      <Text style={{...styles.modalContentText, marginLeft: 0}}>Cancel</Text>
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
    fontFamily: 'RobotoSlab-Medium',
    fontSize: windowHeight*0.025,
    marginLeft: -20
  },
  mainContent: {
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    marginTop: 10,
    fontSize: windowHeight*0.022,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Regular',
  },
  navItems: {
    padding: windowHeight * 0.016,
    paddingLeft: 20,
    borderTopWidth: 1
  },
  modal: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: windowHeight*0.35,
    marginBottom: 30,
    borderRadius: 2,
    elevation: 3
  },
  modalHeader: {
    padding: 10,
    margin: windowHeight*0.02
  },
  modalHeaderText: {
    textAlign: 'center',
    fontSize: windowHeight * 0.025,
    fontFamily: 'RobotoSlab-Bold',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.14)',
    padding: windowHeight*0.022
  },
  modalContentText: {
    marginLeft: -20,
    fontSize: windowHeight * 0.022,
    fontFamily: 'RobotoSlab-Regular'
  },
  navText:{
    fontSize: windowHeight * 0.022,
    fontFamily: 'RobotoSlab-Regular'
  },
  navTextBlurred:{
    fontSize: windowHeight * 0.022,
    fontFamily: 'RobotoSlab-Regular',
    color: 'rgba(0,0,0,0.20)'
  },
  emoji:{
    marginLeft: 15
  }
});

export default memo(AboutPage)
