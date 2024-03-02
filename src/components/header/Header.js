import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { headerStyles } from './HeaderStyle';

const HeaderComponent = () => {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.leftContainer}>
                <FontAwesome5 name="mastodon" size={24} color="white" />
                <Text style={headerStyles.appText}>Todo App</Text>
            </View>
            <Text style={headerStyles.appText} >by Ashish Koirala</Text>
        </View>
    );
}

export default HeaderComponent;
