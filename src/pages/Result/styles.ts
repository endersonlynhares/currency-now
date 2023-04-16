import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  justify-content: center;

  a{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    text-decoration: none;
    border: 1px solid #D7E0EB;
    box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);
    border-radius: 8px;
    width: 120px;
    height: 56px;

    color: ${props => props.theme.colors["--text-base"]};
    
    font-weight: 500;

    svg{
      color:${props => props.theme.colors["--secondary"]};;
    }
  }

`

export const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span{
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color:${props => props.theme.colors["--secondary-500"]};
  }

  h2{
    font-weight: 600;
    font-size: 64px;
    line-height: 80px;
    color: ${props => props.theme.colors["--primary"]};
  }

`

export const InfoCambio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  line-height: 32px;
  color: ${props => props.theme.colors["--secondary"]};
`