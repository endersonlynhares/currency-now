import {HeaderContainer} from "./styles"

import logo from "../../assets/logo.svg"

export const Header = () =>{
  return(
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <span>14 de janeiro 2021 | 21:00 UTC</span>
        <span>Dados de câmbio disponibilizados pela Morningstar.</span>
      </div>
    </HeaderContainer>
  )
}