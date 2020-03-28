import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import uuid from "uuid/v1";


function App() {
const initialData = [
  {id: uuid(), todoText: "Smoke a cigarette"},
  {id: uuid(), todoText: "Pass the blunt to the player on your left"},
  {id: uuid(), todoText: "Kill innocent bystander"}
]
const[todos, setTodos] = useState(initialData);
const[newTodo, setNewTodo] = useState({id: "", todoText: "" });

const addTodo = todo => {
  if (todo.id === "") { 
    todo.id = uuid();
    todos.push(todo);
  } else {
    let todoToEdit = todos.find(t => t.id === todo.id);
    todoToEdit.todoText = todo.todoText;
  }
  setTodos([...todos]);
  setNewTodo({id:"", todoText:""})
};

const deleteTodo = (index) => {
  setTodos(todos.filter(data => data.id !== index));
};

const editTodo = (index) => {
  setNewTodo({id: index, TtodoText: ""});
}


return (
  <div>
    <h3>
    Lifting State Up
    </h3>

   
      <div>
        <TodoList 
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo} />
      </div>
      <div>
        <NewTodo
          addTodo={addTodo}
          nextTodo={newTodo} 
        />
      </div>
    
  </div>
);
}
export default App;




