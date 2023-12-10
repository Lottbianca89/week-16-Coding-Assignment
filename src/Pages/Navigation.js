import React from 'react';

const Navigation = () => {

  const navLinks = ["About",  "Contact"];

    return (

        <nav>
          <ul>
            {
              navLinks.map((link) => {
                return (
                        <li>
                          <a href="#">{link}</a>
                        </li>
                );
              })
           }
        </ul>
        </nav>
    );
}

export default Navigation;