import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { connect } from "react-redux";

function changeCard(profile, cards) {
  return {
    type: 'CHANGE_CARD',
    profile,
    cards
  }
}
const CardsList = ({ store, dispatch }) => {
  const StyledDiv = styled.div`
          .first {
            display: flex;
            width: 90%;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
            margin-left: 2%;
            padding: 2%;
            box-shadow: 1em 0.8em 2em #000;
            >div {
              box-shadow: 5px 5px 5px #000;
              transform: scale(1.3);
            }
          }
          .others {
            display: block;
            width: 80vw;
            height: 120px;
            border-top: #000A solid 3px;
            border-left: #000A solid 3px;
            border-bottom: #FFF8 solid 3px;
            border-right: #FFF8 solid 3px;
            margin-top: 20px;
            margin-left: 5vw;
            overflow-y: hidden;
            overflow-x: scroll;
            padding: 10px;
            white-space: nowrap;

            >div {
              opacity: 0.7;
              margin-right: 10px;
            }
            >div:hover {
              opacity: 1;
              transform: scale(1.03);
            }
          }
        `
  if (!!store.activeProfile && !store.cards[store.activeProfile] && !!store.socket) {
    dispatch(changeCard(store.activeProfile, []))
    const payload = { profile: store.activeProfile }
    console.log(`Emitting list ${store.activeProfile}`)
    store.socket.emit("list", JSON.stringify(payload))
    store.socket.on("list", msg => {
      let obj = JSON.parse(msg)
      console.log('Change to: ', obj)
      dispatch(changeCard(obj.profile, obj.cards))
    })
  }

  return (
    <StyledDiv>
      <span className='first'>
        <Card />
      </span>
      <span className='others'>
        {!!store.activeProfile && !!store.cards[store.activeProfile] ?
          store.cards[store.activeProfile].map(card => <Card name={card[6]} profile={card[1]} />) :
          `Loading`
        }
      </span>
    </StyledDiv>
  )
}

export default connect(store => ({ store: store }))(CardsList)