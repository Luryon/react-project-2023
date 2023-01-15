import Item from "./Item"
import "../styles/Grid.css"

const Grid = ({ data }) => {
    console.log(data)

    return (
        <>
        <div className="cryptoGrid">
            { data.map(({name, priceUsd, symbol, changePercent24Hr}) => (
                <Item 
                name={name} 
                price={priceUsd} 
                symbol={ symbol }
                changePercent24Hr={ changePercent24Hr }/>
            )) }
        </div>
        </>
    )
}

// { cryptos.map(({id, name, priceUsd}) => (
//    <li key={id}> Nombre: { name }, Precio: { priceUsd} </li>
//  ))}

export default Grid