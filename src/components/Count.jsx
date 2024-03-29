import React, { useState } from 'react';

function Count() { 
  const [count, setCount] = useState(0);
 
  const increment =()=>{
    setCount(prevcount => prevcount + 1)
  }  
 
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
 
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
    <h1>React USESTATE Examples</h1>
      <h2>Counter</h2>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count;
