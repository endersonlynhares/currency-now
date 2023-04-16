import { Link } from "react-router-dom"
import { ResultContainer, ResultInfo, InfoCambio } from "./styles"
import { ArrowLeft } from "phosphor-react"


export const Result = () =>{
  return(
    <ResultContainer>
      <Link to="/">
        <ArrowLeft size={24} /> Voltar
      </Link>

      <ResultInfo>
        <span>O resultado do cálculo é</span>
        <h2>R$ 240,56</h2>
      </ResultInfo>

      <InfoCambio>
        <span><strong>Compra no dinheiro e taxa de</strong> 5.3%</span>
        <span><strong>Cotação do dólar:</strong> $1,00 = R$ 5,20</span>
      </InfoCambio>
    </ResultContainer>
  )
}