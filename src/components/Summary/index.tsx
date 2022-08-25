import { Container } from "./styles";

import IncomeIcon from '../../assets/income.svg'
import OutcomeIcon from '../../assets/outcome.svg'
import TotalIcon from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={IncomeIcon} alt="Entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saída</p>
                <img src={OutcomeIcon} alt="Saídas" />
            </header>
            <strong>-R$600,00</strong>
        </div>
        <div className="backgound-highlight">
            <header>
                <p>Total</p>
                <img src={TotalIcon} alt="Total" />
            </header>
            <strong>R$400,00</strong>
        </div>
    </Container>
  )
}
