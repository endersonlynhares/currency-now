import { Link } from "react-router-dom"
import { ResultContainer, ResultInfo, InfoCambio } from "./styles"
import { ArrowLeft } from "phosphor-react"
import { useContext } from "react"
import { PriceAPI } from "../../contexts/PriceAPI"


export const Result = () => {

  const { convertValue, dataResult:{tax, type}, price } = useContext(PriceAPI)
  return (
    <ResultContainer>
      <Link to="/">
        <ArrowLeft size={24} /> Voltar
      </Link>
      {
        convertValue ?
          (
            <>
              <ResultInfo>
                <span>O resultado do cálculo é</span>
                <h2>R$ {String(convertValue.toFixed(2)).replace('.', ',')}</h2>
              </ResultInfo>

              <InfoCambio>
                <span><strong>Compra no {type == "money" ? "dinheiro" : "cartão"} e taxa de</strong> {String(tax.toFixed(2)).replace('.', ',')}%</span>
                <span><strong>Cotação do dólar:</strong> $1,00 = R$ {String(price?.toFixed(2)).replace('.', ',')}</span>
              </InfoCambio>
            </>
          )
          : "Volte para a página inicial."
      }
    </ResultContainer>
  )
}