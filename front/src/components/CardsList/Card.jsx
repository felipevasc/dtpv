import styled from 'styled-components'
import React from 'react'
import user from '../../assets/img/user.png'

export default function({ name }) {
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
          .profile {
            display: inline-block;
            position: absolute;
            top: 20px;
            left: 40px;
            font-size: 11px;
            white-space: nowrap;
          }
          .job {
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
          }
        `
  return (
    <StyledDiv>
      <img src={user} />
      <span className='name'>Nome Completo da Pessoa 12345</span>
      <span className='profile'>Desenvolvimento de Sistemas</span>
      <span className='job'>Analista de Sistemas</span>
      <span className='city'>Fortaleza-CE</span>
      <span className='classification'>001</span>
      <span className='id'>276.00697740/5</span>
      <span className='status'>RETORNO AO CADASTRO</span>
      <span className='cpf'>123.123.123-99</span>
    </StyledDiv>
  )
}