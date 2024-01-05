import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ShoppingCart from './Pages/ShoppingCart';
import DollList from './Components/DollList';
import Christmasdolls from './Components/Christmasdolls';
import ActionFigures from './Components/ActionFigures';

const ErrorComponent = ({ message }) => (
  <div>
    <p>Error: {message}</p>
  </div>
);

const LoadingComponent = () => (
  <div>Loading...</div>
);

const App = () => {
  const [dollData, setDollData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://656bd32de1e03bfd572dd99f.mockapi.io/DollHouse');
        if (!response.ok) {
          throw new Error('Failed to fetch data. Please try again later.');
        }

        const data = await response.json();
        setDollData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hide the navigation bar on the dollList route
  const hideNavigation = window.location.pathname.includes('/dollList');

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {loading && <Route path="/dollList" element={<LoadingComponent />} />}
        {error && <Route path="/dollList" element={<ErrorComponent message={error} />} />}
        {!loading && !error && <Route path="/dollList" element={<DollList dolls={dollData} />} />}
        <Route path="/christmasdolls" element={<Christmasdolls />} />
        <Route path="/actionfigures" element={<ActionFigures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
};

export default App;