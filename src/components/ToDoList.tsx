import React from 'react';
import './ToDoList.css';

interface ToDoListInterface {
    items: 
    {
      id:string,
      text: string
    } [];

    onDeleteToDo: (id: string) => void;
  }

const ToDoList: React.FC<ToDoListInterface> = (props) => {

    return <ul>
        {props.items.map(toDo => 
                            (
                                <li key={toDo.id}>
                                    <span> {toDo.text} </span>
                                    <button onClick={props.onDeleteToDo.bind(null, toDo.id)} > Delete </button>
                                </li>
                            )
                    )
        }
    </ul>
};

export default ToDoList;