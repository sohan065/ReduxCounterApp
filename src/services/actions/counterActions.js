import { INCREMENT, DECREMENT, RESET } from "../constants";
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};
