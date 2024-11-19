import React from 'react';
import HeaderDesktop from './headers/HeaderDesktop.js';
import HeaderMobile from './headers/HeaderMobile.js';
import useWindowWidth from './functions/useWindowWidth.js';

const Header = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;