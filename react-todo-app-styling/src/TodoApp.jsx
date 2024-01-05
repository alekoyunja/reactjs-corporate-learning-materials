import React, { useState } from "react";
import { TodoList, AddTodoForm } from "./components";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <section id="todo-app" className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center">Todo App</h1>
                </div>
                <div className="col-lg-12">
                    <AddTodoForm addTodo={addTodo} />
                </div>
                <div className="col-lg-12">
                    <TodoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
            </div>
        </section>
    );
}

export default TodoApp;
