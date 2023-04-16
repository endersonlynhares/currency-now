import { ArrowsLeftRight } from "phosphor-react"
import { FormContainer, CurrencyBlock, RadioBlock } from "./styles"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useContext } from "react"
import { PriceAPI } from "../../contexts/PriceAPI"

const ConvertMoneyValidationSchema = zod.object({
  money: zod.string().refine(value =>{
    return /^(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/.test(value);
  }, "Digite um valor monetário válido"),
  tax: zod.string().refine(value =>{
    return /^(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/.test(value);
  }, "Digite um valor real válido"),
  type: zod.enum(['money', 'card'])
})

type ConvertMoneyFormInputs = zod.infer<typeof ConvertMoneyValidationSchema>

export const Home = () => {

  const {register, handleSubmit, watch} = useForm<ConvertMoneyFormInputs>({
    resolver: zodResolver(ConvertMoneyValidationSchema),
  })

  const {getData} = useContext(PriceAPI)

  const onSubmit = (data: ConvertMoneyFormInputs) =>{
    getData(data)
  }

  const tax = (watch('tax'))
  const isSubmitDisabled = !tax

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CurrencyBlock>
        <div>
          <label htmlFor="">Dólar: </label>
          <input type="text" {...register('money')} placeholder="$ 0.00" required/>
        </div>
        <div>
          <label htmlFor="">Taxa do Estado: </label>
          <input type="text" {...register('tax')} placeholder="0 %" required />
        </div>
      </CurrencyBlock>
      <RadioBlock>
        <span>Tipo de compra</span>
        <div>
          <input id="money" {...register('type')} value={"money"} name="type" type="radio" />
          <label htmlFor="money">Dinheiro</label>
          <input id="card" {...register('type')} name="type" value={"card"} type="radio" />
          <label htmlFor="card">Cartão</label>
        </div>
      </RadioBlock>

      <button type="submit" disabled={isSubmitDisabled}>
        <ArrowsLeftRight size={24} weight="bold" />
        Converter
        
      </button>
    </FormContainer>
  )
}