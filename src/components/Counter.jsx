import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }

  return (
    <>
      <div>
        <h1>Count value is: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>We are incrementing/decrementing by: {incrementBy}</h1>
        <button onClick={increaseIncrement}>Increase Increment</button>
        <button onClick={decreaseIncrement}>Decrease Increment</button>
      </div>
    </>
  );
}

export default Counter;
