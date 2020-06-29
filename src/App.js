import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // The useSelector function is what you can use to access a piece of state. the useDispatch function allows us to dispatch an action.
import { increment, decrement } from './actions'

function App() {

  const counter = useSelector(state => state.counter)  //simple useSelector example to access state and make it viewable. Here I am pulling the counter part of state.

  const isLogged = useSelector(state => state.isLogged) // Here I am pulling the is logged part of state.
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Learning how to break redux up in a more real-world way</h1>
      <p>Counter {counter}</p>
        <button onClick={() => dispatch(increment(10))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>

      {isLogged ? <p>I am logged in so I am able to see this bit of valuable information.</p> : <p>I am not logged in</p>}
      
    </div>
  );
}

export default App;
