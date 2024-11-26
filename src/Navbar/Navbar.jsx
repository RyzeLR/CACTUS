import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './NavbarStyles';

export const Navbar = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="./assets/img/cactus.png" alt="Logo Cactus" />
      </Link>

      <Link to="/">
        <img src="./assets/img/larioja.png" alt="Logo Cactus" />
      </Link>
    </HeaderContainer>
  );
};
