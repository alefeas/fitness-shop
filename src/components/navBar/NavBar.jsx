import { CartWidget } from "../cartWidget/CartWidget"
import { Link } from 'react-router-dom'
import '../../styles/NavBar.css'

export const NavBar = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand text-white" href="#"><span>FITNESS SHOP</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='/category/barras' className="nav-link text-white" href="#">Barras</Link>
          </li>
          <li className="nav-item">
            <Link to='/category/mancuernas' className="nav-link text-white" href="#">Mancuernas</Link>
          </li>
          <li className="nav-item">
            <Link to='/category/bancos' className="nav-link text-white" href="#">Bancos</Link>
          </li>
          <li className="nav-item">
            <Link to='/category/discos' className="nav-link text-white" href="#">Discos</Link>
          </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn-outline-success" type="submit">Search</button>
          </form>
          <CartWidget/>
          </div>
        </div>
      </nav>
    </header>
  )
}