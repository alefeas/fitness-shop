import { createContext} from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext()

export const CartContextProvider = ({ children}) => {
    const [cartList, setCartList] = useLocalStorage('cartList', [])

    const MySwal = withReactContent(Swal)

    const addItem = (item, quantity) => {
        let found = cartList.find(product => product.idItem === item.id)
        if(found === undefined){
            setCartList([
                ...cartList,
                {
                    idItem:item.id,
                    imgItem:item.img,
                    nameItem:item.name,
                    priceItem:item.price,
                    quantityItem:quantity,
                    stockItem: item.stock
                }])
                toast('✔️ PRODUCTO AGREGADO', {
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else{
                found.quantityItem += quantity
                if(found.quantityItem > found.stockItem) {
                    found.quantityItem -= quantity
                    toast('❌ STOCK INSUFICIENTE', {
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });                } else if (found.quantityItem <= found.stockItem){
                    toast('✔️ PRODUCTO AGREGADO', {
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
    }
    const increase = (id) => {
        const index = cartList.findIndex(item => item.idItem === id)
        if (cartList[index].quantityItem < cartList[index].stockItem) {
            cartList[index].quantityItem += 1
            setCartList([...cartList])
        }
    }
    const decrease = (id) => {
        const index = cartList.findIndex(item => item.idItem === id)
        if (cartList[index].quantityItem > 1) {
            cartList[index].quantityItem -= 1
            setCartList([...cartList])
        }
    }
    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id)
        setCartList(result)
        toast('❌ PRODUCTO ELIMINADO', {
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }
    const clear = () => {
        if (cartList.length > 0) {
            MySwal.fire({
                title: '¿DESEA VACIAR EL CARRITO?',
                showCancelButton: true,
                confirmButtonColor: 'rgb(88, 0, 0)',
                cancelButtonColor: '',
                confirmButtonText: 'Si, vaciar',
                cancelButtonText: 'cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    toast('🗑️ CARRITO VACIADO', {
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    });
                    setCartList([])
                }
            })
        } else {
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
    }
    const clearAfterCheckout = () => {
        setCartList([])
    }
    const calculateItemPrice = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem)
        return cartList[index].priceItem * cartList[index].quantityItem
    }
    const totalTax = () => {
        return totalPrice() * .21
    }
    const totalPrice = () => {
        return cartList.reduce((total, item) => total + item.priceItem*item.quantityItem,0)
    }
    const calcEnvio = () => {
        return totalPrice()+totalTax() > 15000 ? 0 : 600
    }
    const total = () => {
        return totalPrice() + calcEnvio() + totalTax()
    }
    const calculateCartQuantity = () => {
        return cartList.reduce((total, item) => total + item.quantityItem, 0)
    }
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, calculateCartQuantity, calculateItemPrice, totalPrice, totalTax, calcEnvio, total, increase, decrease, clearAfterCheckout}}>
            { children }
        </CartContext.Provider>
    )
}