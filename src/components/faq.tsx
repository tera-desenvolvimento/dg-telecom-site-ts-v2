import { SyntheticEvent } from "react";
import dropIcon from "../img/dropdown-icon.svg";
import "../style/faq.css"

function toggleFaqDropdown(event: SyntheticEvent) {
    let element = event.currentTarget as HTMLElement;
    let faqId = element.dataset.itemId as string;

    document.getElementById(faqId)?.classList.toggle("hide");
}

function Faq() {
    return(
        <div className="faq-container">
        <div className="faq-wrapper">
            <div className="title-wrapper">
                <span>Perguntas Frequentes:</span>
            </div>
            <div className="faq-list">
                <div className="faq-item">
                    <div className="dropdown-button" data-item-id="faq-1" onClick={toggleFaqDropdown}>
                        <span>O que acontece quando chove?</span>
                        <img src={dropIcon} alt="dropdown-arrow"/>
                    </div>
                    <div className="dropdown-element hide" id="faq-1">
                        <p>A internet Fibra Óptica da DG Telecom não tem interferência de chuvas ou vento.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="dropdown-button" data-item-id="faq-2" onClick={toggleFaqDropdown}>
                        <span>Qual o prazo para instalação?</span>
                        <img src={dropIcon} alt="dropdown-arrow"/>
                    </div>
                    <div className="dropdown-element hide" id="faq-2">
                        <p>Em até 24 horas após a confirmação do planos, sua internet já estará instalada e pronta pra uso!</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="dropdown-button" data-item-id="faq-3" onClick={toggleFaqDropdown}>
                        <span>Qual canal oficial do suporte?</span>
                        <img src={dropIcon} alt="dropdown-arrow"/>
                    </div>
                    <div className="dropdown-element hide" id="faq-3">
                        <p>Nosso suporte atende através do WhatsApp 79 9 9898-1717, funcionando 24 horas.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <div className="dropdown-button" data-item-id="faq-4" onClick={toggleFaqDropdown}>
                        <span>O que é o App da DG?</span>
                        <img src={dropIcon} alt="dropdown-arrow"/>
                    </div>
                    <div className="dropdown-element hide" id="faq-4">
                        <p>Assinando o plano de 300mb ou contratando por apenas R$29,99, você terá acesso ao nosso app com mais de 2 mil canais, acesso a todas as plataformas de streaming como Netflix, Hbo, Amazon Prime e os principais canais de futebol como PREMIERE, Sport Tv e muito mais!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Faq;