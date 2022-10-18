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
            <div className="containerCount">
            <button className='btnAddRemove' onClick={DecreaseCount}><RemoveIcon className='iconAddRemove'  /></button>
            <input value={count} className='count'/>
            <button className='btnAddRemove' onClick={IncreaseCount}><span><AddIcon className='iconAddRemove'/></span></button>
            </div>
            <button className='buttonCustom backgroundMainColor' onClick={() => props.onAdd(count)}><span>AGREGAR AL CARRITO</span></button>
        </div>
    )
}