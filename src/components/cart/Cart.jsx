import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { useContext } from "react"
import { CartContext } from "../cartContext/CartContext"
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import '../../styles/Cart.css'

export const Cart = () => {
    const ctx = useContext(CartContext)

    const createOrder = async () => {
        if (ctx.cartList.length >0) {
            let itemsFromDB = ctx.cartList.map(item => ({
                id: item.idItem,
                name: item.nameItem,
                price: item.priceItem,
                quantity: item.quantityItem
            }))
            let order = {
                buyer: {
                    name: 'José Gimenez',
                    email: 'josegi@gmail.com',
                    phone: '01122943619'
                },
                date: serverTimestamp(),
                items: ctx.cartList,
                quantity: ctx.calculateCartQuantity(),
                total: ctx.total()
            }
            const newOrderRef = doc(collection(db, 'orders'))
            await setDoc(newOrderRef, order)
            alert('PEDIDO REALIZADO.')
            ctx.clear()
            itemsFromDB.map(async (item) => {
                const itemRef = doc(db, 'products', item.id)
                await updateDoc(itemRef, {
                    stock: increment(-item.quantity)
                })
            })
        } else {
            alert('SU CARRITO ESTÁ VACÍO.')
        }
    }

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
                    <button className="btnAddRemove" onClick={() => ctx.decrease(item.idItem)}><RemoveIcon className="iconAddRemove"/></button>
                    <span>{item.quantityItem}</span>
                    <button className="btnAddRemove" onClick={() => ctx.increase(item.idItem)}><AddIcon className="iconAddRemove"/></button>
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
                    <button className="buttonCart" onClick={createOrder}>FINALIZAR COMPRA</button>
                </div>
            }
        </div>
        </div>
    )
}