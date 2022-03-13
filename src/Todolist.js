
import React from 'react';
import {useContext} from 'react';
import { UpdateContext } from "./App";

function Todolist(props) {

    let updateArrCng = useContext(UpdateContext);
    console.log(updateArrCng)

  return (
    <ul>
    {props.todoli.map(function(a,b,c) {
            return(
            <li className="list-item" key={b}>{a}<button onClick={()=>{
             var cng=updateArrCng.filter((element) => element !== a)
             props.todoListUpdate([...cng])
            }}>del</button></li>
            )
    })}

    </ul>

  );
}
export default Todolist;

