import styled from 'styled-components'
import React from 'react'
export function MenuButtons({ img, profile, title }) {
  const StyledButton = styled.div`
          background-color: #FFF6;
          overflow-x: hidden;
          overflow-y: hidden;
          width: 50px;
          height: 50px;
          margin: 0 auto;
          margin-bottom: 20px;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          img {
            width: 40px;
          }
        `
  return (
    <StyledButton title={`Buscar por ${title}`}>
      <img src={img} />
    </StyledButton>
  )
}