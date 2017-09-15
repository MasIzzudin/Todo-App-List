import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Bungkus } from './Bungkus'

export class TodoList extends Component{
    
    render(){
        //mengambil nilai array yang di lempar dari props yang ada di Todo
        var items = this.props.hasil.map((val, key)=> {
            return <Bungkus key={key} onDelete={this.props.handleDelete.bind(this, val)} > {val} </Bungkus>
        });

        return(
            <ScrollView>
                {items}
            </ScrollView>
        )
    }
};


const Style = {
    wrapp: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: 5
    },

    ScrollStyle: {
        paddingLeft: 5
    }
}