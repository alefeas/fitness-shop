import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartContext/CartContext'
import '../../styles/CartWidget.css'

export const CartWidget = () => {
    const { calculateCartQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className=''>
            <button className='cartWidget'>
            <ShoppingCartIcon className='asd'/>
            {
                calculateCartQuantity() == 0
                ?
                <span></span>
                :
                <span className="quantityCart">{calculateCartQuantity()}</span>
            }
        </button>
        </Link>
    )
}