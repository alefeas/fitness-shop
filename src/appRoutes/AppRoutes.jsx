import { Routes, Route } from "react-router-dom"
import { ItemListContainer } from '../components/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/itemDetailContainer/ItemDetailContainer'
import { Cart } from "../pages/cart/Cart";
import { NotFound } from "../pages/notFound/NotFound";
import { Checkout } from "../components/checkout/Checkout";
import { Account } from "../pages/account/Account";
import { Home } from "../pages/home/Home"
import { Shop } from "../pages/shop/Shop"
import { Search } from "@mui/icons-material";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}