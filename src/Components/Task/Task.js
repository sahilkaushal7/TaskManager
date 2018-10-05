import React from 'react';
import Auxi from '../../HOC/Auxi';
import './Task.css';

let drag = (ev) =>{
    ev.dataTransfer.setData("text", ev.target.id);
}
let del = (a,b,c) => {};
let l='';


const Task = (props) =>{
    let description;
    let editit = (a,b,c) => {
        l = prompt('Changed Value');
        props.edit(b,c,l);
    };
    for(let i = 0 ; i < props.description.length ; i++){ 
        description = (<Auxi>
        {description}<br/>
        <div  id="drag1" draggable="true" onDragStart={drag} className="item">
        {props.description[i]}
        <i className="fa fa-list-ul editButton" onClick={(e) => editit(e,props.description[i],props.name)}></i>
        <i className="fa fa-close deleteButton" onClick={(e) => del(e,props.delete(props.description[i],props.name))}></i>
        <hr/>
        </div>
        </Auxi>)
    }
    return(
        <div className="task">
        <h3>{props.name}</h3>
        {description}
        </div>
    );
}

export default Task;