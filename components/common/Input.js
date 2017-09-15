import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export const Input = ({ onChangeText, value, placeholder }) => {
        return(
            <View style={Styles.Pembungkus} >
                <TextInput
                    placeholder={placeholder}
                    value={value} 
                    style={Styles.TextInputStyle} 
                    onChangeText={onChangeText}
                />
            </View>
        )
}

const Styles = {
    Pembungkus: {
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    TextInputStyle: {
        color: 'black',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        lineHeight: 23,
        flex: 2,
        height: 60,
        width: 330,
    }
}