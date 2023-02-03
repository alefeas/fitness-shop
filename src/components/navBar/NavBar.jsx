import { CartWidget } from "../cartWidget/CartWidget"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { SignUp } from "../user/User";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/styles.scss'

export const NavBar = () => {
    return (
      <header className="backgroundMainColor">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand text-white" href="#"><img src="https://static.vecteezy.com/system/resources/previews/007/653/260/non_2x/masculine-fitness-gym-silhouette-illustration-vector.jpg" alt="Logo Fitness Shop" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link text-white" href="#">Inicio</Link>
            </li>
            <NavDropdown className="dropdown" title={<span className="text-white">Categorias</span>} id="basic-nav-dropdown dropdown">
              <li className="nav-item">
                <Link to='/shop/barras' className="nav-link text-dark" href="#">Barras</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop/mancuernas' className="nav-link text-dark" href="#">Mancuernas</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop/bancos' className="nav-link text-dark" href="#">Bancos</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop/discos' className="nav-link text-dark" href="#">Discos</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop/bicicletas' className="nav-link mainColor" href="#">Bicicletas</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop/caminadoras' className="nav-link mainColor" href="#">Caminadoras</Link>
              </li>
            </NavDropdown>
            <li className="nav-item">
              <Link to='/shop' className="nav-link text-white" href="#">Tienda</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
        <form>
          <input type="text" placeholder="Buscar..." />
          <button><SearchIcon/></button>
        </form>
        <div className="containerUserWidget">
          <SignUp/>
          <CartWidget/>
        </div>
      </div>
      </div>
    </nav>
    </header>
)
}