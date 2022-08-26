import { useEffect } from "react";
import { createServer } from 'miragejs'

import { api } from "../../services/api";

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
        api.get('transactions')
            .then(response => console.log('data =>', response.data));
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
