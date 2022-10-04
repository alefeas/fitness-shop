import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) => {
        let found = cartList.find(product => product.idItem === item.id)
        if(found == undefined){
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
            }
            else{
                found.quantityItem += quantity
                if(found.quantityItem > found.stockItem) {
                    found.quantityItem -= quantity
                    alert('STOCK INSUFICIENTE.')
                }
            }
    }
    const increase = (id) => {
        const indice = cartList.findIndex(item => item.idItem == id)
        if (cartList[indice].quantityItem < cartList[indice].stockItem) {
            cartList[indice].quantityItem += 1
            setCartList([...cartList])
        }
    }
    const decrease = (id) => {
        const indice = cartList.findIndex(item => item.idItem == id)
        if (cartList[indice].quantityItem > 1) {
            cartList[indice].quantityItem -= 1
            setCartList([...cartList])
        }
    }
    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id)
        setCartList(result)
    }
    const clear = () => {
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
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, calculateCartQuantity, calculateItemPrice, totalPrice, totalTax, calcEnvio, total, increase, decrease}}>
            { children }
        </CartContext.Provider>
    )
}