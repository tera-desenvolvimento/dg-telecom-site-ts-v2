import React from "react";

import boletoIcon from "../img/boleto-icon.svg";
import screenIcon from "../img/screen-icon.svg";
import customerIcon from "../img/customer-icon.svg";
import rocketIcon from "../img/rocket-icon-blue.svg";

import "../style/fastLinks.css";

function FastLinks() {
    return (
        <React.Fragment>
            <div className="fast-links-container">
                <b>Acessos rápidos</b>
                <div className="fast-links-wrapper">
                    <div className="link-item">
                        <img src={boletoIcon} />
                        <span>2ª via do boleto</span>
                        <a href="#">Gerar via</a>
                    </div>
                    <div className="link-item">
                        <img src={screenIcon} />
                        <span>Acesse o App DG</span>
                        <a href="#">Acessar</a>
                    </div>
                    <div className="link-item">
                        <img src={customerIcon} />
                        <span>Fale com o suporte</span>
                        <a href="#">Acessar</a>
                    </div>
                    <div className="link-item">
                        <img src={rocketIcon} />
                        <span>Teste de velocidade</span>
                        <a href="#">Testar</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FastLinks;