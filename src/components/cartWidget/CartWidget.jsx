import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cartContext/CartContext'
import '../../styles/styles.scss'

export const CartWidget = () => {
    const { calculateCartQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className=''>
            <button className='cartWidget'>
            <ShoppingCartIcon className='localMallIcon'/>
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