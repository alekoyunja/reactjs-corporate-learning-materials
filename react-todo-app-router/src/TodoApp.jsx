import React from "react";
import { Routes, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
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
                    <Router>
                        <div className="col-lg-12">
                            <NavLink className="btn btn-success" to="/add">Yeni Ekle</NavLink>
                        </div>
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={
                                    <div className="col-lg-12">
                                        <TodoList />
                                    </div>
                                }
                            />
                            <Route
                                exact
                                path="/add"
                                element={
                                    <div className="col-lg-12">
                                        <AddTodoForm />
                                    </div>
                                }
                            />
                            <Route path="*" element={<p>sayfa bulunamadı</p>} />
                        </Routes>
                    </Router>
                </div>
            </section>
        </TodoProvider>
    );
}

export default TodoApp;
