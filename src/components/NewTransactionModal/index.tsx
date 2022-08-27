import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';

import CloseIcon from '../../assets/close.svg';
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className='react-modal-content'
        >
            <button 
                type='button' 
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={CloseIcon} alt="Close modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text" 
                    placeholder='Título'
                />

                <input 
                    type="number" 
                    placeholder='Valor'
                />

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={IncomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={OutcomeIcon} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                
                <input 
                    type="text" 
                    placeholder='Categoria'
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
