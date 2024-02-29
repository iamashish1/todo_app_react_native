import { View, StatusBar } from 'react-native';
import Header from '../components/header/Header'
import Form from '../components/form/Form'


const AddTodoTask = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Header isAdd={true} />
            <Form error={props.error} addTodoTask={props.addTodoTask} handleTextChange={props.handleTextChange} isEnabled={props.isEnabled} text={props.text} toggleSwitch={props.toggleSwitch} />
        </View>

    );
};

export default AddTodoTask;