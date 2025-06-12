import React from "react";
import Slider from "react-slick";

import blocoLeft from "../img/bloco-banner-left.svg";
import blocoRight from "../img/bloco-banner-right.svg";

import bannerMob1 from "../img/bannerMob01.svg";
import bannerMob2 from "../img/bannerMob02.svg";

import '../style/mainBanner.css';

import isMobileDevice from '../controllers/checkMobile.controller';

function goToLink() {
  let url = "https://bin2.officez.top/t/6e021e7c-6d2e-420e-8cdb-84f0aab0ba3a";
  window.open(url, "_blank");
}

function MainBanner() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  if (!isMobileDevice()){
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
  } else {
    return (
      <React.Fragment>
        <div className="main-banner-mob">
          <Slider {...sliderSettings} className="banner-slider">
            <img src={bannerMob1} onClick={goToLink}/>
            <img src={bannerMob2} onClick={goToLink}/>
          </Slider>
          <div className="mob-auto-scroll">
            <span>
              Instalação com roteador grátis, suporte personalizado 24 horas por dia, Wi-Fi que pega na casa toda e navegação rápida e segura!
            </span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MainBanner;