import React from 'react'

const filterButtons = ({ setFilter }) => {
  return (
    <div className='filterButtons'>
      <h4>Resumo financeiro</h4>
      <div>
        <button className='button_primary todos' onClick={() => setFilter("")}>Todos</button>
        <button className='button_secundary entradas' onClick={() => setFilter("entrada")}>Entradas</button>
        <button className='button_secundary despesas' onClick={() => setFilter("despesa")}>Despesas</button>
      </div>
    </div>
  )
}

export default filterButtons