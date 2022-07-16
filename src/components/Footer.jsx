import React from 'react';
import { Navbar } from 'reactstrap';
import logo from '../assets/ns-talk-logo.png';

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Navbar color='light' expand='md' light>
        <img src={logo} alt='' width={250} />
      </Navbar>
    </div>
  );
};

export default Footer;
