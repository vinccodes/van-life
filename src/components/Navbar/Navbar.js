import { NavLink } from "react-router-dom";

import "./Navbar.css"
const Navbar = () =>{
    return(
        <nav>
            <NavLink className="logo" to="/">#vanlife</NavLink>
            <div className="nav__items">
                <NavLink className="nav__link" to="/about">About</NavLink>
                <NavLink className="nav__link" path="/vans">Vans</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;