import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary">
            <ShoppingCartIcon/>
            <span className="badge badge-light">4</span>
        </button>
    )
}