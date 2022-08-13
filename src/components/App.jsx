import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroDetails from './HeroDetails';
import HeroList from './HeroList';
import Counter from './Counter';
import Navbar from './Navbar';

function App({ heroes, hero }) {
  return (
    <div className="container">
      <Navbar />
      <h1></h1>
      <Routes>
        <Route path="/" element={<HeroList heroesProp={heroes} />} />
        <Route path="/heroes/:id" element={<HeroDetails heroProp={hero} />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
