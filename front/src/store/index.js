import { createStore } from "redux";

const INITIAL_STATE = {
  activeProfile: "",
  cards: []
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'CHANGE_PROFILE') {
    return {activeProfile: action.activeProfile, cards: state.cards}
  }
  return state;
}

const store = createStore(reducer);

export default store;