
import { StyleSheet } from 'react-native';
import { SECONDARY_COLOR } from '../../../utils/Constant';
export const taskStyle = StyleSheet.create({
    container: {
        backgroundColor: SECONDARY_COLOR,
        margin: 10,
        padding: 10,
        borderRadius: 8,
        borderWidth: 0.2,
        borderColor: 'grey',
        opacity: 0.7
    },

    titleText: {
        fontSize: 15,
        fontWeight: '600',
    },

    idText: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '400'
    },
    statusText: {
    }
})