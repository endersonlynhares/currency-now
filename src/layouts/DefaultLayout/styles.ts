import styled from "styled-components";

import back from "../../assets/background.png"

export const LayoutContainer = styled.div`
  height: calc(100vh);
  padding: 6.4rem;
  min-width: 100vw;
  background: url(${back}) right top / contain no-repeat ;  

  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media(max-width: 840px){
    background: none;
    align-items: center;
  }

`