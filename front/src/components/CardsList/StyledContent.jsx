import styled from 'styled-components'
import React from 'react'
const StyledDiv = styled.div`
          color: #FFF;
          .first {
            display: inline-block;
            min-width: 90%;
            max-width: 100%;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            margin-top: 15px;
            margin-left: 2%;
            padding: 2%;
            //box-shadow: 1em 0.8em 2em #000;
            >div {
              box-shadow: 5px 5px 5px #000;
              transform: scale(1.2);
            }
          }
          .others {
            display: flex;
            min-width: 70%;
            max-width: 95%;
            margin-top: 20px;
            margin-left: 2%;
            overflow-y: hidden;
            overflow-x: scroll;
            padding: 10px;
            padding-bottom: 0px;
            white-space: nowrap;
            >div {
              margin: 0 auto;
              text-align: center;
            }
            >div>div {
              opacity: 0.7;
              margin-right: 10px;
              transform: rotateY(15deg) rotateX(-15deg);
              transition: all .3s ease-in-out;
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
export default function({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}
