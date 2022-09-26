import React from 'react'
import trash from "../../assets/trash.png"

const Transaction = () => {

  const inputDescricao = document.querySelector(".asdasd").value
  const inputValor = document.querySelector(".asdasd").value
  const select = document.querySelector(".asdasd").value

  return (
    <li className='li'>
      <h4>{inputDescricao}</h4>
      <div>
        <p>{inputValor}</p>
        <img className='imgTrash' src={trash} alt="X" />
      </div>
      <span>{select}</span>
    </li>
  )
}

export default Transaction