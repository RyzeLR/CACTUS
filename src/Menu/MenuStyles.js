import styled from 'styled-components';

export const MenuContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh; /* Usar min-height evita que se exceda el tamaño */
  padding: 2rem;
  background-color: var(--arena);
`;

export const MenuBackground = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--arena)),
    url('./assets/img/la-riojajpg.png');
  background-position: bottom;
  background-size: cover;
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuImage = styled.img`
  width: 600px; /* Controlar tamaño máximo para imágenes */
  object-fit: contain;
  margin-top: 4rem; /* Ajustado para evitar desplazamiento masivo */

  @media (max-width: 992px) {
    width: 400px;
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
