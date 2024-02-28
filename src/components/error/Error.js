import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorComponent = ({ message }) => {
    return (
        message != '' ?
            <View style={errorStyles.container}>
                <Text style={{ color: 'red', paddingLeft: 5 }}>{message}</Text>
            </View> : <View style={errorStyles.emptyContainer}></View>
    );
}

export default ErrorComponent;


export const errorStyles = StyleSheet.create({
    container: {
        height: 30,
        borderWidth: 0.2,
        borderRadius: 4,
        paddingVertical: 5,
        marginBottom: 10,
        borderLeftWidth: 10,
        borderColor: 'red'

    },

    emptyContainer: {
        height: 30,
        paddingVertical: 5,
        marginBottom: 10,
        borderColor: 'red'

    }

});