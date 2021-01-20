import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import SandBox from './components/SandBox';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'text1', key: '1' },
    { text: 'text2', key: '2' },
    { text: 'text3', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 0){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
  
        ]
      })
    } else {
      Alert.alert('Error', 'Todos cannot be empty', [
        { text: 'I understand', onPress: () => console.log('alert closed')}
      ])
    }
  }

  const onPressBg = () => {
    //console.log('bg pressed');

    //remove keyboard
    Keyboard.dismiss();
  }

  return(
    //<SandBox></SandBox>
    <TouchableWithoutFeedback onPress={onPressBg}>
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}></AddTodo>
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
            )}>

            </FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40,
    flex: 1
  },
  list:{
    flex: 1,
    marginTop: 20
  }
})

export default App;