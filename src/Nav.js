import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from './Netflix_logo.svg';
import avatar from './Netflix-avatar.png';

function Nav() {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const scrollEvent = window.addEventListener('scroll', () => {
      if (window.scrollY > 140) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  });

  return (
    <div className={`nav ${navBackground && 'nav-background'}`}>
      <img className='nav-logo' src={logo} alt='logo' />
      <img className='nav-avatar' src={avatar} alt='avatar' />
    </div>
  );
}

export default Nav;
