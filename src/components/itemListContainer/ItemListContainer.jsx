import { useEffect, useState  } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../itemList/ItemList";
import { firestoreFetch } from "../../utils/firestoreFetch"
import { Link } from "react-router-dom";
import '../../styles/styles.scss'

export const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(res => setDatos(res))
            .catch(err => console.log(err))
    }, [idCategory])

    useEffect(() => {
        return (() => {
            setDatos([])
        })
    }, [])

    return (
        <div className="containerListTitle">
        <div className="sm-header">
            <div className="smh-line"></div>
            <h1 style={{margin:"0px", padding:"30px"}} className="text-center">Fitness Shop</h1>
            <div className="smh-line"></div>
        </div>
        <div className="d-flex justify-content-center containerShopLinks">
            <Link to='/shop' style={{textDecoration: "none"}}><span>Tienda</span></Link>
            <Link to='/shop/barras' style={{textDecoration: "none"}}><span>Barras</span></Link>
            <Link to='/shop/mancuernas' style={{textDecoration: "none"}}><span>Mancuernas</span></Link>
            <Link to='/shop/bancos' style={{textDecoration: "none"}}><span>Bancos</span></Link>
            <Link to='/shop/discos' style={{textDecoration: "none"}}><span>Discos</span></Link>
            <Link to='/shop/bicicletas' style={{textDecoration: "none"}}><span>Bicicletas</span></Link>
            <Link to='/shop/caminadoras' style={{textDecoration: "none"}}><span>Caminadoras</span></Link>
        </div>
            <div className="productCatalog">
                <ItemList products={datos}/>
            </div>
        </div>
    )
}