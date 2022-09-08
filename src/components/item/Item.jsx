import '../../styles/Item.css'
import { ItemCount } from '../itemCount/ItemCount'

export const Item = ({name, price, img, stock}) => {
    return (
        <div className="product">
            <img width='200px' height='200px' src={img} alt="" />
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}