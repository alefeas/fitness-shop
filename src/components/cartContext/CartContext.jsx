import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children, item }) => {
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
                }])
        }
        else{
            found.quantityItem += quantity
        }
        stockItem:item.stock-=quantity
    }
    const Increase = () => {
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
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, Increase, calculateCartQuantity, calculateItemPrice,totalPrice,totalTax, calcEnvio,total}}>
            { children }
        </CartContext.Provider>
    )
}