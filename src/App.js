import "./App.css";
import React, { useState } from 'react';
import { FiChevronUp } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { FiRefreshCcw } from "react-icons/fi";
import { FiHash } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

function App() {
  const [count, setCount] = useState(0);
  const currentValue = "Current Value";

  const increaseByOne = (byOne) => {
    setCount(count + byOne);
  };

  const increaseByTen = (byTen) => {
    setCount(count + byTen);
  };

  const resetToZero = () => {
    setCount(0);
  };

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 100);
    setCount(random);
  };

  const decreaseByTen = () => {
    setCount(count - 10);
  };

  const decreaseByOne = () => {
    setCount(count -1);
  };

  return (
    <main>
      <div className="counterBox">
        <div className="subBox">
          <h4 className="title">{currentValue}</h4>
          <p className="value">{count}</p>
          <div className="icons">
            <button onClick={() => increaseByOne(1)}><FiChevronUp /></button>
            <button onClick={() => increaseByTen(10)}><FiChevronsUp /></button>
            <button onClick={resetToZero}><FiRefreshCcw /></button>
            <button onClick={randomNumber}><FiHash /></button>
            <button onClick={() => decreaseByTen(10)}><FiChevronsDown /></button>
            <button onClick={() => decreaseByOne(1)}><FiChevronDown /></button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
