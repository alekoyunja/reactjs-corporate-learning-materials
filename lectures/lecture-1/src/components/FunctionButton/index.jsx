import React, {useState} from "react";
1
// arrow function
const FunctionButton = (props) => {
    // object destructuring
    const { title, type } = props;
    const [count, setCount] = useState(0);

    console.log(count);

    return (
        <button type={type} onClick={() => setCount(() => count+1)}>{title}</button>
    );
};

export default FunctionButton;