import React from 'react';
import { View, Text } from 'react-native';

export const Header = () => {
    return(
        <View style={Styles.HeaderStyle}>
            <Text style={Styles.TextStyle}>Todo App</Text>
        </View>
    )
}

const Styles = {
    HeaderStyle: {
        backgroundColor: 'deepskyblue',
        shadowOffset: {width: 5, height: 90},
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 10,
        height: 70
    },
    TextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        marginTop: 5
    }
}