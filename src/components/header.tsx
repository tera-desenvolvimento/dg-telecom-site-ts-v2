import React from 'react';

import logoHeader from '../img/logo-header.svg';
import homeIcon from '../img/home-icon.svg';
import plansIcon from '../img/plans-icon.svg';
import aboutIcon from '../img/about-icon.svg';
import socialIcon from '../img/social-icon.svg';
import contactIcon from '../img/contact-icon.svg';
import rocketIcon from '../img/rocket-icon.svg';
import instagramIcon from "../img/insta-icon.svg";

import '../style/header.css';

import isMobileDevice from '../controllers/checkMobile.controller';

function toggleMobileMenu() {
    let navElement = document.getElementById("navContainerMob");
    navElement?.classList.toggle("active");
}

function Header() {
    if (!isMobileDevice()){
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
    } else {
        return (
            <React.Fragment>
                <header className="header-container-mob">
                    <div className="left-wrapper">
                        <button id="toggleMenu" onClick={toggleMobileMenu}>
                            <svg width="30" height="24" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H31" stroke="#0641EC" strokeWidth="3" strokeLinecap="round"/>
                                <path d="M1 10.5H31" stroke="#0641EC" strokeWidth="3" strokeLinecap="round"/>
                                <path d="M1 20H31" stroke="#0641EC" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <img src={logoHeader} className="logo-header-mob" />
                    </div>
                    <div className="right-wrapper">
                        <a href="https://clientedg.beesweb.com.br/login" target='_blank' className="head-link customer-area">
                            <img src={rocketIcon} alt="Rocket Icon" className="nav-icon" />
                            Área do cliente
                        </a>
                        <a href="#" className="social-link">
                            <img src={instagramIcon} className="social-icon" />
                        </a>
                    </div>
                </header>
                <div className="nav-container-mob" id="navContainerMob">
                    <nav className="nav-element-mob">
                        <ul className="menu-list-mob">
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
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;