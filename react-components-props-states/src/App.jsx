import React from "react";
import ClassComponent from "./ClassComponents";
import FunctionalComponent from "./FunctionalComponent";

const App = () => {
  return (
    <main>
      <ClassComponent title="Class Component" />
      <FunctionalComponent title="Functional Component" />
    </main>
  );
};

export default App;
