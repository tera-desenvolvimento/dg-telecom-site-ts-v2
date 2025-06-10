import logoHeader from '../img/logo-header.svg';
import homeIcon from '../img/home-icon.svg';
import plansIcon from '../img/plans-icon.svg';
import aboutIcon from '../img/about-icon.svg';
import socialIcon from '../img/social-icon.svg';
import contactIcon from '../img/contact-icon.svg';
import rocketIcon from '../img/rocket-icon.svg';

import '../style/header.css';

function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src={logoHeader} alt="Logo" className="logo" />
            </div>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={homeIcon} alt="Home Icon" className="nav-icon" />
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#plans" className="nav-link">
                            <img src={plansIcon} alt="Plans Icon" className="nav-icon" />
                            Planos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            <img src={aboutIcon} alt="About Icon" className="nav-icon" />
                            Sobre Nós
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#social" className="nav-link">
                            <img src={socialIcon} alt="Social Icon" className="nav-icon" />
                            Social
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <img src={contactIcon} alt="Contact Icon" className="nav-icon" />
                            Contato
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://clientedg.beesweb.com.br/login" target='_blank' className="nav-link customer-area">
                            <img src={rocketIcon} alt="Rocket Icon" className="nav-icon" />
                            Área do cliente
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;