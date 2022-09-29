import React from 'react'

const TotalValue = ({ total }) => {
  return (
    <div className='valorTotal'>
      <p>Valor total:</p>
      <p className='valor positivo'>{total.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</p>
      <span className='spanValor'>O valor se refere ao saldo</span>
    </div>
  )
}

export default TotalValue