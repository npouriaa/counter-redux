import { legacy_createStore as createStore } from "redux";

const reducerFunctoin = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(reducerFunctoin);

export default store;
