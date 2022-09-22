import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <Link to='/cart' type="button" className="btn btn-primary">
            <ShoppingCartIcon/>
            <span className="badge badge-light">4</span>
        </Link>
    )
}