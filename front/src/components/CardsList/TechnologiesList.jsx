import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
          display: grid;
          grid-template-areas: 'FRONT BACK';
          grid-template-columns: 50% auto;
          margin: 0;
          padding: 0;
          opacity: 1 !important;
          transform: scale(1) !important;
          div {
            text-align: left;
            h4 {
              margin: 0;
            }
          }
  `
export default () => {
  
  return (
    <StyledDiv>
      <div>
        <h4>Frontend</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Hooks</li>
          <li>Websocket</li>
        </ul>
      </div>
      <div>
        <h4>Backend</h4>
        <ul>
          <li>NodeJS</li>
          <li>Websocket</li>
          <li>Web Requests</li>
          <li>HTML Parse</li>
        </ul>
      </div>
    </StyledDiv>
  )
}