import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import '../../styles/styles.scss'

export const Cart = () => {
    const ctx = useContext(CartContext)

    const emptyCartAlert = () => {
        toast('🗑️ CARRITO VACÍO', {
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }
    
    return (
        <div>
            <div className="containerCartTitle">
            <h1>CARRITO</h1>
            <button className='btnDeleteCart' onClick={ctx.clear}><DeleteIcon/> VACIAR</button>
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
                    <div className="secondaryFont">
                    <span className="infoCartBold">Cantidad:</span>
                    <button className="btnAddRemove" onClick={() => ctx.decrease(item.idItem)}><RemoveIcon className="iconAddRemove"/></button>
                    <input className="count mainFont" value={item.quantityItem}/>
                    <button className="btnAddRemove" onClick={() => ctx.increase(item.idItem)}><AddIcon className="iconAddRemove"/></button>
                    </div>
                    <span className="secondaryFont infoCartBold">Precio: <span className="mainFont priceItemCart">${ctx.calculateItemPrice(item.idItem)}</span></span>
                    </div>
                    </div>
                    <button onClick={() => ctx.removeItem(item.idItem)} className="btnDeleteProduct"><DeleteIcon/></button>
                    </div>
                    )
                    :
                    <div className="cartEmpty">
                    <p className="textCart">SU CARRITO ESTA VACÍO.</p>
                    <Link to={`/`}><button className="buttonCart backgroundMainColor buttonCustom">IR AL INICIO</button></Link>
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
                    {
                        ctx.cartList.length > 0 
                        ?
                        <Link to={`/checkout`}><button className="buttonCustom backgroundMainColor">FINALIZAR COMPRA</button></Link>
                        : <button className="buttonCustom backgroundMainColor" onClick={emptyCartAlert}>FINALIZAR COMPRA</button>
                    }
                </div>
            }
        </div>
        </div>
    )
}