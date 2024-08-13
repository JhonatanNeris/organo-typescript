import React from 'react'

//CSS
import './ListaSuspensa.css'

interface ListaSuspensaProps {
  obrigatorio: boolean
  itens: string[]
  label: string
  onchange: (valor: string) => void
  value: string
}
const ListaSuspensa = ({ obrigatorio, itens, label, onchange, value }: ListaSuspensaProps) => {

  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select onChange={(e) => onchange(e.target.value)} required={obrigatorio} value={value}>
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa