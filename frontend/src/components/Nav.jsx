import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/small-items">Small</NavLink>
        <NavLink to="/medium-items">Medium</NavLink>
        <NavLink to="/big-items">Big</NavLink>
        </nav>
        </>
    );
}
 
export default Nav;