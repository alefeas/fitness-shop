import { useEffect, useState  } from "react"
import { ItemList } from "../itemList/ItemList";
import { customFetch } from "../utils/customFetch"
import '../../styles/ItemListContainer.css'
const { products } = require('../utils/products')

export const ItemListContainer = () => {
    const [datos,setDatos] = useState([])
    
    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="productCatalog">
            <ItemList products={datos}/>
        </div>
    )
}