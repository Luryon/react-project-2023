import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import Grid from "./Grid"
import "../styles/App.css"

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL

  const [cryptos, setCryptos] = useState()

  useEffect(() => {
    // api.coincap.io/v2/assets/bitcoin
    
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCryptos(data.data.data)
      })
      .catch(() => {
        console.error("La peticion Fallo")
      })
  }, [])

  if (!cryptos) return <><span>Cargando...</span></>

  return (
    <div className='app-container'>
      <h1>Lista de Criptomonedas</h1>
      <Grid data={ cryptos } />
    </div>
  )
}

export default Cuadricula
