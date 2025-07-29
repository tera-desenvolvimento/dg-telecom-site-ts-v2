import React from 'react';
import Slider from "react-slick";

import Header from './components/header';
import MainBanner from './components/mainBanner';
import PlansWrapper from './components/plansWrapper';
import FastLinks from './components/fastLinks';
import Billboard from './components/billboard';
import Testimonial from './components/testimonial';
import Faq from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <MainBanner/>
      <PlansWrapper/>
      <FastLinks/>
      <Billboard/>
      <div className="testimonial-container slider-testimonial">
        <b>Nossos clientes:</b>

        <div className='testimonial-slider slide-track'>
          <Testimonial name="João Pereira" testimonial="A DG Telecom transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
          <Testimonial name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
          <Testimonial name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a DG Telecom superou minhas expectativas." />
          <Testimonial name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
          <Testimonial name="João Pereira" testimonial="A DG Telecom transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
          <Testimonial name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
          <Testimonial name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a DG Telecom superou minhas expectativas." />
          <Testimonial name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
        </div>
      </div>
      <Faq/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
