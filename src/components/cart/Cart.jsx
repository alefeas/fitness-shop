import { useContext } from "react"
import { CartContext } from "../cartContext/CartContext"
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import '../../styles/Cart.css'

export const Cart = () => {
    const ctx = useContext(CartContext)

    return (
        <div className="cartContainer">
            <h1>CARRITO</h1>
            <button onClick={ctx.clear}>VACIAR CARRITO</button>
            {
                ctx.cartList.map(item => <div className="itemCart">
                    <div className="itemCartInfo">
                    <img src={item.imgItem} width='250' alt={item.nameItem} />
                    <div className="itemDetailsContainer">
                    <span>{item.nameItem}</span>
                    <div>
                    <span>Cantidad:</span>
                    <button className="btnAddRemove" onClick={ctx.Decrease}><RemoveIcon className="iconAddRemove"/></button>
                    <span>{item.quantityItem}</span>
                    <button className="btnAddRemove" onClick={ctx.Increase}><AddIcon className="iconAddRemove"/></button>
                    </div>
                    <span>${item.priceItem}</span>
                    </div>
                    </div>
                    <button onClick={() => ctx.removeItem(item.id)} className="btnDeleteProduct"><DeleteIcon/></button>
                    </div>
                    )
            }
        </div>
    )
}