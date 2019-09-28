import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: '#eeeeee',
        elevation: 3,
        flexDirection: 'row',
        borderRadius: 3,
        margin: 10,
        padding: 10

    },

    image: {
        height: 50,
        width: 50,
        borderRadius: 50,
        alignSelf: 'center'
    },

    infoContainer: {

        flexDirection: 'column',
        marginTop: 5,
        marginLeft: 10,

    },

    addressStreet: {

        fontWeight: 'bold',
        fontSize: 14,

    },

    info: {

        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',

    },

    infoIcon: {

        color: '#666'

    },

    infoText: {

        color: '#666',
        fontSize: 12,
        marginLeft: 5,

    }

});

export default styles;