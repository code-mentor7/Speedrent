import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    styleEdittext: {
        width: width * 0.92,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 40,
        fontSize: 16,
        paddingHorizontal: 25,
        color: 'black',
        marginVertical: 10,
    },

    textStyle: {
        marginVertical: 10,
        fontSize: 16,
        color: '#ffffff',
    },
});