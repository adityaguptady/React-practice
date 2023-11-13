import {Outlet,Link } from "react-router-dom";
import SignUp from "./Signup";

function Navigation()
{
    return (<div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>)
}
export default Navigation;