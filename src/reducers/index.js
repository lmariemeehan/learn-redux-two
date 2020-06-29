import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

// The point of this file is to take all the reducers in your app and combine them into one reducer. This is because when you create the store in Redux and pass in a reducer, it can only take in  one reducer as an argument. See the root index page for the store.

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

// Note that 'counter' from line 6 and 'isLogged' from line 7 can be named whatever you want. You just want to make sure that you are actually passing in what you are importing since that is going to be the actual value. By using the redux chrome extension tool you'll see the state of the reducers above. This is done by opening up your app in chrome and go to: inspect > redux > choose state from the navigation above



export default allReducers;