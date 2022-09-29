import React from 'react'

const Header = ({ setPage }) => {
  return (
    <header>
      <h2><span>Nu</span> Kenzie</h2>
      <button type='button' className='button_secundary' onClick={() => setPage("iniciar")}>Inicio</button>
    </header>
  )
}

export default Header