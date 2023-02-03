import { serverTimestamp, doc, collection, updateDoc, increment, addDoc } from "firebase/firestore"
import { db } from "../../utils/firebaseConfig"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Loader } from "../loader/Loader"
import '../../styles/styles.scss'

export const Checkout = () => {
    const ctx = useContext(CartContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const [cartBuyed, setCartBuyed] = useState(false)
    
    const createOrder = async () => {
        setLoading(true)
        let itemsFromDB = ctx.cartList.map(item => ({
            id: item.idItem,
            name: item.nameItem,
            price: item.priceItem,
            quantity: item.quantityItem
        }))
        let order = {
            buyer: {
                name: name,
                email: email,
                phone: phone,
            },
            date: serverTimestamp(),
            items: itemsFromDB,
            total: ctx.total()
        }
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) => setOrderId(id))
        itemsFromDB.map(async (item) => {
            const itemRef = doc(db, 'products', item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            })
        })
        ctx.clearAfterCheckout()
        setCartBuyed(true)
        setTimeout(() => {
        setLoading(false)
        }, 1500);
    }
    if (ctx.cartList.length === 0 && cartBuyed === false) {
        window.location.href = '/'
    }
    return (
        <>
            {
            cartBuyed === false
            ?
            <div className="containerCheckout mainFont">
                <h3>CHECKOUT</h3>
                <form action="" className="checkout">
                    <div className="containerInputs">
                        <div className="containerInput">
                            <span>nombre y apellido</span>
                            <input onChange={event => setName(event.target.value)} type="text" required/>
                        </div>
                        <div className="containerInput">
                        <span>E-MAIL</span>
                        <input onChange={event => setEmail(event.target.value)} type="text" required/>
                        </div>
                    </div>
                    <div className="containerInputs">
                        <div className="containerInput">
                            <span>Telefono</span>
                            <input onChange={event => setPhone(event.target.value)} type="email" required/>
                        </div>
                    </div>
                    <div className="containerButtonsForm">
                        <Link className="mainColor" to={`/`}><button className="containerButtonsForm backgroundMainColor buttonCustom">ir al inicio</button></Link>
                        <button className="containerButtonsForm backgroundMainColor buttonCustom btnPay" onClick={createOrder}>pagar</button>
                    </div>
                </form>
            </div>
            : loading ? <Loader/>
            : 
            <div className='containerOrder'>
                <span>¡Muchas gracias por su compra!</span>
                <p>ID de compra: {orderId}</p>
                <Link to={`/`}><button>IR AL INICIO</button></Link>
            </div>
            }    
        </>
    )
}