import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import { CartContext } from "../../components/cartContext/CartContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/styles.scss'

export const Checkout = () => {
    const ctx = useContext(CartContext)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [dniCuil, setDniCuil] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

    const createOrder = async () => {
            let itemsFromDB = ctx.cartList.map(item => ({
                id: item.idItem,
                name: item.nameItem,
                price: item.priceItem,
                quantity: item.quantityItem
            }))
                let order = {
                    buyer: {
                        name: name,
                        email: mail,
                        phone: phone,
                    },
                    date: serverTimestamp(),
                    items: itemsFromDB,
                    total: ctx.total()
                }
                const newOrderRef = doc(collection(db, 'orders'))
                await setDoc(newOrderRef, order)
                itemsFromDB.map(async (item) => {
                    const itemRef = doc(db, 'products', item.id)
                    await updateDoc(itemRef, {
                        stock: increment(-item.quantity)
                    })
                })
                window.location.href = '/'
                ctx.clearAfterCheckout()
                toast('❌ STOCK INSUFICIENTE', {
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });                        
    }
    return (
        <>
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
                        <input onChange={event => setMail(event.target.value)} type="text" required/>
                    </div>
                </div>
                <div className="containerInputs">
                    <div className="containerInput">
                        <span>Telefono</span>
                        <input onChange={event => setPhone(event.target.value)} type="email" required/>
                    </div>
                    <div className="containerInput">
                        <span>DNI/CUIL</span>
                        <input onChange={event => setDniCuil(event.target.value)} type="number" required/>
                    </div>
                </div>
                <div className="containerInputs">
                    <div className="containerInput">
                        <span>Ciudad</span>
                        <input onChange={event => setCity(event.target.value)} type="text" required/>
                    </div>
                    <div className="containerInput">
                        <span>Dirección</span>
                        <input onChange={event => setAddress(event.target.value)} type="text" required/>
                    </div>
                </div>
                <div className="containerButtonsForm">
                    <Link className="mainColor" to={`/`}><button className="containerButtonsForm backgroundMainColor buttonCustom">ir al inicio</button></Link>
                    <button className="containerButtonsForm backgroundMainColor buttonCustom btnPay" onClick={createOrder}>pagar</button>
                </div>
            </form>
        </div>
        </>
    )
}