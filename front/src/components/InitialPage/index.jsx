import styled from 'styled-components'
import React from 'react'
import { Sidebar } from '../Sidebar'
import { Top } from '../Top'
import { Content } from '../Content'

function InitialPage() {
  const StyledDiv = styled.div`
          width: 100%;
          height: 100%;
          background-image: linear-gradient(120deg, #071E3F, #102040);
          display: grid;
          grid-template-areas: 
              'Sidebar Top'
              'Sidebar Content';
          grid-template-columns: 70px auto;
          grid-template-rows: 120px auto;
        `

  return (
    <>
      <StyledDiv>
        <Sidebar />
        <Top />
        <Content />
      </StyledDiv>
    </>
  )
}

export default InitialPage