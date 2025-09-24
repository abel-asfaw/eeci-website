import eeciLogo from '../assets/eeci-logo-white.JPG'
import './Navbar.css'

export function Navbar() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <a href="/" className="logo">
                    <img alt="EECI" src={eeciLogo}/>
                </a>
                <ul className="nav-links">
                    <li><button className="nav-button">About</button></li>
                    <li><button className="nav-button">Visit</button></li>
                    <li><button className="nav-button">Give</button></li>
                </ul>
            </nav>
        </header>
    );
}