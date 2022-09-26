import './App.css';
import "./components/Elements/index.css"
import "./components/Variables/index.css"
import { useState } from 'react';
import imgHome from "./assets/home.png"
import Home from './pages/Iniciar';


const App = () => {

  const [wellcomePage, setWellcomePage] = useState(

    <div className='App'>
      <div className="wellcome">
        <img className='imgHome' src={imgHome} />
        <button className='iniciarTranparent iniciar' onClick={() => setWellcomePage(<Home/>)}>Transparent button</button>

        <div className="wellcome_box">
          <h2><span>Nu</span> Kenzie</h2>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button className='button_primary iniciar' onClick={() => setWellcomePage(<Home />)}>Iniciar</button>
        </div>
      </div>
    </div>
  )

  return wellcomePage
}

export default App;