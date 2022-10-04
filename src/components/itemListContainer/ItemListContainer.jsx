import { useEffect, useState  } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../itemList/ItemList";
import { firestoreFetch } from "../../utils/firestoreFetch"
import '../../styles/ItemListContainer.css'

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
        <div className="productCatalog">
            <ItemList products={datos}/>
        </div>
    )
}