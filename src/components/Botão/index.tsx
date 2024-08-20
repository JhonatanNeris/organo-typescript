import { ReactElement } from 'react'

//Import do css
import './Botao.css'

interface BotaoProps {
  children: ReactElement | string
}

const Botao = ( props: BotaoProps ) => {
  return (
    <button className='button'>
      {props.children}
    </button>
  )
}

export default Botao