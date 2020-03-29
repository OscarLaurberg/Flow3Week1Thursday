import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewTodo(props) {

  const [todo, setTodo] = useState(props.nextTodo);

  const saveTodo = e => {
    if (todo.todoText === "") {
      return;
    }
    props.addTodo(todo);
    e.preventDefault();
  };

  useEffect(() => setTodo({ ...props.nextTodo }), [props.nextTodo]);

  const onChange = e => {
    const val = e.target.value;
    todo.todoText = val;
    setTodo({ ...todo });
  };
  const title = todo.id === "" ? "Create Todo!" : "Edit Todo"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={todo.todoText} onChange={onChange} />
        <br/><br/>
        <button onClick={saveTodo} className="btn btn-danger">Save</button>
      </form>
      {todo.id !== ""}
    </div>
  );
}
export default NewTodo;

NewTodo.propTypes = {
  nextTodo: PropTypes.object,
  addTodo: PropTypes.func
}