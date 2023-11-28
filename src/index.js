import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Reducers
const pitcherList = (state=[], action) => {
    if (action.type === 'ADD_PITCHER') {
      const newPitcher = action.payload;
      console.log("Adding a new pitcher:", newPitcher);
      return [...state, newPitcher];
    }
    return state;
}

const catcherList = (state=[], action) => {
    if(action.type === 'ADD_CATCHER'){
        const newCatcher = action.payload;
        console.log("Adding a new catcher:", newCatcher);
        return [...state, newCatcher];
    }
    return state;
}

// Creating our bucket
const reduxStore = createStore(
    combineReducers({
      pitcherList,
      catcherList
    })
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
);
