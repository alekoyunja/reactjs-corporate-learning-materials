import React, { useState } from "react";
import ClassComponent from "./ClassComponents";
import FunctionalComponent from "./FunctionalComponent";
import MemorizedComponent from "./MemorizedComponent";
import FadeInComponent from "./FadeInComponent";

const App = () => {
  const [state, setState] = useState(true);
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <main>
      <button type="button" onClick={() => setState(!state)}>State Değiştir</button>
      <button type="button" onClick={() => setList([...list, list.length + 1])}>Listeyi Değiştir</button>
      <ClassComponent title="Class Component" />
      <FunctionalComponent title="Functional Component" />
      <MemorizedComponent inilialList={list} />
      <FadeInComponent />
    </main>
  );
};

export default App;
