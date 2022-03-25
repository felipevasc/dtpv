import { createStore } from "redux";

const INITIAL_STATE = ['Step 1', 'Step 2'];

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_STAGE') {
    console.log(state)
    return [...state, `Step ${action.stage} ${state.length}`]
  }
  return state;
}

const store = createStore(reducer);

export default store;