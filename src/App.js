import React from 'react';
import { useSelector } from 'react-redux'; // This function is what you can use to access a piece of state.


function App() {

  const counter = useSelector(state => state.counter)  //simple useSelector example to access state and make it viewable. Here I am pulling the counter part of state.

  const isLogged = useSelector(state => state.isLogged) // Here I am pulling the is logged part of state.

  return (
    <div className="App">
      <h1>Learning how to break redux up in a more real-world way</h1>
      <p>Counter {counter}</p>
        <button>+</button>
        <button>-</button>

      {isLogged ? <p>I am logged in so I am able to see this bit of valuable information.</p> : <p>I am not logged in</p>}
      
    </div>
  );
}

export default App;
