import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  img{
      width: 22rem;
  }

  div{
    display: flex;
    flex-direction: column;
    text-align: center;  
    align-items: center;
    gap: 8px;
    
    span:nth-child(1){
      color: ${props => props.theme.colors["--secondary-500"]};
      font-weight: 500;
      font-size: 1.8rem;
    }

    span:nth-child(2){
      color: ${props => props.theme.colors["--secondary"]};
      font-size: 1.4rem;
    }
  }

  @media(max-width: 840px){
    flex-direction: column;
    
  }

`