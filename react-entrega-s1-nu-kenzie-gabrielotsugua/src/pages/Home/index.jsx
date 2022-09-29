import React from 'react'
import "../Home/index.css"
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import Header from '../../components/Header/index.jsx'
import Transaction from '../../components/Transaction/index.jsx'
import TotalValue from '../../components/TotalValue'
import FilterButtons from "../../components/FilterButton/index.jsx"

const Home = ({ setPage }) => {

  const [transaction, setTransaction] = useState({
    description: "",
    value: "",
    type: "entrada"
  })

  const [transactionList, setTransactionList] = useState([])

  const [filter, setFilter] = useState("")

  const newTransactionList = transactionList.filter(transaction => filter === "" ? true : transaction.type === filter)

  const total = transactionList.reduce((previousValue, currentTransaction) => {

    if (currentTransaction.type === "entrada") {

      return previousValue + +currentTransaction.value
    } else {

      return previousValue - +currentTransaction.value
    }
  }, 0)


  function addTransactionList() {

    if (transaction.description === "" || transaction.value === "") {

      toast.error('Preencha todos os campos', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    else if (!Number(transaction.value)) {

      toast.error('O valor deve ser numérico', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {

      setTransactionList([...transactionList, transaction])
    }
  }


  function removeTransaction(transaction) {

    const newTransactionList = transactionList.filter((element, i) => i !== transaction)

    setTransactionList(newTransactionList)
  }

  return (

    <div className='home'>
      <Header setPage={setPage} />

      <main>
        <section>
          <div className='form'>

            <label>Descrição</label>
            <input className='input descricao'
              type="text"
              placeholder='Digite aqui sua descrição'
              value={transaction.description}
              onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
            />
            <span className='example'>Ex: Compra de roupas</span>
            <div className='div_1'>
              <div className='div_2'>

                <label>Valor</label>
                <input className='input quantia'
                  type="text"
                  placeholder='1'
                  value={transaction.value}
                  onChange={(e) => setTransaction({ ...transaction, value: e.target.value })}
                />
                <span className='rs'>R$</span>
              </div>
              <div className='div_2'>

                <label>Tipo de valor</label>
                <select className='select tipo'
                  defaultValue={transaction.type}
                  onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
                >
                  <option value="entrada">Entrada</option>
                  <option value="despesa">Despesa</option>
                </select>
              </div>
            </div>

            <button className='button_primary' onClick={addTransactionList}>Inserir valor</button>
          </div>

          <TotalValue total={total} />
        </section>


        <aside>
          <FilterButtons setFilter={setFilter} />

          {newTransactionList.length === 0 ? (

            <h2 className='noTransactions'>Você ainda não possui nenhum lançamento</h2>
          ) : (

            <ul className='transaction_list'>

              {newTransactionList.map((element, i) => (
                <Transaction key={i} element={element} i={i} removeTransaction={removeTransaction} />
              ))}
            </ul>
          )}
        </aside>
      </main>

      <ToastContainer />
    </div>
  )
}

export default Home