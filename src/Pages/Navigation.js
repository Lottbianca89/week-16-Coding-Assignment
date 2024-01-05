import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { ShoppingCart } from 'phosphor-react';

const Navigation = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/dollList', text: 'Doll List' },
    { to: '/christmasdolls', text: 'Christmas Dolls' },
    {to: '/actionfigures', text: 'ActionFigures'},
    { to: '/contact', text: 'Contact' },
  ];

  const cartLink = { to: '/cart', text: 'Shopping Cart' };

  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to} activeClassName="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to={cartLink.to} activeClassName="active-link">
            <ShoppingCart size={20} />
            {cartLink.text}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;