import { Link } from "react-router-dom"
import '../../styles/styles.scss'

export const NotFound= () => {
    return (
        <>
        <div className="containerNotFound mainFont">
            <span>ERROR 404.</span>
            <Link to={`/`}><button className="mainFont buttonCustom backgroundMainColor">IR AL INICIO</button></Link>
        </div>
        </>
    )
}