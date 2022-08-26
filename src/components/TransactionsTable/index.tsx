import { useEffect } from "react";
import { createServer } from 'miragejs'

import { Container } from "./styles";

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'transaction one',
                    amount: 400,
                    type: 'deposit',
                    category: 'salary',
                    date: new Date()
                }
            ]
        })
    }
})

export function TransactionsTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json)
            .then(data => console.log('data =>', data));
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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Freelance</td>
                        <td>22/07/2022</td>
                    </tr>
                    <tr>
                        <td>Parcela apartamento</td>
                        <td className="withdraw">- R$1.400,00</td>
                        <td>Despesa</td>
                        <td>01/08/2022</td>
                    </tr>
                    <tr>
                        <td>Compra supermercado</td>
                        <td className="withdraw">- R$600,00</td>
                        <td>Despesa</td>
                        <td>21/07/2022</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$10.000,00</td>
                        <td>Salário</td>
                        <td>30/07/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
