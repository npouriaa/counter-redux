import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const counterHandler = (op) => {
    if (op === "DEC" && counter === 0) {
      return (null)
    }
    dispatch({ type: op });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={() => counterHandler("INC")}>Increament</button>
      <button onClick={() => counterHandler("DEC")}>Decreament</button>
    </div>
  );
};

export default App;
