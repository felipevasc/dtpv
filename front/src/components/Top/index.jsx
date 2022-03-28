import styled from 'styled-components'
import React from 'react'
import { connect } from "react-redux";

const StyledDiv = styled.div`
          background-color: #0002;
          grid-area: Top;
          color: #FFF;
          padding: 20px;
          h1 {
            margin: 0;
            font-size: 4vw;
          }
          h2 {
            margin: 0;
            font-size: 2vw;
            font-weight: 400;
          }
        `
const Top = ({ store }) => {
  
  return (
    <StyledDiv>
      <h1>
        Buscar por candidatos aprovados
      </h1>
      <h2>
        {store.activeProfile}
      </h2>
    </StyledDiv>
  )
}

export default connect(state => ({ store: state }))(Top)