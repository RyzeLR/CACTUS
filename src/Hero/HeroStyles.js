import styled from 'styled-components';

export const MainContainer = styled.section`
  height: 100vh;
`;

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('/public/la-riojajpg.png');
  background-position: bottom;
  background-size: cover;
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: #fff;
  }

  p {
    font-size: 1rem;
    color: #fff;
    letter-spacing: 1px;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonGlobal = styled.button`
  background-color: var(--cactus);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--verde-olivo);
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
