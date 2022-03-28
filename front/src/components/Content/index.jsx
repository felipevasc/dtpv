import styled from 'styled-components'
import React from 'react'
import CardsList from '../CardsList'

const StyledDiv = styled.div`
          grid-area: Content;
          text-align: center;
        `
export function Content() {
  
  return (
    <StyledDiv>
      <CardsList />
    </StyledDiv>
  )
}