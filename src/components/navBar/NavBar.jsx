
import { CartWidget } from "../cartWidget/CartWidget"
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import '../../styles/styles.scss'
      
export const NavBar = () => {
    return (
  <header className="backgroundMainColor">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <Link to='/' className="navbar-brand text-white" href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/010/629/917/small_2x/vintage-logo-gym-fitness-template-illustration-free-vector.jpg" alt="Logo Fitness Shop" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
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
        <NavDropdown className="dropdown" title={<span className="text-white">Cardio<ArrowDropDownIcon className="arrowDown"/></span>} id="basic-nav-dropdown dropdown">
          <li className="nav-item">
            <Link to='/category/bicicletas' className="nav-link mainColor" href="#">Bicicletas</Link>
          </li>
          <li className="nav-item">
            <Link to='/category/caminadoras' className="nav-link mainColor" href="#">Caminadoras</Link>
          </li>
        </NavDropdown>
      </Nav>
        <Form className="d-flex m-3" role="search">
          <input className="form-control me-2 p-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn-outline-success customButton" type="submit">Search</button>
        </Form>
    </Navbar.Collapse>
  <CartWidget/>
  </div>
</div>
</nav>
</header>
)
}