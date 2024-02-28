import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'green',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appText: {
        marginLeft: 5,
        color: 'white'
    },
});
