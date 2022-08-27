import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import CloseIcon from '../../assets/close.svg';
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import { api } from '../../services/api';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            type,
            title,
            value,
            category
        }

        api.post('/transactions', data)
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text" 
                    placeholder='Título'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input 
                    type="number" 
                    placeholder='Valor'
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeIcon} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                
                <input 
                    type="text" 
                    placeholder='Categoria'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
