import React, { memo, useState, useReducer } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar, Switch, TextInput } from 'react-native';
import { AppHeader, Button, TextArea, Toast } from '../CoreUI';
import LeftArrow from '../assets/leftarrow.svg';
import useDeviceWidthHeight from '../Hooks/useDeviceWidthHeight';
import SinglePicker from '../Components/Picker/SinglePicker';
import MultiPicker from '../Components/Picker/MultiPicker';

const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);

const interestsData = [
    {
        text: "Sport",
        selected: false
    },
    {
        text: "Entertainment",
        selected: false
    },
    {
        text: "Politics",
        selected: false
    },
    {
        text: "Science",
        selected: false
    },
    {
        text: "Nature",
        selected: false
    },
    {
        text: "Spiritual",
        selected: false
    }
]

const initNewsData = [
    {
        content: ''
    }
]
function AddNews(props) {

    const [selected, setSelected] = useState(true);
    const [openSingle, setOpenSingle] = useState(true);
    const [singleItem, setSelectedSingleItem] = useState('');
    const [openSingleOne, setOpenSingleOne] = useState(true);
    const [singleItemOne, setSelectedSingleItemOne] = useState('');
    const [newsData, onChangeNewsData] = useReducer((newsData, { type, value }) => {
        switch (type) {
            case "add":
                return [...newsData, {
                    content: ''
                }];
            case "remove":
                return newsData.filter((_, index) => index !== value);
            case "text":
                return value
            default:
                return newsData;
        }
    }, initNewsData);

    console.log('news', newsData)
    const handleSwitch = () => {
        setSelected(!selected)
    }

    function handleChange(data) {
        const values = [...newsData];
        values[data.i].content = data.value;
        onChangeNewsData({ type: 'text', value: values });
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
                        <Text style={styles.pageTitle}>Add News</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={styles.rightTitleHeader} onPress={() =>
                            console.log({
                                data: { Notification: selected, Language: singleItem, Type: singleItemOne, newsData: newsData }
                            })}>Publish</Text>
                    </View>
                </View>
            </AppHeader>
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
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
                        placeholder={'Select Language'}
                    />
                    <SinglePicker
                        open={openSingleOne}
                        setOpenSingle={setOpenSingleOne}
                        items={['Sport', 'Entertainment', 'Politics', 'Science', 'Nature', 'Spiritual',]}
                        setItem={setSelectedSingleItemOne}
                        seletctedItem={singleItemOne}
                        placeholder={'News, India, World'}
                    />
                    {newsData.length !== 0 &&
                        newsData.map((item, index) =>
                            <View >
                                <View style={styles.notificationContainer}>
                                    <Text style={styles.dropDownText}>News {index + 1}</Text>
                                    <Text style={[styles.dropDownText, { color: 'red' }]} onPress={() => onChangeNewsData({ type: "remove", value: index })}>Remove</Text>
                                </View>
                                <TextArea
                                    onChangeText={(text) => { handleChange({ value: text, i: index }) }}
                                    backgroundColor={props.headerBackgroundColor}
                                    placeholder={'Write News'}
                                    style={{
                                        height: 110, width: null, borderColor: '#dcdbdb',
                                        borderWidth: 1
                                    }}
                                />
                            </View>
                        )
                    }

                    <TouchableOpacity onPress={() => onChangeNewsData({ type: "add" })} style={styles.addNewsButtonContainer}>
                        <Text style={[styles.dropDownText, { color: '#FFF' }]}>Add More News</Text>
                    </TouchableOpacity>
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
    addNewsButtonContainer: {
        backgroundColor: '#000',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 70,
        marginVertical: 30,
    }
});

export default memo(AddNews)
