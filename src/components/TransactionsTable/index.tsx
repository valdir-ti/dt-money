import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    createdAt: string;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>R${transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>22/07/2022</td>
                        </tr>                    
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
