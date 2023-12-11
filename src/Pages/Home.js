import React from 'react';
import './Home.css';
import Navigation from './Navigation';


const Home = () => {
  return (
    <div className='dollhouse-container'>
      <Navigation/>
      <div className="DollList">
        <div className="About">
          <div className='Contact'>
           
            <h1>Doll House</h1>
            <p>Explore our collection of beautiful dolls crafted with love and attention to detail.</p>
            <ul>
              <li>Discover unique and handcrafted doll designs.</li>
              <li>Perfect gifts for any occasion.</li>
              <li>Join our community of doll enthusiasts!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;