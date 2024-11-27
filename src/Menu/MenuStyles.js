import styled from 'styled-components';

export const MenuContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh; /* Usar min-height evita que se exceda el tamaño */
  padding: 2rem;
  background-color: var(--verde-olivo);
`;

export const MenuBackground = styled.div`
  width: 100vw;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Necesario para el uso de ::before */
  z-index: 20;

  /* Fondo y gradiente ajustados */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1; /* Fondo más visible */
    filter: blur(5px); /* Menos desenfoque para que la imagen sea más clara */
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 60%,
        /* Gradiente más sutil */ var(--verde-olivo)
      ),
      url('/assets/img/larioja4.jpg');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

export const MenuImage = styled.img`
  position: relative;
  z-index: 2; /* Por encima del fondo */
  width: 600px; /* Ajusta el tamaño según necesidad */
  max-width: 100%; /* Asegura que no sea demasiado grande */
  filter: drop-shadow(
    0px 4px 6px rgba(0, 0, 0, 0.3)
  ); /* Mejora la visibilidad */

  @media (max-width: 992px) {
    width: 800px;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const CardImage = styled.img`
  max-width: 600px; /* Controlar tamaño máximo de la tarjeta */
  border-radius: 10px;
  box-shadow: 0px 4px 8px #000;
  transition: transform 0.3s ease;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 992px) {
    max-width: 300px;
  }
`;
