import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>TEIWY</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/nosotros">Inicio</Link></li>
            <li><Link className="menu-link" to="/nosotros">Productos</Link></li>
            <li><Link className="menu-link" to="/login">Login</Link></li>
            <li><Link className="menu-link" to="/Registro">Registro</Link></li>
            <li><Link className="menu-link" to="/Reestablecer">ReestablecerContraseña</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar;