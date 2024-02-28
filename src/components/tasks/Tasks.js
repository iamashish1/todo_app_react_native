import { FlatList, View, Text } from "react-native"
import { taskStyle } from "./TaskStyle";



const TasksComponent = ({ tasks }) => {
    return <FlatList
        data={tasks} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}
    />


}



const renderItem = ({ item }) => (
    <View style={taskStyle.container}>
        <Text style={taskStyle.idText}>Id: {item.id}</Text>
        <Text style={taskStyle.titleText}>{item.title}</Text>
        <Text style={taskStyle.statusText}>Status: {item.status}</Text>
    </View>
);


export default TasksComponent