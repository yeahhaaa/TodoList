import "./App.css";
import { useState, createContext } from "react";
import Todolist from "./Todolist";
import Todoinput from "./Todoinput";
export const UpdateContext = createContext();
function App() {
  let [todoList, todoListUpdate] = useState(["Your potential is ENDLESS!"]);
  let [todoInput, todoInputUpdate] = useState("");
  let arrList = [...todoList];
  let todo = () => {
    if (Todoinput === "") {
      return;
    } else {
      arrList.push(todoInput);
      todoListUpdate(arrList);
    }
  };
  return (
    <div className="App">
      <UpdateContext.Provider value={arrList}>
        <div className="note">
          <h1>Things to do</h1>
          <div className="todo">
            <Todolist todoli={todoList} todoListUpdate={todoListUpdate} />
          </div>
          <div className="write">
            <Todoinput
              todoInputUpdate={todoInputUpdate}
              todo={todo}
              todoli={todoList}
            />
          </div>
        </div>
      </UpdateContext.Provider>
    </div>
  );
}

export default App;
