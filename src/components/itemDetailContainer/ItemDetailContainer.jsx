import { useEffect, useState } from "react"
import { customFetch } from "../utils/customFetch"
import { ItemDetail } from '../itemDetail/ItemDetail'
const { products } = require('../utils/products')

export const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products[2])
            .then(res => setDato(res))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    )
}