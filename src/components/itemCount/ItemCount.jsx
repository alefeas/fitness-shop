import { useState } from "react"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial)
    const IncreaseCount = () =>{
        count == props.stock ? console.log(Error) : setCount(count+1)
    }
    const DecreaseCount = () =>{
        count == props.initial ? console.log(Error) : setCount(count-1)
    }
    const onAdd = () => {
        alert('You have selected ' + count + ' items')
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