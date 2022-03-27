import React from "react"
import Card from './Card'
import { connect } from "react-redux";

function changePrimaryCard(card) {
  return {
    type: 'CHANGE_PRIMARY_CARD',
    card
  }
}


const SecondaryCard = ({ store, dispatch, profile, id }) => {
  function sendCheck(socket, card) {
    socket.emit("check", JSON.stringify(card));
    socket.on('check', msg => {
      let obj = { ...JSON.parse(msg), waiting: true }
      dispatch(changePrimaryCard(obj))
      if (obj.cpf === '') {
        setTimeout(() => socket.emit("check", JSON.stringify(obj)), 5000)
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
  console.log('Sec', store.cards[profile][position].id)
  if (store.cards[profile][position].id == '')
    return ""
  return (
    <div onClick={() => sendCheck(store.socket, store.cards[profile][position])}>
      <Card card={store.cards[profile][position]} />
    </div>
  )
}
export default connect(store => ({ store: store }))(SecondaryCard)