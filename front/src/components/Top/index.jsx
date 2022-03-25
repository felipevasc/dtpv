import styled from 'styled-components'
import React from 'react'

export function Top() {
  const StyledDiv = styled.div`
          width: 100%;
          background-color: #0002;
          height: 100%;
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
          }
        `
  return (
    <StyledDiv>
      <h1>
        Buscar por candidatos aprovados na Dataprev
      </h1>
      <h2>
        Desenvolvedores
      </h2>
    </StyledDiv>
  )
}