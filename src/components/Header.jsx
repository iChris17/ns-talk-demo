import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../assets/ns-talk-logo.png';

const Header = () => {
  return (
    <div>
      <Navbar color='light' expand='md' light>
        <NavbarBrand href='/'>NS Talk Demo</NavbarBrand>
        <img src={logo} alt='' width={250} />
      </Navbar>
    </div>
  );
};

export default Header;
