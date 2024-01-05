import React, { useState, useEffect } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component did mount");
    return () => {
      console.log("Component will unmount");
    }
  }, [count]);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
};

export default FunctionalComponent;
