import '../../styles/Item.css'
import { Link } from 'react-router-dom'

export const Item = ({name, price, img, id}) => {
    return (
        <>
        {
            <div className="product">
            <img width='200px' height='200px' src={img} alt={name} />
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <Link to={`/item/${id}`}><button>Ver Detalles</button></Link>
            </div>
        }
        </>
    )
}