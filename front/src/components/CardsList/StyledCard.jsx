import styled from 'styled-components'
import React from 'react'
const StyledDiv = styled.div`
          width: 17vw;
          min-width: 250px;
          min-height: 100px;
          height: 8vw;
          background-color: #043C40;
          border: rgba(0, 0, 0, 0.5) solid 2px;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          color: #FFF;
          text-align: left;
          display: inline-block;

          border-top: #FFFA solid 3px;
          border-left: #FFFA solid 3px;
          border-bottom: #000 solid 3px;
          border-right: #000 solid 3px;
          &.RETORNO_AO_CADASTRO  {
            background-color: #9AB349;
          }
          &.DESISTENTE  {
            background-color: #8C2416;
          }
          &.ADMITIDO {
            background-color: #0F848C;
          }
          &.NÃO_CONVOCADO {
            background-color: #8C7901;
          }
          &.ELIMINADO {
            background-color: #8C1808;
          }
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
              color: #5F5;
            }
            .p2 {
              color: #57F;
            }
            .p3 {
              color: #BBB;
            }
          }
        `
export default function ({ children, classCard }) {

  return (
    <StyledDiv className={classCard}>{children}</StyledDiv>
  )
}