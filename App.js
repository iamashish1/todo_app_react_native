import { StyleSheet, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Todo from './src/pages/TodoListScreen'
import AddTodoTask from './src/pages/AddTaskScreen';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { TODO_EMPTY_ERROR } from './utils/Constant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  const [text, setText] = useState('');
  const [isEnabled, changeStatus] = useState(false);
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, title: "Do the dishes", completed: true }, { id: 2, title: "Do the dishes", completed: false }]);

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

  const updatetasks = (togTask, completed, isDeleteAction) => {
    // We need to update tasks either delete or toggled
    if (isDeleteAction == true) {
      const newtasks = tasks.filter(
        (task) => task.id !== togTask.id
      );
      setTasks(newtasks);

    } else {
      const updatedTasks = tasks.map((task) => {
        if (task.id === togTask.id) {
          task.completed = completed
        }
        return task;
      });
      setTasks(updatedTasks);
    }


  }

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="List Tasks" options={
          {
            tabBarIcon: (props) => <AntDesign name="bars" size={24} color={props.color} />
          }
        } >
          {(props) => (
            <Todo {...props} tasks={tasks} updateTasks={updatetasks} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Add Task" options={
          {
            tabBarIcon: (props) => <AntDesign name="plus" size={24} color={props.color} />
          }} >
          {() => (
            <AddTodoTask error={error} addTodoTask={addTodoTask} handleTextChange={handleTextChange} isEnabled={isEnabled} text={text} toggleSwitch={toggleSwitch} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
