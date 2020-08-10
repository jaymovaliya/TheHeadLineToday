import React, { memo, useState, useReducer } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Switch, TextInput } from 'react-native';
import { AppHeader, Button, TextArea, Toast } from '../CoreUI';
import LeftArrow from '../assets/leftarrow.svg';
import useDeviceWidthHeight from '../Hooks/useDeviceWidthHeight';
import SinglePicker from '../Components/Picker/SinglePicker';
import MultiPicker from '../Components/Picker/MultiPicker';

const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);


function AddSlogan(props) {

    const [selected, setSelected] = useState(true);
    const [openSingle, setOpenSingle] = useState(true);
    const [openMultiple, setOpenMultiple] = useState(true);
    const [singleItem, setSelectedSingleItem] = useState('');
    const [sloganText, onChangeSloganText] = useState('');
    const [authorText, onChangeAuthorText] = useState('');

    const handleSwitch = () => {
        setSelected(!selected)
    }



    return (
        <View style={{ ...styles.container, backgroundColor: props.backgroundColor }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#F2F2F2" />
            <AppHeader>
                <View style={{ ...styles.headerView, backgroundColor: props.headerBackgroundColor, }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.goBack()}>
                        <View>
                            <LeftArrow />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.pageTitle}>Add Slogan</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={styles.rightTitleHeader} onPress={() =>
                            console.log({
                                data: { Notification: selected, Language: singleItem, sloganText: sloganText, authorText: authorText, }
                            })}>Publish</Text>
                    </View>
                </View>
            </AppHeader>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.mainContainer}>
                    <View style={styles.notificationContainer}>
                        <Text style={styles.rightTitleHeader}>Push Notification</Text>
                        <Switch
                            onValueChange={handleSwitch}
                            value={selected}
                            thumbColor={'#333333'}
                            trackColor={{ false: '#888888', true: '#888888' }}
                        />
                    </View>
                    <SinglePicker
                        open={openSingle}
                        setOpenSingle={setOpenSingle}
                        items={['English', 'Hindi', 'Gujarati']}
                        setItem={setSelectedSingleItem}
                        seletctedItem={singleItem}
                        placeholder={"Select Language"}
                    />
                    <View>
                        <View style={styles.notificationContainer}>
                            <Text style={styles.dropDownText}>Slogan</Text>
                        </View>
                        <TextArea
                            value={sloganText}
                            onChangeText={(text) => { onChangeSloganText(text) }}
                            backgroundColor={props.headerBackgroundColor}
                            placeholder={'Write Slogan'}
                            style={{
                                height: 110, width: null, borderColor: '#dcdbdb',
                                borderWidth: 1
                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.notificationContainer}>
                            <Text style={styles.dropDownText}>Author</Text>
                        </View>
                        <TextArea
                            value={authorText}
                            onChangeText={(text) => { onChangeAuthorText(text) }}
                            backgroundColor={props.headerBackgroundColor}
                            placeholder={'Writer Name'}
                            style={{
                                width: null, borderColor: '#dcdbdb',
                                borderWidth: 1, padding: 0, paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10
                            }}
                            numberOfLines={1}
                            returnKeyType={'done'}
                        />
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#F2F2F2',
        paddingTop: 10,
    },
    headerView: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15
    },
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    pageTitle: {
        fontFamily: 'RobotoSlab-Medium',
        fontSize: windowHeight * 0.025,
    },
    rightTitleHeader: {
        fontFamily: 'RobotoSlab-Medium',
        fontSize: windowHeight * 0.017,
    },
    dropDownText: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: windowHeight * 0.017,
    },
    dropdownContainer: {
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        height: 50,
        borderColor: '#dcdbdb',
        borderWidth: 1
    },
});

export default memo(AddSlogan)
