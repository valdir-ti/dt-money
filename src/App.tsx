import { useState } from 'react';
import { createServer, Model } from 'miragejs'

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionProvider } from './TransactionContext';

import { GlobalStyle } from './styles/global';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 1000,
          createdAt: new Date('2022-08-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Mercado',
          type: 'withdraw',
          category: 'Compras',
          amount: 300,
          createdAt: new Date('2022-08-13 22:00:00'),
        }
      ]
    })
  },

  routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
          return this.schema.all('transaction')
      })
      
      this.post('/transactions', (schema, request) => {
          const data = JSON.parse(request.requestBody);
          return schema.create('transaction', data);
      })
  }
})

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}
