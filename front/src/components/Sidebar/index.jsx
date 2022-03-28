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

export function Sidebar() {
  const StyledDiv = styled.div`
          background-color: #AAA1;
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-area: Sidebar;
        `
  return (
    <StyledDiv>
      <MenuButtons img={dev} profile="DESENVOLVIMENTO" title="Desenvolvedores"/>
      <MenuButtons img={eletrical} profile="ENGENHARIA ELÉTRICA" title="Engenheiros Elétricos"/>
      <MenuButtons img={business} profile="ANÁLISE DE NEGÓCIOS" title="Analistas de Negócios"/>
      <MenuButtons img={manager} profile="GESTÃO DE SERVIÇOS DE TIC" title="Gestores de TIC"/>
      <MenuButtons img={infra} profile="INFRAESTRUTURA E APLICAÇÕES" title="Analistas de Infraestrutura"/>
      <MenuButtons img={process} profile="PROCESSAMENTO" title="Analistas de Processamento"/>
      <MenuButtons img={lawyer} profile="ADVOCACIA" title="Advogados"/>
    </StyledDiv>
  )
}