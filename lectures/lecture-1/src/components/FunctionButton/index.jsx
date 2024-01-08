import React from "react";

// arrow function
const FunctionButton = (props) => {
    // object destructuring
    const { title, type } = props;

    return (
        <button type={type}>{title}</button>
    );
};

export default FunctionButton;