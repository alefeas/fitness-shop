import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from '../itemDetail/ItemDetail'
import { firestoreFetchOne } from "../../utils/firestoreFetch";
import '../../styles/ItemDetail.css'

export const ItemDetailContainer = () => {
    const [dato, setDato] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(res => setDato(res))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <div className="itemDetailContainer">
        <ItemDetail item={dato} />
        </div>
    )
}