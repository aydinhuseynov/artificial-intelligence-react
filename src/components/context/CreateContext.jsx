import React from "react";
import { useState, createContext } from "react";

export const myCounterContext = createContext();

const AppCounterContext = ({ children }) => {
  const [count, setCount] = useState(12);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <myCounterContext.Provider
      value={{ count, setCount, increment, decrement }}
    >
      {children}
    </myCounterContext.Provider>
  );
};
export default AppCounterContext;
