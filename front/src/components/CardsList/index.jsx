import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import PrimaryCard from './PrimaryCard.jsx';
import TechnologiesList from './TechnologiesList.jsx';
import SecondaryCard from './SecondaryCard.jsx';

function changeCard(profile, cards) {
  console.log('Will call change_card')
  return {
    type: 'CHANGE_CARD',
    profile,
    cards
  }
}

function changePrimaryCard(card) {
  return {
    type: 'CHANGE_PRIMARY_CARD',
    card
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


const CardsList = ({ store, dispatch }) => {
  const StyledDiv = styled.div`
          color: #FFF;
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
            display: flex;
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

            >div>div {
              opacity: 0.7;
              margin-right: 10px;
            }
            >div>div:hover {
              opacity: 1;
              transform: scale(1.03);
            }
            .p1, .p2, .p3 {
              color: #FFF !important;
            }
          }
        `
  if (!!store.activeProfile && !store.cards[store.activeProfile] && !!store.socket) {
    dispatch(changeCard(store.activeProfile, []))
    const payload = { profile: store.activeProfile }
    store.socket.emit("list", JSON.stringify(payload))
    store.socket.on("list", msg => {
      let obj = JSON.parse(msg)
      console.log('Change to: ', obj)
      dispatch(changeCard(obj.profile, obj.cards))
    })
  }

  if (!!store.primaryCard && !!store.primaryCard.id && !store.primaryCard.waiting) {


  }

  return (
    <StyledDiv>
      <span className='first'>
        {!store.activeProfile || !store.cards[store.activeProfile] ?
          `Demo criada para apresentar um projeto feito em Javascript, 
          onde busca por candidatos aprovados e descobre seus CPF's através do site do Dataprev.` :
          !!store.primaryCard && !!store.primaryCard.id ?
            <PrimaryCard card={store.primaryCard} /> :
            "Selecione um Card para iniciar a descoberta do CPF"
        }
      </span>
      <span className='others'>
        {!!store.activeProfile && !!store.cards[store.activeProfile] ?
          store.cards[store.activeProfile].map(c => <SecondaryCard key={c.id} profile={c.profile} id={c.id} />) :
          <TechnologiesList />
        }
      </span>
    </StyledDiv>
  )
}

export default connect(store => ({ store: store }))(CardsList)