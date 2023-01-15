import { Link } from "react-router-dom"


const Item = ({name, price, symbol, changePercent24Hr}) => {

    return (
        <div className="item">
            <h2>{ name } </h2>
            <div className="info">
                <p><span className="label">Precio: </span> { Number(price).toFixed(2) } </p>
                <p><span className="label">Simbolo: </span> { symbol } </p>
                <p>
                    <span className="label"> Variacion 24hrs:  </span>
                    <span className={ parseFloat(changePercent24Hr) > 0 ? "positive" : "negative" }>    
                    { parseFloat(changePercent24Hr).toFixed(3) }% </span> 
                </p>
            <Link to={`/grid/${symbol}`}>Ver Detalles</Link>
            </div>
        </div>
    )
}

export default Item