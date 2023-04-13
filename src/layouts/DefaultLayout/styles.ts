import styled from "styled-components";

import back from "../../assets/background.png"

export const LayoutContainer = styled.div`
  height: 100vh;
  min-width: 100vw;
  background: url(${back}) right top / contain no-repeat ;

  @media(max-width: 840px){
    background-size: cover;
  }

`