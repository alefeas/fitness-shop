import '../../styles/Item.css'

export const Item = ({name, price, img, stock}) => {
    return (
        <>
        <div className="product">
            <img width='200px' height='200px' src={img} alt="" />
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
        </div>
        </>
    )
}