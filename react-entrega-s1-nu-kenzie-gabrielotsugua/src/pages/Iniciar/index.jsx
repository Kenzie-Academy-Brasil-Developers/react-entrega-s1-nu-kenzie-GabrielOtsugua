import React, { useState } from 'react'
import "../Iniciar/index.css"
import 'react-toastify/dist/ReactToastify.css'
import Home from "../Home/index.jsx"
import App from "../../App.jsx"


const Iniciar = ({ setPage }) => {

  return (
      <div className="wellcome">
        <div className="wellcome_box">
          <h2><span>Nu</span> Kenzie</h2>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button className='button_primary iniciar' onClick={() => setPage("home")}>Iniciar</button>
        </div>
      </div>
  )
}

export default Iniciar