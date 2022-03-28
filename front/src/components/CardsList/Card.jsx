import StyledCard from './StyledCard.jsx'
import React from 'react'
import user from '../../assets/img/user.png'
import { connect } from "react-redux";
import CpfFormatted from './CpfFormatted.jsx';

const Card = ({ card }) => {
  if (card.cpfCheckingLeft === -1)
    card.cpfCheckingLeft = '?'

  return (
    <StyledCard classCard={card.status.replaceAll(' ', '_')}>
      <img src={user} alt="User" />
      <span className='name'>{card.name}</span>
      <span className='profile'>{card.profile}</span>
      <span className='job'>{card.job}</span>
      <span className='city'>{card.city}</span>
      <span className='classification'>{card.classification}</span>
      <span className='id'>{card.id}</span>
      <span className='status'>{card.status}</span>
      <CpfFormatted cpf={card.cpf} cpfChunk={card.cpfChunk} cpfCheckingLeft={card.cpfCheckingLeft} cpfCheckingRight={card.cpfCheckingRight} />
    </StyledCard>
  )
}

export default connect(store => ({ store: store }))(Card)