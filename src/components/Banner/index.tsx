import React from 'react'

import './Banner.css'

interface BannerProps {
  enderecoImagem: string,
  textoAlternativo?: string
}

const Banner = ( {enderecoImagem, textoAlternativo}: BannerProps ) => {
  return (
    <header className='banner'>
      <img src={enderecoImagem} alt={textoAlternativo}/>
        {/* <img src="/imagens/banner.png" alt="banner principal"/> */}
    </header>
  )
}

export default Banner