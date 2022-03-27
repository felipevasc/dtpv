import { createStore } from "redux";

const INITIAL_STATE = {
  socket: null,
  activeProfile: "",
  cards: {}
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_PROFILE':
      return {activeProfile: action.activeProfile, cards: state.cards, socket: state.socket}
    case 'SET_SOCKET':
      return {socket: action.socket, cards: state.cards, activeProfile: state.activeProfile}
    case 'CHANGE_CARD':
      let newCard = state.cards
      newCard[action.profile] = action.cards
      console.log('Action: ', action)
      console.log('State: ', state)
      return {...state, cards: newCard}
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;