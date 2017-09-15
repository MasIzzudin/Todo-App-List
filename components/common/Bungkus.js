import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native'

export const Bungkus = ({ children, onDelete }) => {
            return(
                <View>
                    <View style={Style.Pembungkus}>
                        <Text style={Style.TextStyle}>{children}</Text>
                    </View>
                    <TouchableOpacity style={Style.Delete} onPress={onDelete}>
                        <Text style={Style.TextDelete}>Delete</Text>
                    </TouchableOpacity>
                </View>
        )
}

const Style = {
    Pembungkus: {
        shadowOffset: {width: 5, height: 90},
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 1,
        paddingRight: 10,
        marginTop: 5,
        position: 'relative',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'
    },

    TextStyle:{
        fontSize: 20
    },

    Delete: {
        backgroundColor: 'black',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },

    TextDelete: {
        color: 'white'
    }
}