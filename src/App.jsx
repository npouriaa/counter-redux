import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const counterHandler = (op) => {
    dispatch(op);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={() => counterHandler(actions.increment())}>
        increment
      </button>
      <button onClick={() => counterHandler(actions.decrement())}>
        decrement
      </button>
      <button onClick={() => counterHandler(actions.addBy(10))}>
        add by 10
      </button>
    </div>
  );
};

export default App;
