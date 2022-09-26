import './App.css';
import "./components/Elements/index.css"
import "./components/Variables/index.css"
import { useState } from 'react';
import imgHome from "./assets/home.png"
import Home from './pages/Home';


const App = () => {

  const [home, setHome] = useState()

  return (
    <div className='App'>
      <div className="wellcome">
        <img className='imgHome' src={imgHome} />
        <button className='iniciarTranparent iniciar'>asdasdasd</button>

        <div className="wellcome_box">
          <h2><span>Nu</span> Kenzie</h2>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button className='button_primary iniciar'>Iniciar</button>
        </div>
      </div>


      {/* <Home /> */}
    </div>
  )
}

export default App;