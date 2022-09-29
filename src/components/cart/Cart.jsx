import { useContext, useState } from "react"
import { CartContext } from "../cartContext/CartContext"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import '../../styles/Cart.css'

export const Cart = ({item}) => {
    const ctx = useContext(CartContext)
    return (
        <div>
            <div className="containerCartTitle">
            <h1>CARRITO</h1>
            <button onClick={ctx.clear}>VACIAR CARRITO</button>
            </div>
            <div className="cartContainer">
                <div className="containerItemsCart">
                {
                ctx.cartList.length > 0
                ?
                ctx.cartList.map(item => <div className="itemCart">
                    <div className="itemCartInfo">
                    <img src={item.imgItem} width='250' alt={item.nameItem} />
                    <div className="itemDetailsContainer">
                    <span className="titleItemCart">{item.nameItem}</span>
                    <div>
                    <span>Cantidad:</span>
                    <button className="btnAddRemove" onClick={ctx.Decrease}><RemoveIcon className="iconAddRemove"/></button>
                    <span>{item.quantityItem}</span>
                    <button className="btnAddRemove" onClick={ctx.Increase}><AddIcon className="iconAddRemove"/></button>
                    </div>
                    <span>Precio: ${ctx.calculateItemPrice(item.idItem)}</span>
                    </div>
                    </div>
                    <button onClick={() => ctx.removeItem(item.idItem)} className="btnDeleteProduct"><DeleteIcon/></button>
                    </div>
                    )
                    :
                    <div>
                    <p>SU CARRITO ESTA VACÍO.</p>
                    <Link to={`/`}><button className="buttonCart">IR AL INICIO</button></Link>
                    </div> 

                }
                </div>
            {
                <div className="containerCosts">
                    <span className="spanTitleCosts">RESUMEN DEL PEDIDO</span>
                    <div className="containerSpanCosts">
                    <span>Envío: </span>
                    <span>${ctx.calcEnvio()}</span>
                    </div>
                    <div className="containerSpanCosts">
                    <span>IVA (21%): </span>
                    <span>${ctx.totalTax()}</span>
                    </div>
                    <div className="containerSpanCosts">
                    <span>Precio total: </span>
                    <span>${ctx.total()}</span>
                    </div>
                    <button className="buttonCart">FINALIZAR COMPRA</button>
                </div>
            }
        </div>
        </div>
    )
}