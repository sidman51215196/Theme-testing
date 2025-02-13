// src/store.js
import { createStore } from 'redux';

// Example reducer
const initialState = {
  count: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(rootReducer);

export default store;
