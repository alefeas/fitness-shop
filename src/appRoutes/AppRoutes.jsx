import { Routes, Route } from "react-router-dom"
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/itemDetailContainer/ItemDetailContainer'
import { Cart } from "../components/cart/Cart";
import { NotFound } from "../pages/notFound/NotFound";
import { Checkout } from "../pages/checkout/Checkout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}