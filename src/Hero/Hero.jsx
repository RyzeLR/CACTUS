import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGlobal, ButtonsContainer, HeroContainer } from './HeroStyles';

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      once: true, // Las animaciones se ejecutan solo una vez
    });
  }, []);

  return (
    <HeroContainer>
      {/* Agregando animaciones a los elementos */}
      <h1 data-aos="fade-down">Descubre La Esencia de La Rioja</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Sabores únicos, paisajes deslumbrantes y la calidez de su cultura.
      </p>
      <ButtonsContainer>
        <ButtonGlobal data-aos="zoom-in" data-aos-delay="400">
          <Link to="/menu">Explorar Menú</Link>
        </ButtonGlobal>
        <ButtonGlobal data-aos="zoom-in" data-aos-delay="600">
          <a
            target="blank"
            href="https://maps.app.goo.gl/rZuhWdNpAFRqaBmj9?g_st=ac"
          >
            Ubicación
          </a>
        </ButtonGlobal>
      </ButtonsContainer>
    </HeroContainer>
  );
};
