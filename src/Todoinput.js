
import React from 'react';
import {useRef,useEffect} from 'react';
function Todoinput(props) {
    let todoInputbox = useRef();
    useEffect(() => {
       console.log('마운팅')
        todoInputbox.current.focus();
        todoInputbox.current.value=''
    },[props.todoli]);
  return (
    <div className="todo-form">
        <label htmlFor='todo-field'>+Must</label>   
        <input ref={todoInputbox} type="text" id="todo-field" className="todo-field-box" onChange={(e)=>{props.todoInputUpdate(e.target.value) }} />
        <button className='submit' onClick={()=>{props.todo()}}>ADD</button>
    </div>
     
  );
}

export default Todoinput;