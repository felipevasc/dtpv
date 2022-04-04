import styled from 'styled-components'
import React from 'react'
import { Sidebar } from '../Sidebar'
import Top from '../Top'
import { Content } from '../Content'

const StyledDiv = styled.div`
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          background-image: linear-gradient(120deg, #071E3F, #102040);
          display: grid;
          grid-template-areas: 
              'Sidebar Top'
              'Sidebar Content';
          grid-template-columns: 80px minmax(200px, max-content);
          grid-template-rows: 120px auto;
        `
function InitialPage() {

  return (
    <StyledDiv>
      <Sidebar />
      <Top />
      <Content />
    </StyledDiv>
  )
}

export default InitialPage