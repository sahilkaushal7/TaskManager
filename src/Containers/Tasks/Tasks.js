import React , { Component } from 'react';
import './Tasks.css'
import Task from '../Task/Task';
import Auxi from '../../HOC/Auxi';

class Tasks extends Component{
    state = {
        item : ['Pending','OnHold','Working'],
        itemDescription : {
            Pending : [],
            OnHold : [],
            Working : [] 
        },
        selectitem : '',
        editCategory : '',
        editTask: ''
    }

    submitQuery = (event) => {
        event.preventDefault();
        let listdescription = this.state.itemDescription;
        let selectedItem = this.state.selectitem;
        let l = this.state.item.length; 
        selectedItem = document.getElementById('listvalue').value;
        for(let i = 0 ; i < l ; i++){
            if(this.state.item[i] === selectedItem)
            {   
                let listdescriptionarray = listdescription[selectedItem];
                listdescriptionarray.push(document.getElementById('listdescription').value);
            }
            }
        this.setState({itemDescription: listdescription,selecteditem: selectedItem})
    }
    submitList = (event) => {
        event.preventDefault();
        let listname = this.state.item;
        let listdescription = this.state.itemDescription;
        let newitem = document.getElementById('listname').value;
        listname.push(newitem);
        listdescription[newitem] = [];
        this.setState({item : listname, itemDescription : listdescription});
    }
    drop = ev =>{
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    allowDrop = ev => {
        ev.preventDefault();
    }
    childData = (a,b) => {
        this.setState({editCategory: a, editTask : b });
        let listdescription = this.state.itemDescription;
        let l = this.state.item.length;
        for(let i = 0 ; i < l ; i++){
            if(this.state.item[i] === b)
            {   
                let index = listdescription[b].indexOf(a);
                listdescription[b].splice(index,1);
            }
            }
    }
    render(){
        console.log(this.state.editCategory,this.state.editTask);
        let task;
        let l = this.state.item.length; 
        for(let i = 0 ; i < l ; i++){
            let item = this.state.item[i];
        task =<div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}>{task}<Task name={this.state.item[i]} description={this.state.itemDescription[item]} action = {this.childData}></Task></div>
        }
        let option = <option value="null">Select a Category</option>;
        for(let i = 0 ; i < l ; i++){
            let value = this.state.item[i];
            option = <Auxi>{option}<option value={value}>{value}</option></Auxi>;
            }
        return(
            <div>
                <form onSubmit={this.submitQuery}>
                <select id="listvalue">{option}</select><br/>
                <input type='text' placeholder='Create a task' id='listdescription'/><br/>
                <input type='submit' value='Insert'/>    
                </form>
                <form onSubmit={this.submitList}>
                <input type='text' placeholder='Add a new category' id='listname' /><br/>
                <input type='submit' value='Add'/>    
                </form>
                {task}
            </div>
        )
    }
}

export default Tasks;