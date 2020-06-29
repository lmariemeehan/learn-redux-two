import counterReducer from '/counter';
import loggedReducer from '/isLogged';
import { combineReducers } from 'redux';

//NOTE: The point of this file is to take all the reducers in your app and combine them into one reducer. This is because when you create the store in Redux and pass in a reducer, it can take in only one reducer as an argument. See the root index page for the store.

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

//Note that 'counter' from line 6 and 'isLogged' from line 7 can be named whatever you want. You just want to make sure that you are actually passing in what you are importing since that is going to be the actual value. 

export default allReducers;