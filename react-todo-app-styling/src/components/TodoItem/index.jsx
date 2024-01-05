import React from "react";

import PropTypes from "prop-types";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li
            className="todo-item"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            <h3 className="todo-title">{todo.text}</h3>
            <section className="todo-actions">
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button className="btn" onClick={() => toggleTodo(todo.id)}>Toggle</button>
            </section>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
