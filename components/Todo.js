import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, TodoList, FormList, Input } from './common'

export class Todo extends Component {
        constructor(props){
            super(props)
            this.state = { 
                list: [ ],
                onText: " "
            }
        }

    //fungsi untuk menghapus array
        removeItems(deleted){
         var newDeleted = this.state.list.filter((cekItem) =>{
            return cekItem != deleted
         });

         this.setState({ list: newDeleted })
        }

        
    render(){
        return(
            <View style={{ flex: 1 }}>
                <Header />
                <View >
                    <Input 
                        placeholder="Masukkan Kegiatan"
                        value={this.state.onText} 
                        //Merubah isi Input agar bisa digunakan oleh User
                        onChangeText={(onText) => this.setState({onText})}onChangeText={(onText) => this.setState({onText})}
                    />
                </View>
                <FormList onPress={this.whenUpdate.bind(this)}/>
                <TodoList hasil = {this.state.list} handleDelete={this.removeItems.bind(this)}/>
            </View>
        )
    }

    whenUpdate(){
        //Ketika Input bernilai Kosong
        if(this.state.onText == " "){
            alert("Input tidak boleh Kosong")
        }else{
            //Memasukkan nilai Input ke dalam List
                this.state.list.push(this.state.onText)
                this.setState({ list: this.state.list })

            //reset
                this.setState({ onText: " " })
        }
    }
}
