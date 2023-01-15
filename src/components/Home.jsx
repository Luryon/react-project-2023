import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
        <h1>Hola, bienvenido a ED Market</h1>
        <p>Conoce las 100 cryptos mas usadas</p>
        <Link to="/grid">Ver Cuadricula</Link>
        </>
    )
}

export default Home