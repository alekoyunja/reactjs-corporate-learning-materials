import React from 'react';
import styles from './TodoItem.modules.css';

function TodoItem({ todo, toggleTodo }) {
    return (
        <li
            className={styles.TodoItem}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
        </li>
    );
}

export default TodoItem;
