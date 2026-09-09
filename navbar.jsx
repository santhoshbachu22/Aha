import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="list-items">
            <li><Link to="/one">one</Link></li>
            <li><Link to="/two">two</Link></li>
            <li><Link to="/three">three</Link></li>
            <li><Link to="/four">four</Link></li>
        </ul>
    );
}

export default Navbar;