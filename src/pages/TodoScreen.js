import { View, Text,StatusBar, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/header/Header'
import { TODO_EMPTY_ERROR } from '../../utils/Constant';
import Tasks from '../components/tasks/Tasks'
import Form from '../components/form/Form'
import uuid from 'react-native-uuid';


const TodoScreen = () => {
  const [text, setText] = useState('');
  const [isEnabled, changeStatus] = useState(false);
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTextChange = (inputText) => {
    setText(inputText);
  };


  const toggleSwitch = () => {
    changeStatus((previousState) => !previousState);
  };


  const addTodoTask = () => {
    //IMPLEMENT TASK ADDITION LOGIC HERE
    if (text.trim() === '') {
      setError(TODO_EMPTY_ERROR);
    } else {
      setError('');
      const randomId = uuid.v4();

      //ADDING TASK HERE

      setTasks((previousState) => [...previousState.concat({ id: randomId, title: text, status: isEnabled ? 'Completed' : 'Open', })])

      Keyboard.dismiss();
      //Resetting the textinput and task status to initial state
      setText('')
      changeStatus(false)
    }
  };

  return (

    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header />
      <Tasks tasks={tasks} />
      <Form error={error} addTodoTask={addTodoTask} handleTextChange={handleTextChange} isEnabled={isEnabled} text={text} toggleSwitch={toggleSwitch} />
    </View>

  );
};

export default TodoScreen;