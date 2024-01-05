import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const AddTodoForm = () => {
    const [title, setTitle] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: title });
        setTitle("");
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button className="btn btn-primary m-3" type="submit">
                Add Todo
            </button>
        </form>
    );
};

export default AddTodoForm;
