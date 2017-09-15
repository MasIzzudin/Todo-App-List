import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const FormList = ({ onPress }) => {
        return(
            <View>
                <TouchableOpacity onPress={onPress} style={Style.buttonStyle} >
                    <Text style={Style.textStyle}>Add</Text>
                </TouchableOpacity>
            </View>
        )
}

const Style = {
    textStyle: {
        alignSelf: 'center',
        color: 'deepskyblue',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    }
};