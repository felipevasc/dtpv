import React, { useState } from 'react'
import StyledContent from './StyledContent.jsx'
import { connect } from "react-redux";
import Card from './Card.jsx';
import TechnologiesList from './TechnologiesList.jsx';
import ListCard from './ListCard.jsx';
import api from '../api'

function changeCard(profile, cards) {
  console.log('Will call change_card')
  return {
    type: 'CHANGE_CARD',
    profile,
    cards
  }
}
const CardsList = ({ store, dispatch }) => {
  const [primaryCard, setPrimaryCard] = useState({})
  if (!!store.activeProfile && !store.cards[store.activeProfile] && !!store.socket) {
    const payload = { profile: store.activeProfile }
    api.post("/list", payload).then(res => {
      dispatch(changeCard(res.data.profile, res.data.cards))
    })
  }

  return (
    <StyledContent>
      <span className='first'>
        {!store.activeProfile || !store.cards[store.activeProfile] ?
          `Demo criada para apresentar um projeto feito em Javascript, 
          onde busca por candidatos aprovados e descobre seus CPF's através do site do Dataprev.` :
          !!primaryCard && !!primaryCard.id ?
            <Card card={primaryCard} /> :
            "Selecione um Card para iniciar a descoberta do CPF"
        }
      </span>
      <span className='others'>
        {!!store.activeProfile && !!store.cards[store.activeProfile] ?
          store.cards[store.activeProfile].map(c => <ListCard setPrimaryCard={setPrimaryCard} key={c.id} profile={c.profile} id={c.id} />) :
          <TechnologiesList />
        }
      </span>
    </StyledContent>
  )
}

export default connect(store => ({ store: store }))(CardsList)