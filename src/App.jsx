// import React from "react";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/index";

// const App = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const counterHandler = (op) => {
//     dispatch(op);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h1>{counter}</h1>
//       <button onClick={() => counterHandler(actions.increment())}>Increase</button>
//       <button onClick={() => counterHandler(actions.decrement())}>Decrease</button>
//       <button onClick={() => counterHandler(actions.addBy(60))}>Add by 10</button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const counterHandler = (op) => {
    if (op === "ADD") {
      dispatch({ type: op, payload: 10 });
    } else if (op === "DEC" && counter === 0) {
      null;
    } else {
      dispatch({ type: op });
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={() => counterHandler("INC")}>increment</button>
      <button onClick={() => counterHandler("DEC")}>decrement</button>
      <button onClick={() => counterHandler("ADD")}>add by 10</button>
    </div>
  );
};

export default App;
