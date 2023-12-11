// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'; 
import Dollist from './Dollist'; 
import About from './About'; 
import Contact from './Contact'; 

const App = () => {
  console.log("this loaded the app.js")
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/dollList" element={<Dollist />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;