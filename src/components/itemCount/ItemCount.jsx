import { useState } from "react"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial)
    const IncreaseCount = () =>{
        if(count != props.stock) {
        setCount(count+1)
        }
    }
    const DecreaseCount = () =>{
        if(count != props.initial) {
        setCount(count-1)
        }    
    }

    return (
        <div>
            <button onClick={DecreaseCount}><RemoveIcon/></button>
            <span className="">{count}</span>
            <button onClick={IncreaseCount}><AddIcon/></button>
            <br />
            <button onClick={() => props.onAdd(count)}><span>AGREGAR AL CARRITO</span></button>
        </div>
    )
}