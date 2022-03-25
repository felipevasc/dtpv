import styled from 'styled-components'
import React from 'react'
import CardsList from '../CardsList'

export function Content() {
  const StyledDiv = styled.div`
          grid-area: Content;
          text-align: center;
        `
  return (
    <StyledDiv>
      <CardsList />
    </StyledDiv>
  )
}