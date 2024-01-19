import {useState} from 'react';
import './ButtonCounter.css';

export default function ButtonCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>
      <h1 className="counter">{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}