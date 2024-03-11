import { StyleSheet, Keyboard, ToastAndroid, SafeAreaView, StatusBar, ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Todo from './src/pages/TodoListScreen'
import AddTodoTask from './src/pages/AddTaskScreen';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { TODO_EMPTY_ERROR } from './utils/Constant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderComponent from './src/components/header/Header';
import { collection, getDocs, query, getFirestore, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import db from './fireabse';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDataFetching, setFetchingStatus] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const [text, setText] = useState('');
  const [isEnabled, changeStatus] = useState(false);
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);


  console.log(isDataFetching + 'ISLOADING DTAA FROM FIREBASE')


  const showToastWithGravityAndOffset = (isAdded, isDeleted, isStatusChaneged) => {
    let message = isAdded ? 'Task Successfully Saved!' : isDeleted ? 'Task Successfully Deleted!' : "Status Chnaged";

    

    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  //Use UseEffect to fetch data from firestore
  useEffect(() => {
    const dbCollection = collection(db, 'Tasks');
    const dbQuery = query(dbCollection);

    getDocs(dbQuery)
      .then((querySnapshot) => {
        const fetchedTasks = [];
        querySnapshot.forEach((doc) => {

          const data = doc.data();
          fetchedTasks.push({ id: doc.id, title: data.title, completed: data.completed });
          setFetchingStatus(false)
        });
        setTasks(fetchedTasks);
      })
      .catch((error) => {
        setFetchingStatus(false)

      });
  }, []);

  //END USEEFFECT USAGE



  const handleTextChange = (inputText) => {
    setText(inputText);
  };


  const toggleSwitch = () => {
    changeStatus(!isEnabled);

  };


  const addTodoTask = () => {




    //IMPLEMENT TASK ADDITION LOGIC HERE
    if (text.trim() === '') {
      setError(TODO_EMPTY_ERROR);
    } else {
      //SET LOADING TO TRUE
      setLoading(true);


      //FIRST TRY TO ADD IT TO THE FIRESTORE AND ONLY WHEN SUCCESSFUL ADD IT TO THE STATE


      const dbCollection = collection(db,
        'Tasks');
      addDoc(dbCollection, { title: text, completed: isEnabled })
        .then((docRef) => {
          showToastWithGravityAndOffset(true,false,false);
          setError('');
          //ADDING TASK HERE
          setTasks((previousState) => [...previousState.concat({ id: docRef.id, title: text, completed: isEnabled })])

          Keyboard.dismiss();
          //Resetting the textinput and task status to initial state
          setText('')
          changeStatus(false)
          //SET LOADING
          setLoading(false);

        })
        .catch((error) => {
          setLoading(false);

          console.error('Error:'
            , error);
        });


    }
  };

  const updatetasks = (togTask, completed, isDeleteAction) => {
    // We need to update tasks either delete or toggled
    if (isDeleteAction == true) {

      const dbDoc = doc(db,
        'Tasks'
        , togTask.id);
      deleteDoc(dbDoc)
        .then(() => {
          console.log('Successfully deleted!');
          const newtasks = tasks.filter(
            (task) => task.id !== togTask.id
          );
          setTasks(newtasks);
          showToastWithGravityAndOffset(false,true,false);


        })
        .catch((error) => {
          console.error('Error:'
            , error);
        });



    } else {
      //UPDATE DATABASE FIRST
      const docRef = doc(db,
        'Tasks'
        , togTask.id);
      updateDoc(docRef, {
        completed: completed
      })
        .then(() => {
          showToastWithGravityAndOffset(false,false,true);

          console.log('Successfully updated!');
          const updatedTasks = tasks.map((task) => {
            if (task.id === togTask.id) {
              task.completed = completed
            }
            return task;
          });
          setTasks(updatedTasks);
        })
        .catch((error) => {
          console.error('Error:'
            , error);
        });


      //END UPDATE DATABASE FIRST

    }


  }

  return (<SafeAreaView style={{ flex: 1 }}>
    <StatusBar style="auto" />
    <HeaderComponent />
    {(isDataFetching == false) ?
      (<NavigationContainer >
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
              <AddTodoTask error={error} addTodoTask={addTodoTask} handleTextChange={handleTextChange} isEnabled={isEnabled} text={text} toggleSwitch={toggleSwitch} isLoading={isLoading} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>) : (<ActivityIndicator size='big' color='green' />)
    }

  </SafeAreaView>


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
