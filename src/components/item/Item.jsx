import '../../styles/styles.scss'
import { Link } from 'react-router-dom'

export const Item = ({name, price, img, id, stock}) => {
    return (
        <>
        {
            stock == 0
            ?
            <></>
            :
            <div className="product bg-white">
            <img src={img} alt={name} />
            <div className='containerInfoItem'>
                <p className='itemName'>{name}</p>
                <p className='itemPrice'>${price}</p>
            </div>
            <Link to={`/item/${id}`}><button className='btnDetalles backgroundMainColor'>Ver Detalles</button></Link>
            </div>
        }
        </>
    )
}