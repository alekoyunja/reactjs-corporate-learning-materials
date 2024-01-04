import React from "react";

import PropTypes from "prop-types";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
