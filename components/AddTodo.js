import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const AddTodo = ({ submitHandler }) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <Text>Add todo</Text>
            <TextInput onChangeText={changeHandler} style={styles.input}></TextInput>
            <Button onPress={() => submitHandler(text)} title="Add todo" color="coral"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo