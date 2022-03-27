import styled from 'styled-components'
import React from 'react'
import user from '../../assets/img/user.png'
import { connect } from "react-redux";

function formatCpf(cpf) {
  return cpf.replace(/[^\d\?]/g, '').replace(/([0-9\?]{3})([0-9\?]{3})([0-9\?]{3})([0-9\?]{2})/, "$1.$2.$3-$4")
}
const Card = ({ card }) => {
  const StyledDiv = styled.div`
          width: 17vw;
          min-width: 250px;
          min-height: 100px;
          height: 8vw;
          background-color: #F00;
          border: rgba(0, 0, 0, 0.5) solid 2px;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          color: #FFF;
          text-align: left;
          display: inline-block;

          img {
            width: 25px;
            position: absolute;
            background-color: #FFF9;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            padding: 3px;
            top: 5px;
            left: 5px;
          }
          .name {
            display: inline-block;
            position: absolute;
            top: 4px;
            left: 40px;
            font-size: 13px;
            font-weight: 500;
            width: 100%;
            white-space: nowrap;
          }
          .job {
            display: inline-block;
            position: absolute;
            top: 20px;
            left: 40px;
            font-size: 9px;
            font-weight: 100;
            white-space: nowrap;
          }
          .profile {
            display: inline-block;
            position: absolute;
            top: 40px;
            left: 25px;
            font-size: 10px;
            white-space: nowrap;
          }
          .city {
            display: inline-block;
            position: absolute;
            top: 40px;
            right: 5px;
            font-size: 10px;
            white-space: nowrap;
          }
          .classification {
            display: inline-block;
            position: absolute;
            top: 40px;
            left: 5px;
            font-size: 10px;
            white-space: nowrap;
          }
          .id {
            display: inline-block;
            position: absolute;
            top: 55px;
            left: 5px;
            font-size: 10px;
            white-space: nowrap;
          }
          .status {
            display: inline-block;
            position: absolute;
            top: 55px;
            right: 5px;
            font-size: 10px;
            white-space: nowrap;
          }
          .cpf {
            display: inline-block;
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 15px;
            white-space: nowrap;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            .p1 {
              color: #181;
            }
            .p2 {
              color: #138;
            }
            .p3 {
              color: #888;
            }
          }
        `
  let cpfFormated = ""

  if (card.cpf === "") {
    cpfFormated = card.cpfChunk
    if (card.cpfCheckingLeft === -1) {
      card.cpfCheckingLeft = '?'
    }
    if (card.cpfCheckingLeft !== "") {
      cpfFormated = card.cpfCheckingLeft + "" + cpfFormated
    }
    else if (card.cpfCheckingRight !== "") {
      cpfFormated = cpfFormated + "" + card.cpfCheckingRight
    }
    cpfFormated = formatCpf(cpfFormated)
    while (cpfFormated.length < 14) {
      cpfFormated = formatCpf(cpfFormated+"?")
    }
    console.log('CPF Formated:', cpfFormated)
  }
  return (
    <StyledDiv>
      <img src={user} />
      <span className='name'>{card.name}</span>
      <span className='profile'>{card.profile}</span>
      <span className='job'>{card.job}</span>
      <span className='city'>{card.city}</span>
      <span className='classification'>{card.classification}</span>
      <span className='id'>{card.id}</span>
      <span className='status'>{card.status}</span>
      <span className='cpf'>
        <span className="p1">{!!card.cpfCheckingLeft ? 
                            cpfFormated.substring(0, 1) : 
                            cpfFormated.substring(0, cpfFormated.indexOf('?'))}</span>
        <span className="p2">{!!card.cpfCheckingLeft ? 
                            cpfFormated.substring(1, cpfFormated.indexOf('?', 2)) : 
                            cpfFormated.substring(cpfFormated.indexOf('?'), 1)}</span>
        <span className="p3">{!!card.cpfCheckingLeft ?
                            cpfFormated.substring(cpfFormated.indexOf('?', 2)) :
                            cpfFormated.substring(cpfFormated.indexOf('?') + 1)}</span>
      </span>
    </StyledDiv>
  )
}

export default connect(store => ({ store: store }))(Card)