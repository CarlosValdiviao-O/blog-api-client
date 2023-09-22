import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <Link className='home' to='/'>
                My Blog
            </Link>
        </nav>
    )
}

export default NavBar;