import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import IconFA from 'react-native-vector-icons/dist/FontAwesome';

const TodoItem = ({ item, pressHandler }) => {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <IconFA name="trash" size={18} color="#333"></IconFA>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText:{
        marginLeft: 10
    }
})

export default TodoItem