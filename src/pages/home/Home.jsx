import { Link } from "react-router-dom"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { ItemList } from '../../components/itemList/ItemList'
import { useState, useEffect } from "react";
import { firestoreFetch } from "../../utils/firestoreFetch";

export const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        firestoreFetch()
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        return (() => {
            setData([])
        })
    }, [])

    return (
        <div className="containerHome">
            <div className='minHeight'>
                <div className="containerSpanButtonHome">
                    <span>La tienda con los mejores productos fitness.</span>
                    <Link to='/shop'><button>IR A LA TIENDA</button></Link>
                </div>
            </div>
            <div className="containerInfoHome">
                <div className="containerTitleBesties">
                    <div className="homeLine"></div>
                    <h3><MilitaryTechIcon/> NUESTROS MEJORES PRODUCTOS <MilitaryTechIcon/></h3>
                    <div className="homeLine"></div>
                    <div className="containerItemBesties d-flex justify-content-center">
                    <ItemList products={data.filter(item => item.bestie === 'yes')}/>
                    </div>
                </div>
            </div>
        </div>   
    )
}