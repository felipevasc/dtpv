import { createStore } from "redux";

const INITIAL_STATE = {
  socket: null,
  activeProfile: "",
  cards: {},
  primaryCard: {}
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_PROFILE':
      return { ...state, activeProfile: action.activeProfile}
    case 'SET_SOCKET':
      return {...state, socket: action.socket}
    case 'CHANGE_CARD':
      console.log('CHANGE_CARD starting')
      let newCard = state.cards
      newCard[action.profile] = action.cards
      return {...state, cards: newCard}
    case 'CHANGE_PRIMARY_CARD':
      console.log('Action: ', action)
      console.log('State: ', {...state, primaryCard: action.card})
      return {...state, primaryCard: action.card}
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;