import React from 'react'
import "../Home/index.css"
import trash from "../../assets/trash.png"


const Home = () => {
    return (
        <div>
            <header>
                <h2><span>Nu</span> Kenzie</h2>
                <button type='button' className='button_secundary'>Inicio</button>
            </header>

            <main>
                <section>
                    <div className='form'>
                        <label>Descrição</label>
                        <input className='input' type="text" placeholder='Digite aqui sua descrição' />
                        <span className='example'>Ex: Compra de roupas</span>

                        <div className='div_1'>
                            <div className='div_2'>
                                <label>Valor</label>
                                <input className='input' type="text" placeholder='1' />
                                <span className='rs'>R$</span>
                            </div>
                            <div className='div_2'>
                                <label>Tipo de valor</label>
                                <select className='select'>
                                    <option value="entrada">Entrada</option>
                                    <option value="despesa">Despesa</option>
                                </select>
                            </div>
                        </div>

                        <button className='button_primary'>Inserir valor</button>
                    </div>

                    <div className='valorTotal'>
                        <p>Valor total:</p>
                        <p className='valor'>R$ 8500</p>
                        <span className='spanValor'>O valor se refere ao saldo</span>
                    </div>
                </section>

                <aside>
                    <div className='filterButtons'>
                        <h4>Resumo financeiro</h4>
                        <div>
                            <button className='button_primary'>Todos</button>
                            <button className='button_secundary'>Entradas</button>
                            <button className='button_secundary'>Despesas</button>
                        </div>
                    </div>

                    <ul>
                        <li className='li'>
                            <h4>Emprestimo - Americanas</h4>
                            <div>
                                <p>R$ 2000</p>
                                <img className='imgTrash' src={trash} alt="X" />
                            </div>
                        </li>
                    </ul>
                </aside>
            </main>
        </div>
    )
}

export default Home