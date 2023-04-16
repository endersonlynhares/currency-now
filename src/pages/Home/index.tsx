import { ArrowsLeftRight } from "phosphor-react"
import { FormContainer, CurrencyBlock, RadioBlock } from "./styles"

export const Home = () => {
  return (
    <FormContainer >
      <CurrencyBlock>
        <div>
          <label htmlFor="">Dólar: </label>
          <input type="text" placeholder="$ 0.00" />
        </div>
        <div>
          <label htmlFor="">Taxa do Estado: </label>
          <input type="text" placeholder="0 %" />
        </div>
      </CurrencyBlock>
      <RadioBlock>
        <span>Tipo de compra</span>
        <div>
          <input id="money" name="currency" type="radio" />
          <label htmlFor="money">Dinheiro</label>
          <input id="card" name="currency" type="radio" />
          <label htmlFor="card">Cartão</label>
        </div>
      </RadioBlock>

      <button type="submit">
        <ArrowsLeftRight size={24} weight="bold" />
        Converter
      </button>
    </FormContainer>
  )
}