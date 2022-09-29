import './App.css';
import "./components/Elements/index.css"
import "./components/Variables/index.css"
import { useState } from 'react'
import Home from './pages/Home/index.jsx'
import Iniciar from "./pages/Iniciar/index.jsx"


const App = () => {

  const [page, setPage] = useState("iniciar")

  

  return (
    <>
    {page === "iniciar" && <Iniciar setPage={setPage} />}

    {page === "home" && <Home setPage={setPage} />}
    </>
  )
}

export default App