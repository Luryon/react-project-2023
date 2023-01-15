import { useParams } from "react-router-dom"


const CryptoPage = () => {

    const params = useParams()
    { console.log(params) }

    return (
        <>
        <h1>Soy la crypto { params.symbol }</h1>
        </>
    )
}

export default CryptoPage