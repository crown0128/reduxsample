import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todolist = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

Todolist.prototype = {
    todos:PropTypes.arrayof(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired
        })
    ).isRequired,
    onTodoClick:PropTypes.func.isRequired
}


export default Todolist