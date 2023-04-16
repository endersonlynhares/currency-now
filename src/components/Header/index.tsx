import {HeaderContainer} from "./styles"

import logo from "../../assets/logo.svg"

export const Header = () =>{
  return(
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <span>Conversor de Moedas: Dólar para Real</span>
        <span>Dados de câmbio disponibilizados pela Morningstar.</span>
      </div>
    </HeaderContainer>
  )
}