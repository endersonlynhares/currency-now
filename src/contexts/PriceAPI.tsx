import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const PriceAPI = createContext({} as APIContextType)

interface PriceAPIProps {
  children: ReactNode
}

interface Price {
  low: string
}

type ConvertMoneyData = {
  money: string;
  tax: string;
  type: "money" | "card";
}

interface DataResultType{
  type: string,
  tax: number
}

interface APIContextType {
  price: number | undefined,
  convertValue: number | null,
  dataResult: DataResultType,
  getData: (data: ConvertMoneyData) => void
}

export const PriceAPIProvider = ({ children }: PriceAPIProps) => {
  const [data, setData] = useState<Price>()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://economia.awesomeapi.com.br/last/USD-BRL"
        );
        setData(response.data.USDBRL);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  const price = data && Number(data.low)

  const [convertValue, setConvertValue] = useState<number | null>(null)
  const [dataResult, setDataResult] = useState<DataResultType>({
    type: "",
    tax: 0
  })

  const getData = (data: ConvertMoneyData) => {
    const money = Number(data.money)
    const stateTax = Number(data.tax)
    setDataResult({
      type: data.type,
      tax: stateTax
    })

    if (price) {
      if (data.type == "money") {
        setConvertValue((money + (money * (stateTax / 100))) * (price + (1.1/100 * price)))
      } else {
        setConvertValue((money + (money * (stateTax / 100)) + (6.4/100 * price)) * price)
      }
    }

    navigate('/result')
  }

  return (
    <PriceAPI.Provider value={{ price, dataResult, getData, convertValue}}>
      {children}
    </PriceAPI.Provider>
  )
}