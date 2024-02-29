import { View, StatusBar, Modal, Pressable, Text, Switch, Alert } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Header from '../components/header/Header'
import Tasks from '../components/tasks/Tasks'

import { commonStyle } from './CommonStyle';


const TodoScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null)
  const toggleStatus = () => {
    props.updateTasks(selectedTask, !selectedTask.completed, false)

  };

  const handleRemovePress = () => {
    Alert.alert(
      'Remove Task',
      'This action will permanently delete this task. This action cannot be undone!', [
      {
        text: 'Confirm',
        onPress: () => {
          props.updateTasks(selectedTask, selectedTask.completed, true);

          setModalVisible(false);
        }
      },
      {
        text: 'Cancel'
      }
    ]);
  }

  // console.log(selectedTask)

  return (
    <View style={{ flex: 1 }}>

      <StatusBar style="auto" />
      <Header isAdd={false} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <View style={commonStyle.rowContainer}><Text>{selectedTask ? selectedTask.title : ''}</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Entypo name="circle-with-cross" size={24} color="green" />

              </Pressable></View>

            <View style={commonStyle.rowContainer} >
              <Text>Toggle Status</Text>
              <Switch
                value={selectedTask && selectedTask.completed}
                onValueChange={toggleStatus}
              />
            </View>
            <View style={commonStyle.rowContainer}>
              <Text>Remove Task</Text>
              <Pressable onPress={() => handleRemovePress()}>
                <AntDesign name="delete" size={24} color="red" />

              </Pressable>
              {/* <Pressable onPress={handleRemovePress}>  <AntDesign name="delete" size={24} color="red" /> </Pressable> */}

            </View>
            {/* <View style={commonStyle.rowContainer}>
              <Text>Remove Task</Text>
              <Pressable onPress={handleRemovePress}>  <AntDesign name="delete" size={24} color="red" /></Pressable>
            </View> */}
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => {
        setModalVisible(true)
      }}><Tasks tasks={props.tasks} setModalVisible={setModalVisible} selectedTodo={setSelectedTask} /></Pressable>

    </View>

  );
};

export default TodoScreen;