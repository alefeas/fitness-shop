import { useEffect, useState  } from "react"
import { ItemList } from "../itemList/ItemList";
import { promesa } from "../../utils/promesa"
import '../../styles/ItemListContainer.css'

export const ItemListContainer = (item) => {
    const [datos,setDatos] = useState([])
    
    useEffect(() => {
        promesa()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="productCatalog">
            <ItemList products={datos}/>
        </div>
    )
}