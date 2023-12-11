import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/dollList', text: 'Doll List' },
    { to: '/contact', text: 'Contact' },
  ];

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
      </ul>
    </nav>
  );
};

export default Navigation;