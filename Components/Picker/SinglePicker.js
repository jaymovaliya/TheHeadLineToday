import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Modal, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import LeftArrow from '../../assets/leftarrow.svg';

const statusBarHeight = StatusBar.currentHeight;
const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);

export default function SinglePicker(props) {
    return (
        <View style={styles.singlePicker}>
            <TouchableOpacity style={styles.dropdownContainer} onPress={() => props.setOpenSingle(false)}>
                <Text style={styles.dropDownText}>{props.seletctedItem ? props.seletctedItem : props.placeholder}</Text>
                <LeftArrow />
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={!props.open}>
                <View style={styles.singlePickerModalContainer}>
                    <View style={styles.singlePickerModal}>
                        <ScrollView>
                            {
                                props.items && props.items.length > 0 && props.items.map((d, i) => {
                                    return (
                                        <TouchableOpacity onPress={() => {
                                            props.setItem(d);
                                            props.setOpenSingle(true);
                                        }}>
                                            <View style={styles.singleItem} key={i}>
                                                <Text>{d}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    singlePicker: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    // dropDownContainer: {
    //     width: '90%',
    //     height: 60,
    //     borderWidth: 1,
    //     borderColor: 'rgba(0,0,0,0.14)',
    //     borderRadius: 5,
    //     paddingLeft: 20,
    //     paddingRight: 20
    // },
    // viewContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingTop: 20
    // },
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
    singlePickerModal: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        marginBottom: 50
    },
    singlePickerModalContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#00000099'
    },
    singleItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.14)',
        padding: 20
    }
});
