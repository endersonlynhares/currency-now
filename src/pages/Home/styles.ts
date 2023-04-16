import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  justify-content: center;

  button{
    width: 14.9rem;
    height: 4.9rem;
    background: ${props => props.theme.colors["--primary"]};

    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors["--white"]};
    transition: background 0.3s;
    cursor: pointer;

    /* &:hover{
      background: ${props => props.theme.colors["--primary"]};
    } */

    &:disabled{
      background: ${props => props.theme.colors["--secondary"]};
      opacity: 0.6;
    }
  }
`

export const CurrencyBlock = styled.div`
  display: flex;
  gap: 2.4rem;

  div{
    display: flex;
    flex-direction: column;


    input{
      height: 45px;
      border: 1px solid ${props => props.theme.colors["--secondary"]};
      border-radius: 4px;
      width: 15rem;
      padding-left: 1.5rem;
      font-size: 1.5rem;
    }
    label{
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: ${props => props.theme.colors["--text-base"]};
    }

  }

`

export const RadioBlock = styled.div`
  display: flex;
  flex-direction: column;

  span{
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors["--text-base"]};
    font-weight: 500;
  }

  div{
    display: flex;
    align-items: center;
  }

  label{
    font-size: 1.5rem;
    color: ${props => props.theme.colors["--text-base"]};
  }

  input{
    margin-right: 8px;
    -webkit-appearance: none;
    width: 20px;
    cursor: pointer;
    height: 20px;
    border-radius: 50%;
    border: 2px solid gray;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
      content: '';
      position: absolute;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      opacity: 0;
      background: ${props => props.theme.colors["--primary-900"]};
    }

    &:checked:before{
      opacity: 1;
    }
    &:checked{
      border-color:${props => props.theme.colors["--primary-900"]};
    }
  }

  label:nth-child(2){
    margin-right: 15px;
  }
`  