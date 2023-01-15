import React from 'react'
import ReactDOM from 'react-dom/client'
import Cuadricula from './components/Cuadricula'
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./components/404"
import App from "./components/App"
import Home from "./components/Home"
import CryptoPage from './components/crypto/CryptoPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } >
        <Route index element={ <Home /> } />
      </Route>
      <Route path="/grid" element={ <App/> }>
        <Route index element={ <Cuadricula/> } />
        <Route path=":symbol" element={ <CryptoPage/> }></Route>
      </Route>
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  </BrowserRouter>
  </>
)
