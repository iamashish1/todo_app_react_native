import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Pressable } from 'react-native';
import { formStyles } from './FormStyle'
import ErrorComponent, { } from '../error/Error'
const FormComponent = ({ text, handleTextChange, isEnabled, toggleSwitch, addTodoTask, error }) => {
    return (
        <View style={formStyles.container}>

            <ErrorComponent message={error} />
            <TextInput
                style={formStyles.input}
                placeholder="Enter a task"
                onChangeText={handleTextChange}
                value={text}
            />
            <View style={formStyles.toggleContainer} >
                <Text>Completed: </Text>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled} />
            </View>
            <Pressable style={formStyles.button} onPress={addTodoTask}>
                <Text style={{ color: 'white' }}>Add</Text>
            </Pressable>
        </View>
    );
}



export default FormComponent;
