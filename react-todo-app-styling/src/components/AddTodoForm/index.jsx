import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-lg-12">
                <label htmlFor="todo" className="form-label m-3">
                    Yeni Todo
                </label>
                <input
                    id="todo"
                    name="todo"
                    className="form-control"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <button className="btn btn-primary m-3" type="submit">
                Add Todo
            </button>
        </form>
    );
};

AddTodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
