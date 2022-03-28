import styled from 'styled-components'
import React from 'react'
import MenuButtons from '../MenuButtons'
import dev from '../../assets/img/dev.png'
import process from '../../assets/img/process.png'
import lawyer from '../../assets/img/lawyer.png'
import business from '../../assets/img/business.png'
import eletrical from '../../assets/img/eletrical.png'
import manager from '../../assets/img/manager.png'
import infra from '../../assets/img/infra.png'
import info from '../../assets/img/info.png'

const StyledDiv = styled.div`
          background-color: #AAA1;
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-area: Sidebar;
        `
export function Sidebar() {

  return (
    <StyledDiv>
      <MenuButtons img={info} profile="" title="Informações" />
      <MenuButtons img={dev} profile="DESENVOLVIMENTO" title="Desenvolvedores" />
      <MenuButtons img={manager} profile="GESTÃO DE SERVIÇOS DE TIC" title="Gestores de TIC" />
      <MenuButtons img={infra} profile="INFRAESTRUTURA E APLICAÇÕES" title="Analistas de Infraestrutura" />
    </StyledDiv>
  )
}