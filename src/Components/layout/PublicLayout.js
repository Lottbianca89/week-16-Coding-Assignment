import React from 'react';
import Header from '../Header';
import About from '../About';
import Contact from '../../Pages/Contact';
import Footer from '../Footer';
import Navigation from '../Navigation';

const PublicLayout = ({ children }) => {
  return (
    <div className="container">
      {/* Header section */}
      <Header>
        <About />
        <Contact />
        <Navigation />
      </Header>

      {/* Main content section */}
      <main>
        {children}
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default PublicLayout;