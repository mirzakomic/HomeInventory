import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allentries">About Page</NavLink>
        </nav>
        </>
    );
}
 
export default Nav;