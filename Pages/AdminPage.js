/* @flow weak */

import React, { memo, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { AppHeader } from '../CoreUI';
import Menu from '../assets/menu.svg';
import Settings from '../assets/settings.svg';
import Plus from '../assets/Plus.svg';
import { getDimensions } from '../Hooks/useDeviceWidthHeight';
const { width, height } = getDimensions();
import AdminHeader from '../Components/AdminPage/AdminHeader.js';
import AdminSwitch from '../Components/AdminPage/AdminSwitch.js';
import AdminContent from '../Components/AdminPage/AdminContent.js';

const quotes = [
  {
    title: "We started this initiative to simplify news to deliver rich experience to reader. ",
    id: "1",
    status: "pending"
  },
  {
    title: "Act as if what you do makes a difference. It does.",
    id: "2",
    status: "pending"
  },
  {
    title: "Success is not final, failure is not fatal: it is the courage to continue that counts..",
    id: "3",
    status: "live"
  },
  {
    title: "Never bend your head. Always hold it high. Look the world straight in the eye.",
    id: "4",
    status: "pending"
  },
  {
    title: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    id: "5",
    status: "live"
  },
  {
    title: "કાંટા પર ચાલતી વ્યક્તિ ઝડપથી ટોચ સુધી પહોંચે છે કારણ કે... કાંટાઓ પગ ની ગતિ વધારે છે. ",
    id: "6",
    status: "pending"
  },
  {
    title: "અશક્ય શબ્દનો ઉપયોગ ફક્ત કાયર કરે છે. બહાદુર અને બુદ્ધિશાળી વ્યક્તિ પોતાનો માર્ગ જાતેજ કરે છે.",
    id: "7",
    status: "live"
  },
  {
    title: "દરરોજ તમારી જાતને ગઈકાલ કરતા વધુ સારી બનાવો, એક દિવસ તમે સફળ થશો.",
    id: "8",
    status: "pending"
  },
  {
    title: "વિજેતાઓ એવા લોકો નથી જે ક્યારેય નિષ્ફળ ન થયા હોય પણ તેઓ એવા લોકો બની જાય છે જેણે ક્યારેય હાર નથી માનતા.",
    id: "9",
    status: "live"
  },
  {
    title: "જેઓ યોગ્ય સમયે કામ કરતા નથી, તેઓ જીવનભર બીજાની ગુલામી કરે છે.",
    id: "10",
    status: "pending"
  }
]

function AdminPage(props){
  const [status, setStatus] = useState('pending');
  const [quotes, setQuotes] = useState([
    {
      title: "We started this initiative to simplify news to deliver rich experience to reader. ",
      id: "1",
      status: "pending"
    },
    {
      title: "Act as if what you do makes a difference. It does.",
      id: "2",
      status: "pending"
    },
    {
      title: "Success is not final, failure is not fatal: it is the courage to continue that counts..",
      id: "3",
      status: "live"
    },
    {
      title: "Never bend your head. Always hold it high. Look the world straight in the eye.",
      id: "4",
      status: "pending"
    },
    {
      title: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      id: "5",
      status: "live"
    },
    {
      title: "કાંટા પર ચાલતી વ્યક્તિ ઝડપથી ટોચ સુધી પહોંચે છે કારણ કે... કાંટાઓ પગ ની ગતિ વધારે છે. ",
      id: "6",
      status: "pending"
    },
    {
      title: "અશક્ય શબ્દનો ઉપયોગ ફક્ત કાયર કરે છે. બહાદુર અને બુદ્ધિશાળી વ્યક્તિ પોતાનો માર્ગ જાતેજ કરે છે.",
      id: "7",
      status: "live"
    },
    {
      title: "દરરોજ તમારી જાતને ગઈકાલ કરતા વધુ સારી બનાવો, એક દિવસ તમે સફળ થશો.",
      id: "8",
      status: "pending"
    },
    {
      title: "વિજેતાઓ એવા લોકો નથી જે ક્યારેય નિષ્ફળ ન થયા હોય પણ તેઓ એવા લોકો બની જાય છે જેણે ક્યારેય હાર નથી માનતા.",
      id: "9",
      status: "live"
    },
    {
      title: "જેઓ યોગ્ય સમયે કામ કરતા નથી, તેઓ જીવનભર બીજાની ગુલામી કરે છે.",
      id: "10",
      status: "pending"
    }
  ]);

  useEffect(() => {
    // fetch data
    //setQuotes(quotes);
  }, [])

  const deleteQuote = (id) => {
    const newQuotes = quotes.map(d => {
      return {
        ...d
      }
    });
    const index = newQuotes.findIndex(d => d.id === id);
    newQuotes[index]['delete'] = true;
    setQuotes(newQuotes);
  }

  const approveQuotes = () => {
    if(status === 'pending'){
      const filteredQuotes = quotes.filter(d => d.status === 'pending');
      const approveIds = [];
      const deleteIds = [];
      filteredQuotes.forEach((item, i) => {
        if(item.delete)
          deleteIds.push(item.id);
        else
          approveIds.push(item.id);
      });

      // call approveQuotes
      // call deleteQuotes
    } else {
      const filteredQuotes = quotes.filter(d => d.status === 'live');
      const deleteIds = filteredQuotes.filter(d => d.delete);
      // call deleteQuotes
    }
    // call fetch new data

  }

  return(
    <View style={{...styles.container, backgroundColor: props.backgroundColor }}>
      <AdminHeader/>
      <AdminSwitch
        status={status}
        setStatus={setStatus}
      />
      <AdminContent
        status={status}
        quotes={quotes}
        deleteQuote={deleteQuote}
      />
      <TouchableOpacity
        onPress={approveQuotes}
      >
        <View style={styles.footerButton}>
          <Text style={styles.footerText}>Approve</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default memo(AdminPage);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerButton: {
    height: height * 0.09,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'RobotoSlab-Medium'
  }
});
