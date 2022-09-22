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
    }
    const Increase = () => {
    }
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }
    const clear = () => {
        setCartList([])
    }
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, Increase}}>
            { children }
        </CartContext.Provider>
    )
}