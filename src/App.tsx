import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { ToDo } from './ToDo.model';

const App: React.FC = () => {

  const [toDoU, setToDos] = useState<ToDo[]>([]);

  const ToDoAddHandler = (text: string) => {
    console.log(text);
    setToDos(prevToDos => 
      [
        ...prevToDos,
        {
          id: Math.random().toString(), 
          text: text
        }
      ]
    );
  };

  const ToDoDeleteHandler = (toDoId: string) => {
    setToDos(prevToDos => {
      return prevToDos.filter(toDo => toDo.id !== toDoId);
    });
  }

  return (
    <div className="App"> 

      <NewToDo onAddToDo={ToDoAddHandler}> </NewToDo>
      <ToDoList items={toDoU} onDeleteToDo={ToDoDeleteHandler}> </ToDoList>

    </div>
  );

};

export default App;
