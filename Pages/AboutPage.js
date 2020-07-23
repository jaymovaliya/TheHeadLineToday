import React, { memo, useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, ToastAndroid } from 'react-native';
import { AppHeader } from '../components';
import LeftArrow from '../assets/leftarrow.svg';
import Title from '../assets/title.svg';
import India from '../assets/madeinindia.svg';
import Great from '../assets/great.svg';
import Happy from '../assets/happy.svg';
import Feature from '../assets/feature.svg';
import Boaring from '../assets/boaring.svg';
import Improve from '../assets/improve.svg';
const windowHeight = Dimensions.get('window').height;

function AboutPage(props) {
  const [ modal, setModal ] = useState(false);
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
    ToastAndroid.show("Thanks for your feedback", ToastAndroid.SHORT);
  }

  return (
    <View style={{...styles.container, backgroundColor: modal ? 'rgba(0,0,0,0.6)' : props.backgroundColor }}>
      <AppHeader>
        <View style={styles.headerView}>
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
      <View style={styles.mainContent}>
        <View style={{margin: 20}}><Title/></View>
        <View>
          <Text style={styles.mainText}>We started this initiative to simplify news to deliver a rich experience to the reader.</Text>
          <Text style={styles.mainText}>Help us to improve our services so we can continue contributing new features & other big change initiatives that make our society united & stronger. Share your valuable Feedback, Review, or Share the app in your circle. Thank you. </Text>
        </View>
        <View style={{margin: 20}}>
          <Image
            style={{width: 300, height: 30}}
            source={require('../assets/india.png')}
          />
        </View>
      </View>
      <View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Share App</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18}}>Rate us on Playstore</Text>
        </View>
        <TouchableOpacity onPress={openModal}>
          <View style={styles.navItems}>
            <Text style={{fontSize: 18}}>Feedback/Contact</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.14)'}}>Become Editor (Coming Soon)</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.14)'}}>All Indian Languages (Coming Soon)</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.14)'}}>Interests (Coming Soon)</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.14)'}}>Become Partner (Coming Soon)</Text>
        </View>
        <View style={styles.navItems}>
          <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.14)'}}>Help & Support (Coming Soon)</Text>
        </View>
      </View>
      {
        modal && (
          <View style={styles.modalContainer}>
            <Modal
              transparent = {true}
              visible = {true}>
              <View style={{...styles.modal, height: windowHeight*0.6}}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Are you Happy with our Service?</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={showfeedbackMsg}>
                    <View style={styles.modalContent}>
                      <View><Great/></View>
                      <Text style={styles.modalContentText}>Great, I Love it!</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={showfeedbackMsg}>
                    <View style={styles.modalContent}>
                      <View><Happy/></View>
                      <Text style={styles.modalContentText}>Very Happy</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={openFeedback}>
                    <View style={styles.modalContent}>
                      <View><Feature/></View>
                      <Text style={styles.modalContentText}>Need More Features</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={openFeedback}>
                    <View style={styles.modalContent}>
                      <View><Boaring/></View>
                      <Text style={styles.modalContentText}>It’s boaring App</Text>
                      <View></View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={openFeedback}>
                    <View style={styles.modalContent}>
                      <View><Improve/></View>
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
    fontSize: 20,
    fontWeight: 'bold',
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
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600'
  },
  navItems: {
    padding: 10,
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.14)'
  },
  modal: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: '80%',
    marginBottom: 30,
    backgroundColor: '#FFFFFF'
  },
  modalHeader: {
    padding: 10,
    marginBottom: 20
  },
  modalHeaderText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.14)',
    padding: 20
  },
  modalContentText: {
    marginLeft: -10,
    fontSize: 18
  }
});

export default memo(AboutPage)
