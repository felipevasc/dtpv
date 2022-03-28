import React, { useState } from "react"
import Card from './Card'
import { connect } from "react-redux";

function changeCard(profile, cards) {
  console.log('Will call change_card')
  return {
    type: 'CHANGE_CARD',
    profile,
    cards
  }
}
function changeCardInCards(cards, card) {
  let cardsTmp = []
  cards.forEach((c, i) => {
    if (c.id === card.id) {
      cardsTmp[i] = card
    }
    else {
      cardsTmp[i] = c
    }
  })
  console.log('CardsTmp', cardsTmp, cards)
  return cardsTmp
}
const ListCard = ({ store, dispatch, setPrimaryCard, profile, id }) => {
  function sendCheck(socket, card) {
    socket.emit("check", JSON.stringify(card));
    socket.on('check', msg => {
      console.log('Receiving check', msg)
      let obj = JSON.parse(msg)
      setPrimaryCard(obj)
      if (obj.cpf !== '') {
        dispatch(changeCard(profile, changeCardInCards(store.cards[profile], obj)))
      }
    })
  }
  if (!store.cards[profile])
    return ""
  let position
  store.cards[profile].forEach((c, i) => {
    if (c.id === id) {
      position = i
    }
  })
  if (store.cards[profile][position].id === '')
    return ""
  return (
    <div style={{ cursor: "pointer" }} title="Encontrar CPF" onClick={() => sendCheck(store.socket, store.cards[profile][position])}>
      <Card card={store.cards[profile][position]} />
    </div>
  )
}
export default connect(store => ({ store: store }))(ListCard)