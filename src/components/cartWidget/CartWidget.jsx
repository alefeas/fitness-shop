import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartContext/CartContext'

export const CartWidget = () => {
    const { calculateCartQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' type="button" className="btn btn-primary">
            <ShoppingCartIcon/>
            <span className="badge badge-light">{calculateCartQuantity()}</span>
        </Link>
    )
}