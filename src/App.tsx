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
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 2700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <Header/>
      <MainBanner/>
      <PlansWrapper/>
      <FastLinks/>
      <Billboard/>
      <div className="testimonial-container">
        <b>Nossos clientes:</b>
        <Slider {...sliderSettings} className='testimonial-slider'>
          <Testimonial name="João Pereira" testimonial="A DG Telecom transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
          <Testimonial name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
          <Testimonial name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a DG Telecom superou minhas expectativas." />
          <Testimonial name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
          <Testimonial name="João Pereira" testimonial="A DG Telecom transformou minha experiência de navegação. A internet é extremamente rápida e estável." />
          <Testimonial name="Maria Souza" testimonial="O suporte técnico é incrível, sempre disponível e eficiente. Recomendo a todos!" />
          <Testimonial name="Carlos Silva" testimonial="Desde a instalação até o atendimento ao cliente, a DG Telecom superou minhas expectativas." />
          <Testimonial name="Fernanda Oliveira" testimonial="A melhor internet que já usei. Perfeita para minha empresa." />
        </Slider>
      </div>
      <Faq/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
