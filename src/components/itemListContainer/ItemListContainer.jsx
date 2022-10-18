import { useEffect, useState  } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../itemList/ItemList";
import { firestoreFetch } from "../../utils/firestoreFetch"
import '../../styles/styles.scss'

export const ItemListContainer = () => {
    const [datos,setDatos] = useState([])
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
            <div className="containerFilter">
                <div className="containerTitelCategory">
                <span className="titleCategory">Productos</span>
                </div>
            </div>
            <div className="productCatalog">
                <ItemList products={datos}/>
            </div>
        </div>
    )
}