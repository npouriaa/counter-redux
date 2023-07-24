import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const counterHandler = (op) => {
    dispatch({ type: op });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => counterHandler("INC")}>increment</button>
      <button onClick={() => counterHandler("DEC")}>decrement</button>
    </div>
  );
};

export default App;
