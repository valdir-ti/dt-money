import { useState } from 'react'
import Modal from 'react-modal'

import { Container, Content } from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="DT Money" />
        <button
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova Transação
        </button>
      </Content>

    </Container>
  )
}
