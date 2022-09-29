import React from 'react'
import trash from "../../assets/trash.png"

const Transaction = ({ element, i, removeTransaction }) => {
  return (
    <li className='li' id={element.type}>
      <h4>{element.description}</h4>
      <div>
        <p>{element.value}</p>
        <img className='imgTrash' src={trash} alt="X" onClick={() => removeTransaction(i)} />
      </div>
      <span>{element.type}</span>
    </li>
  )
}

export default Transaction