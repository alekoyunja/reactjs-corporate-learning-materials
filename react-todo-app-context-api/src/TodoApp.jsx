import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoList, AddTodoForm } from "./components";

function TodoApp() {
    return (
        <TodoProvider>
            <section id="todo-app" className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center">Todo App</h1>
                    </div>
                    <div className="col-lg-12">
                        <AddTodoForm />
                    </div>
                    <div className="col-lg-12">
                        <TodoList />
                    </div>
                </div>
            </section>
        </TodoProvider>
    );
}

export default TodoApp;
