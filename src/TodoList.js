import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <Fragment>
      <h4> ALL todos: </h4>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todoText}
            <a
              href="#/"
              onClick={e => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              {" "}
              <b>delete</b> {" "}
            </a>
            <a href="#/" onClick={() => editTodo(todo.id)}>
              <b>edit</b>{" "}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array
}
