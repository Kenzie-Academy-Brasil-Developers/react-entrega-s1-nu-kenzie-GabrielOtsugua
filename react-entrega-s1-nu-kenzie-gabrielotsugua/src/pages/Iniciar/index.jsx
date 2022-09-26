import React, { useState } from 'react'
import "../Iniciar/index.css"
import trash from "../../assets/trash.png"
import App from '../../App.jsx'
import Transaction from '../../components/Trasnsaction/index.jsx'


const Home = () => {

  const transactionList = []


  function renderTransaction(element) {

    const ul = document.querySelector(".transaction_list")

    const li = document.createElement("li")
    const h4 = document.createElement("h4")
    const div = document.createElement("div")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const span = document.createElement("span")

    li.setAttribute("class", "li")
    img.setAttribute("class", "imgTrash")
    img.setAttribute("src", trash)
    h4.innerText = element.description
    p.innerText = `R$ ${element.value}`
    span.innerText = element.type

    ul.appendChild(li)
    li.append(h4, div, span)
    div.append(p, img)
  }


  function addTrasnsaction() {

    const ul = document.querySelector(".transaction_list")
    const inputDescricao = document.querySelector(".descricao").value
    const inputValor = document.querySelector(".quantia").value
    const select = document.querySelector(".tipo").value
    const positivo = document.querySelector(".positivo")
    const negativo = document.querySelector(".negativo")
    const btnTodos = document.querySelector(".todos")
    const btnEntradas = document.querySelector(".entradas")
    const btnDespesas = document.querySelector(".despesas")

    const transaction = {
      description: inputDescricao,
      value: inputValor,
      type: select
    }

    transactionList.push(transaction)
    const entradas = transactionList.filter(element => element.type === "entrada")
    const despesas = transactionList.filter(element => element.type === "despesa")

    
    let resultadoPositivo = transactionList.reduce((acc, act) => {
      return Number(acc) + Number(act.value)
    }, 0)
    let resultadoNegativo = transactionList.reduce((acc, act) => {
      return Number(acc) - Number(act.value)
    }, 0)
    
    if (select === "entrada") {
      
      positivo.innerText = `R$ ${resultadoPositivo}`
    } 
  
    // negativo.innerText = "Em manutenção"

    ul.innerHTML = ""
    transactionList.forEach(element => {

      renderTransaction(element)
    })

    btnTodos.addEventListener("click", () => {
      ul.innerHTML = ""

      transactionList.forEach(element => {

        renderTransaction(element)
      })
    })

    btnEntradas.addEventListener("click", () => {
      ul.innerHTML = ""

      entradas.forEach(element => {

        renderTransaction(element)
      })
    })

    btnDespesas.addEventListener("click", () => {
      ul.innerHTML = ""

      despesas.forEach(element => {

        renderTransaction(element)
      })
    })
  }

  const [homePage, setHomePage] = useState(

    <div>
      <header>
        <h2><span>Nu</span> Kenzie</h2>
        <button type='button' className='button_secundary' onClick={() => setHomePage(<App />)}>Inicio</button>
      </header>


      <main>
        <section>
          <div className='form'>
            <label>Descrição</label>
            <input className='input descricao' type="text" placeholder='Digite aqui sua descrição' />
            <span className='example'>Ex: Compra de roupas</span>

            <div className='div_1'>
              <div className='div_2'>
                <label>Valor</label>
                <input className='input quantia' type="text" placeholder='1' />
                <span className='rs'>R$</span>
              </div>
              <div className='div_2'>
                <label>Tipo de valor</label>
                <select className='select tipo'>
                  <option value="entrada">Entrada</option>
                  <option value="despesa">Despesa</option>
                </select>
              </div>
            </div>

            <button className='button_primary' onClick={() => addTrasnsaction()}>Inserir valor</button>
          </div>

          <div className='valorTotal'>
            <p>Valor total:</p>
            <p className='valor positivo'></p>
            <span className='spanValor'>O valor se refere ao saldo</span>
          </div>
          {/* <div className='despesas'>
            <p>Despesas:</p>
            <p className='valor negativo'></p>
            <span className='spanValor'>O valor se refere as dívidas</span>
          </div> */}
        </section>


        <aside>
          <div className='filterButtons'>
            <h4>Resumo financeiro</h4>
            <div>
              <button className='button_primary todos'>Todos</button>
              <button className='button_secundary entradas'>Entradas</button>
              <button className='button_secundary despesas'>Despesas</button>
            </div>
          </div>

          <ul className='transaction_list'>
            {/* <li className='li'>
              <h4>Compra de roupas</h4>
              <div>
                <p>R$ 2000</p>
                <img className='imgTrash' src={trash} alt="X" />
              </div>
              <span>Entrada</span>
            </li> */}
          </ul>
        </aside>
      </main>
    </div>
  )

  return homePage
}

export default Home