import React from "react";

import blocoLeft from "../img/bloco-banner-left.svg";
import blocoRight from "../img/bloco-banner-right.svg";

import '../style/mainBanner.css';

function MainBanner() {
  return (
    <React.Fragment>
      <div className="main-banner">
        <div className="bloco-banner-left">
          <img src={blocoLeft} />
          <a href="https://bin2.officez.top/t/6e021e7c-6d2e-420e-8cdb-84f0aab0ba3a" target="_blank" rel="noopener noreferrer" className="cta-link">Clique aqui</a>
        </div>
        <img src={blocoRight} className="bloco-banner-right" />
      </div>
      <div className="banner-info">
        <span>
          Instalação com roteador grátis, suporte personalizado 24 horas por dia, Wi-Fi que pega na casa toda e navegação rápida e segura!
        </span>
      </div>
    </React.Fragment>
  );
}

export default MainBanner;