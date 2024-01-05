import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../../contexts/TodoContext";

function TodoItem({ todo }) {
    const { dispatch } = useContext(TodoContext);

    return (
        <li
            className="todo-item"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            <h3 className="todo-title">{todo.title}</h3>
            <section className="todo-actions">
                <button
                    className="btn btn-danger"
                    onClick={() =>
                        dispatch({ type: "DELETE_TODO", payload: todo.title })
                    }
                >
                    Sil
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        dispatch({ type: "UPDATE_TODO", payload: todo.title })
                    }
                >
                    Yapıldı
                </button>
            </section>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default TodoItem;
