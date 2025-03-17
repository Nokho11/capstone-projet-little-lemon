import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/booking" className="nav-link">Booking</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/specializations" className="nav-link">Specializations</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
