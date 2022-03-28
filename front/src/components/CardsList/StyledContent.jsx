import styled from 'styled-components'
import React from 'react'
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
export default function({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}
