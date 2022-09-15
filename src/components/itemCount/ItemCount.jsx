import { useState } from "react"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial)
    const IncreaseCount = () =>{
        count === props.stock ? alert('¡NO HAY MAS STOCK!') : setCount(count+1)
    }
    const DecreaseCount = () =>{
        count === props.initial ? alert('La cantidad debe ser 1 o más.') : setCount(count-1)
    }
    const onAdd = () => {
        alert('Has seleccionado ' + count + ' productos')
    }
    return (
        <div>
            <button onClick={DecreaseCount}><RemoveIcon/></button>
            <span className="">{count}</span>
            <button onClick={IncreaseCount}><AddIcon/></button>
            <br />
            <button onClick={onAdd}><span>AGREGAR AL CARRITO</span></button>
        </div>
    )
}