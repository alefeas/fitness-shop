import { Link } from 'react-router-dom'
import '../../styles/styles.scss'

export const Item = ({name, price, img, id, stock, discount}) => {
    
    const priceFin = price - price*(discount/100);

    return (
        <>
        {
            stock === 0
            ?
            <Link to={`/item/${id}`}>
            <div className="product bg-white">
            <img src={img} alt={name} />
            <div className='containerInfoItem'>
                <p className='itemName'>{name}</p>
                <p className='itemPrice'>${price}</p>
                <button className='btnDetalles backgroundMainColor noStock'>Sin Stock</button>
            </div>
            </div>
            </Link>
            :
            <Link style={{textDecoration: "none"}} to={`/item/${id}`}>
                <div className="product bg-white">
                {
                    discount > 0 ?
                        <div className='discount'>%{discount}</div>
                    : <></>
                }
                    <img src={img} alt={name} />
                    <div className='containerInfoItem'>
                        <p className='itemName'>{name}</p>
                        {
                            discount > 0 ?
                            <div className='d-flex gap-3'>
                            <p className='itemPrice priceWithoutDiscount'>${price}</p>
                            <p className='itemPrice discountPrice'>${priceFin}</p>
                            </div>
                            : <p className='itemPrice'>${price}</p>
                        }
                    </div>
                </div>
            </Link>
        }
        </>
    )
}