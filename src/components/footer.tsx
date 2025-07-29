import logoDg from "../img/logo-header.svg";
import wppIcon from "../img/whatsapp-icon.svg";
import instagramIcon from "../img/insta-icon.svg";
import fbIcon from "../img/fb-icon.svg";
import ytIcon from "../img/yt-icon.svg";
import xIcon from "../img/x-icon.svg";

import "../style/footer.css";

function Footer() {
    return(
        <footer className="footer-element">
            <div className="footer-wrapper">
                <div className="logo-wrapper">
                    <img src={logoDg} className="logo-image" />
                </div>
                <div className="menu-wrapper">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Área do cliente</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">2ª via de fatura</a>
                        </li>
                    </ul>
                </div>
                <div className="menu-wrapper">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">App DG</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Suporte</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Trabalhe conosco</a>
                        </li>
                    </ul>
                </div>
                <div className="social-wrapper">
                    <b>Siga-nos</b>
                    <div className="social-links-wrapper">
                        <ul className="links-list">
                            <li className="link-item">
                                <a href="#" className="social-link">
                                    <img src={wppIcon} className="social-icon" />
                                </a>
                            </li>
                            <li className="link-item">
                                <a href="#" className="social-link">
                                    <img src={instagramIcon} className="social-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span>Todos os direitos reservados © 2025 DG Telecom</span>
        </footer>
    )
}

export default Footer;