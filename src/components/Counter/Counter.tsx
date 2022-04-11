import React from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
  };

  return (
    <div className='counter-container'>
      <h2>Counter by {process.env.name}</h2>
      <h3>Count value is {count}</h3>
      <div>
        <input
          type='button'
          name='decrement'
          value='Decrement'
          disabled={count === 0}
          onClick={decrement}
        />
        <input
          type='button'
          name='increment'
          value='Increment'
          onClick={increment}
        />
      </div>
    </div>
  );
};

export default Counter;
