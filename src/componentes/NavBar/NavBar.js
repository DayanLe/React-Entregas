import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar bg-black text-white d-flex px-5">
            <div className="logo">
                <Link to={`/`} className="navbar-brand">
                    <h3 className="text-white">PERRO MALO</h3>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <NavLink to={`/`} className="enlaces px-4">Inicio</NavLink>
                <NavLink to={`/category/Pitbull`} className="enlaces px-4">Pitbull</NavLink>
                <NavLink to={`/category/Doberman`} className="enlaces px-4">Doberman</NavLink>
                <NavLink to={`/category/Bulldog`} className="enlaces px-4">Bulldog</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;