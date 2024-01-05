import React, { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
};

export default FunctionalComponent;
