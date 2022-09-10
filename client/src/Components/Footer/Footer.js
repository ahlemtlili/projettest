import React from 'react';
import { NavLink } from '../Navbar/NavbarElements';
import './Footer.css';

const Footer = () => {

  return (
    <>
      <footer className='app_footer'>
        <div className='waves'>
          <div id='wave1' className='wave'></div>
          <div id='wave2' className='wave'></div>
          <div id='wave3' className='wave'></div>
          <div id='wave4' className='wave'></div>
        </div>
        <ul className='social_icon'>
          <li>
            <a href='/'>
              <ion-icon name='logo-facebook'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-instagram'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-twitter'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-linkedin'></ion-icon>
            </a>
          </li>
          <li>
            <a href='/'>
              <ion-icon name='logo-youtube'></ion-icon>
            </a>
          </li>
        </ul>
        <ul className='menu'>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
          <li>
            <NavLink to='/contactUs' activeStyle>
              Contact US
            </NavLink>
          </li>
        </ul>
        <p>
          <span className='copyright'>©</span> ahlem et nawress | All
          Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
