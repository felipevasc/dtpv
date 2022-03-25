import styled from 'styled-components'
import React from 'react'
import { connect } from "react-redux";

function changeProfile(store, activeProfile) {
  return {
    type: 'CHANGE_PROFILE',
    store,
    activeProfile
  }
}
const MenuButtons = ({ store, dispatch, img, profile, title }) => {
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
    <StyledButton title={`Buscar por ${title}`} onClick={() => dispatch(changeProfile(store, profile))}>
      <img src={img} />
    </StyledButton>
  )
}

export default connect(store => ({ store: store }))(MenuButtons)