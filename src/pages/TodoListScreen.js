import { View, StatusBar, Modal, Pressable, Text, Switch } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Header from '../components/header/Header'
import Tasks from '../components/tasks/Tasks'

import { commonStyle } from './CommonStyle';


const TodoScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null)
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
            <View style={commonStyle.rowContainer}><Text>This is a modal</Text>

              <Pressable onPress={() => setModalVisible(false)}>
                <Entypo name="circle-with-cross" size={24} color="green" />

              </Pressable></View>

            <View style={commonStyle.rowContainer} >
              <Text>{selectedTask ? selectedTask.title : ''}</Text>
              <Switch
                value={selectedTask && selectedTask.status === 'Completed'}
              // onValueChange={toggleStatus}
              />
            </View>
            <View style={commonStyle.rowContainer}>
              <Text>Remove Task</Text>
              <AntDesign name="delete" size={24} color="red" />
            </View>
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