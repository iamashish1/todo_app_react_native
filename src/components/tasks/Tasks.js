import { FlatList, View, Text, Pressable } from "react-native"
import { taskStyle } from "./TaskStyle";



const TasksComponent = ({ tasks, setModalVisible, selectedTodo }) => {
    const renderItem = ({ item }) => (
        <Pressable
            onPress={() => {
                setModalVisible(true);
                selectedTodo(item)
            }}
        >
            <View style={taskStyle.container}>
                <Text style={taskStyle.idText}>Id: {item.id}</Text>
                <Text style={taskStyle.titleText}>{item.title}</Text>
                <Text style={taskStyle.statusText}>Status: {item.status}</Text>
            </View>
        </Pressable>
    );

    return <FlatList
        data={tasks} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}
    />


}






export default TasksComponent