import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { customFetch } from "../utils/customFetch"
import { ItemDetail } from '../itemDetail/ItemDetail'
import '../../styles/ItemDetail.css'

const { products } = require('../utils/products')

export const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        customFetch(2000, products.find(item => item.id == idItem))
            .then(res => setDato(res))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <div className="itemDetailContainer">
        <ItemDetail item={dato} />
        </div>
    )
}