import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import allReducers from './reducers'; //I do not need to add ./reducers/index because webpack will look at the index file first anyways.

/* This will not work. With the createStore function you are only allowed to enter one reducer. So when we have multiple reducers to work with you have to combine the reducers into one. See the file in reducers/index to see how this was done.
const store = createStore(counterReducer, isLoggedReducer);
*/

const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
