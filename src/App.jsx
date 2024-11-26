import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';
import { Navbar } from './Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
