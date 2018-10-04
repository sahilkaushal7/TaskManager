import React from 'react';
import Auxi from '../../HOC/Auxi';
import './Task.css';

let drag = (ev) =>{
    ev.dataTransfer.setData("text", ev.target.id);
}
let edit = (e,p) => {}
const Task = (props) =>{
    let description;
    for(let i = 0 ; i < props.description.length ; i++){
        description = (<Auxi>{description}<br/><div id="drag1" draggable="true" onDragStart={drag}>{props.description[i]}
        <button onClick={(e) => edit(e,props.action(props.description[i],props.name))}>Delete</button><hr/></div></Auxi>)
    }
    return(
        <div className="task">
        <h3>{props.name}</h3>
        {description}
        </div>
    );
}

export default Task;