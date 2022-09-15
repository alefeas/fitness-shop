import { useEffect, useState  } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../itemList/ItemList";
import { customFetch } from "../utils/customFetch"
import '../../styles/ItemListContainer.css'
const { products } = require('../utils/products')

export const ItemListContainer = () => {
    const [datos,setDatos] = useState([])
    const { idCategory } = useParams()
    
    useEffect(() => {
        if (idCategory) {
            customFetch(2000, products.filter(item => item.categoryId === idCategory))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
        else{
            customFetch(2000, products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
    }, [idCategory])

    return (
        <div className="productCatalog">
            <ItemList products={datos}/>
        </div>
    )
}