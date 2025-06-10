import React from "react";

import cemMegas from "../img/100megas.svg";
import duzMegas from "../img/200megas.svg";
import trezMegas from "../img/300megas.svg";

import "../style/plansWrapper.css";

function PlansWrapper() {
    return(
        <React.Fragment>
            <div className="plans-container">
                <b>Conheça nossos planos</b>
                <div className="plans-wrapper">
                    <div className="plan-item">
                        <img src={cemMegas} className="plan-image" />
                        <a href="#">Clique aqui e assine</a>
                    </div>
                    <div className="plan-item">
                        <img src={duzMegas} className="plan-image" />
                        <a href="#">Clique aqui e assine</a>
                    </div>
                    <div className="plan-item">
                        <img src={trezMegas} className="plan-image" />
                        <a href="#">Clique aqui e assine</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PlansWrapper;