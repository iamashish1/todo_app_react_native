import { StyleSheet } from 'react-native';

export const commonStyle = StyleSheet.create({
    rowContainer: {
        paddingVertical:10,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"

    },

    modalContainer: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10
    },

    innerModalStyle: {
        backgroundColor: 'white', padding: 20, borderRadius: 10

    }

});
