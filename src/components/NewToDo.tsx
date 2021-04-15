import React, { useRef, useEffect } from 'react'; //useEffect permite ver que ocurre con cada parametro que recibe, que retorna la funcion, etc 
import './NewToDo.css';

type NewToDoProps = {
    onAddToDo: (toDoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);  //poder usar los input del form 

    const toDoSubmitHandler = (event: React.FormEvent) => {

        event.preventDefault();
        const enteredInputText = textInputRef.current!.value;
        console.log(enteredInputText);
        props.onAddToDo(enteredInputText);
    };


    return (<form onSubmit={toDoSubmitHandler}> 
                <div className="form-control">
                    <label htmlFor="todo-text"> ToDo Text </label>
                    <input type="text" id="todo-text" ref={textInputRef}></input>
                </div>
                <button type="submit">Add ToDo </button>
            </form>
            ); 
}

export default NewToDo;