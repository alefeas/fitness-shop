import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const CartWidget = () => {
    return (
        <button type="button" class="btn btn-primary">
            <ShoppingCartIcon/>
            <span class="badge badge-light">4</span>
        </button>
    )
}