import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import _ from 'lodash';

export default function MultiPicker(props) {
    const [items, setItems] = useState(_.cloneDeep(props.items));

    const addToSelected = (i) => {
        const newItems = _.cloneDeep(items);
        newItems[i].selected = !newItems[i].selected;
        setItems(newItems)
    }

    const setMultipleItems = () => {
        props.setItems(items);
        props.seletctedItems(items.map(d => items.selected));
    }

    return (
        <View style={styles.multiPicker}>
            <View style={styles.dropDownContainer}>
                <TouchableOpacity onPress={() => props.setOpenMultiple(false)}>
                    <View style={styles.viewContainer}>
                        <Text>{props.seletctedItems ? `${props.seletctedItems.length} Selected` : 'Select Interests'}</Text>
                        <Text>Sel</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                visible={!props.open}>
                <View style={styles.multiPickerModalContainer}>
                    <View style={styles.multiPickerModal}>
                        <ScrollView>
                            <View>
                                {
                                    props.items && props.items.length > 0 && props.items.map((d, i) => {
                                        return (
                                            <TouchableOpacity onPress={() => {
                                                addToSelected(i);
                                            }}>
                                                <View style={styles.singleItem} key={i}>
                                                    <Text>{d.text}</Text>
                                                    <Text>{d.selected}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                                <TouchableOpacity
                                    onPress={setMultipleItems}
                                >
                                    <Text>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    multiPicker: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropDownContainer: {
        width: '90%',
        height: 60,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.14)',
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    viewContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    multiPickerModal: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        marginBottom: 50
    },
    multiPickerModalContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2
    },
    singleItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.14)'
    }
});
